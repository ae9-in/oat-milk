"use client"

import React, { useEffect, useRef, useState } from "react"

// ─────────────────────────────────────────────────────────────────
//  CONFIG — one-line swap:
//    'model-viewer'  → Google model-viewer web component (current)
//    'tripo-embed'   → Tripo iframe (blocked by X-Frame-Options)
// ─────────────────────────────────────────────────────────────────
const PACKAGING_VIEWER_MODE: "model-viewer" | "tripo-embed" = "model-viewer"

// ─────────────────────────────────────────────────────────────────
//  ASSET CONFIG — swap glbSrc here when your real model is ready
// ─────────────────────────────────────────────────────────────────
const PACKAGING_ASSET = {
  // Real Tripo3D oat milk packaging model — downloaded 2026-06-20
  // To swap in a new export, replace this path with the new GLB file.
  glbSrc: "/assets/3d/oatmilk-packaging-tripo.glb",
  tripoUrl:
    "https://studio.tripo3d.ai/3d-model/5c4ee5fe-4d34-4329-849c-d809aabe6e68?invite_code=T1OZUZ",
  alt: "Oatmeal packaging pouch — 500 g kraft + biofilm, 3D render",
}

const PACKAGING_SPECS = {
  weight: "500 g",
  dimensions: "18 × 11 × 6 cm",
  material: "Kraft + biofilm",
  shelfLife: "9 months",
}

const PACKAGING_FEATURES = [
  "Compostable kraft pouch with recyclable inner liner",
  "Resealable zip-lock strip for freshness",
  "Matte soy-ink print — no harsh chemicals",
  "Tamper-evident mill-applied seal",
]

// ─────────────────────────────────────────────────────────────────
//  3D Viewer sub-component
// ─────────────────────────────────────────────────────────────────
function PackagingViewer({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const modelViewerRef = useRef<any>(null)
  const [status, setStatus] = useState<string>("Initializing...")
  const [debugInfo, setDebugInfo] = useState<string>("")

  useEffect(() => {
    let active = true;
    
    const initViewer = async () => {
      try {
        if (typeof window === "undefined") return;

        setStatus("Loading 3D Engine...");
        
        // 1. Load meshopt decoder locally
        const { MeshoptDecoder } = await import("meshoptimizer");
        await MeshoptDecoder.ready;
        (window as any).MeshoptDecoder = MeshoptDecoder;
        
        // Configure the decoder location for model-viewer's Web Worker thread
        (window as any).ModelViewerElement = (window as any).ModelViewerElement || {};
        (window as any).ModelViewerElement.meshoptDecoderLocation = '/meshopt_decoder.js';
        
        if (!active) return;
        setStatus("3D Engine Ready. Loading Model...");

        // 2. Load model-viewer locally
        await import("@google/model-viewer");
        
        if (!active) return;

        // Verify registration
        const isDefined = !!window.customElements?.get('model-viewer');
        const hasMeshopt = !!(window as any).MeshoptDecoder;
        setDebugInfo(prev => `Element registered: ${isDefined}\nMeshoptDecoder present: ${hasMeshopt}\nGLB Source: ${PACKAGING_ASSET.glbSrc}\n` + prev);
      } catch (err: any) {
        console.error("Failed to initialize 3D viewer:", err);
        setStatus("Failed to load 3D engine.");
        setDebugInfo(prev => `Initialization Error: ${err.message || err}\n` + prev);
      }
    };

    initViewer();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const el = modelViewerRef.current
    if (!el) return

    const handleLoad = () => {
      setStatus("Model loaded successfully!")
    }

    const handleError = (e: any) => {
      console.error("model-viewer error:", e)
      const detail = e.detail || {}
      setStatus(`Error: ${detail.type || "unknown error"}`)
      setDebugInfo(prev => prev + `\nError Details: ${JSON.stringify(detail)}`)
    }

    const handleProgress = (e: any) => {
      setStatus(`Loading progress: ${Math.round(e.detail.totalProgress * 100)}%`)
    }

    el.addEventListener('load', handleLoad)
    el.addEventListener('error', handleError)
    el.addEventListener('progress', handleProgress)

    return () => {
      el.removeEventListener('load', handleLoad)
      el.removeEventListener('error', handleError)
      el.removeEventListener('progress', handleProgress)
    }
  }, [status]) // re-bind listeners if the element upgrades or status changes

  if (PACKAGING_VIEWER_MODE === "model-viewer") {
    return (
      <div className="packaging-viewer-frame">
        {/* @ts-expect-error — model-viewer is a custom HTML element */}
        <model-viewer
          ref={modelViewerRef}
          src={PACKAGING_ASSET.glbSrc}
          alt={PACKAGING_ASSET.alt}
          camera-controls
          camera-orbit="40deg 75deg 105%"
          shadow-intensity="1"
          shadow-softness="0.8"
          exposure="1.1"
          environment-image="neutral"
          interaction-prompt="none"
          poster="/assets/images/packaging-poster.png"
          loading="eager"
          reveal="auto"
          interpolation-decay="200"
          {...(prefersReducedMotion ? {} : {})}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "460px",
            background: "transparent",
            "--progress-bar-color": "var(--color-caramel)",
            "--progress-bar-height": "2px",
          } as React.CSSProperties}
        >
          <div slot="poster" className="viewer-model-poster">
            <div className="viewer-spinner" aria-label="Loading 3D model" />
            <span className="sr-only">Loading model…</span>
          </div>
          {/* @ts-expect-error */}
        </model-viewer>

        <div className="viewer-hint" aria-hidden="true">
          ↻ Drag to rotate
        </div>
      </div>
    )
  }

  // Tripo embed (kept for reference — blocked by X-Frame-Options in practice)
  return (
    <div className="packaging-viewer-frame">
      <iframe
        src={PACKAGING_ASSET.tripoUrl}
        loading="lazy"
        allow="fullscreen; xr-spatial-tracking"
        title="Oatmeal packaging 3D model viewer"
        aria-label="Interactive 3D viewer of Oatmeal packaging"
        style={{ width: "100%", flex: 1, minHeight: "460px", border: "none" }}
      />
      <div className="viewer-hint" aria-hidden="true">↻ Drag to rotate</div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────
//  Main Section Export
// ─────────────────────────────────────────────────────────────────
export function Packaging3DViewer({
  prefersReducedMotion = false,
}: {
  prefersReducedMotion?: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  // GSAP ScrollTrigger fade-up reveal — same pattern as the rest of the page
  useEffect(() => {
    if (typeof window === "undefined") return

    let trigger: { kill: () => void } | null = null

    const init = async () => {
      try {
        const { default: gsap } = await import("gsap")
        const { ScrollTrigger } = await import("gsap/ScrollTrigger")
        gsap.registerPlugin(ScrollTrigger)

        if (!cardRef.current) return

        gsap.fromTo(
          cardRef.current,
          prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
            },
          }
        )

        const allTriggers = ScrollTrigger.getAll()
        if (allTriggers.length > 0) {
          trigger = allTriggers[allTriggers.length - 1]
        }
      } catch {
        // GSAP unavailable — degrade gracefully
        if (cardRef.current) {
          cardRef.current.style.opacity = "1"
          cardRef.current.style.transform = "none"
        }
      }
    }

    init()

    return () => {
      trigger?.kill()
    }
  }, [prefersReducedMotion])

  return (
    <section className="packaging-section" aria-labelledby="packaging-heading">
      <div className="container">
        <div className="packaging-card" ref={cardRef}>

          {/* ── Left: Packaging spec sheet ── */}
          <div className="packaging-info">
            <div className="packaging-eyebrow" aria-hidden="true">
              <span className="eyebrow-rule" />
              <span className="eyebrow-label">Inside the pack</span>
            </div>

            <h2 id="packaging-heading" className="packaging-heading">
              Packaging built to{" "}
              <em className="packaging-heading-em">protect the ritual</em>
            </h2>

            <p className="packaging-lead">
              Every detail of our pouch is engineered to preserve freshness and
              reduce waste — from the mill to your cup. Drag the model to explore
              the design from every angle.
            </p>

            <dl className="packaging-specs-grid" aria-label="Packaging specifications">
              <div className="spec-card">
                <dt className="spec-label">Net weight</dt>
                <dd className="spec-value" data-spec="weight">{PACKAGING_SPECS.weight}</dd>
              </div>
              <div className="spec-card">
                <dt className="spec-label">Dimensions</dt>
                <dd className="spec-value" data-spec="dimensions">{PACKAGING_SPECS.dimensions}</dd>
              </div>
              <div className="spec-card">
                <dt className="spec-label">Material</dt>
                <dd className="spec-value" data-spec="material">{PACKAGING_SPECS.material}</dd>
              </div>
              <div className="spec-card">
                <dt className="spec-label">Shelf life</dt>
                <dd className="spec-value" data-spec="shelf-life">{PACKAGING_SPECS.shelfLife}</dd>
              </div>
            </dl>

            <ul className="packaging-features" aria-label="Packaging features">
              {PACKAGING_FEATURES.map((feature, i) => (
                <li key={i} className="packaging-feature-item">
                  <span className="feature-dot" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="/oatmilk-packaging-spec.pdf"
              className="packaging-cta-btn"
              download
              aria-label="Download packaging specification sheet (PDF)"
            >
              Download spec sheet&nbsp;→
            </a>
          </div>

          {/* ── Right: 3D Viewer ── */}
          <div className="packaging-viewer-wrap" aria-label="Interactive 3D packaging viewer">
            <PackagingViewer prefersReducedMotion={prefersReducedMotion} />
          </div>

        </div>
      </div>
    </section>
  )
}
