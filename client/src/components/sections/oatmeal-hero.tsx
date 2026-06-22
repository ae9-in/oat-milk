"use client"

import * as React from "react"
import { useReducedMotion } from "motion/react"
import { ArrowRight } from "lucide-react"
import {
  ContainerScroll,
  ContainerSticky,
  ContainerAnimated,
  ContainerInset,
  HeroImage,
  HeroButton,
} from "@/components/ui/animated-video-on-scroll"

export function OatmealHero({ isLoading = false }: { isLoading?: boolean }) {
  const shouldReduceMotion = useReducedMotion()

  // Custom static styles to override scroll animations if reduced motion is requested
  const animatedContainerStyle = shouldReduceMotion
    ? { y: 0, opacity: 1, filter: "none" }
    : undefined

  const insetStyle = shouldReduceMotion
    ? { clipPath: "inset(0% 0% 0% 0% round 16px)" }
    : undefined

  const imageStyle = shouldReduceMotion
    ? { scale: 1 }
    : undefined

  return (
    <ContainerScroll className="h-[150vh] md:h-[200vh] w-full">
      <ContainerSticky className="flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image of the farm */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/farm-bg.jpg)",
          }}
        />
        {/* Semi-transparent dark overlay to ensure text contrast and readability */}
        <div className="absolute inset-0 z-10 bg-black/45" />

        {/* Foreground Content Layout */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-center items-stretch h-full py-12 gap-8 md:gap-12">
          {/* Animated Header & Text Block - Left Aligned */}
          <ContainerAnimated
            className="flex flex-col items-start text-left max-w-2xl"
            style={animatedContainerStyle}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate={shouldReduceMotion ? "visible" : (isLoading ? "hidden" : "visible")}
          >
            <h1 className="hero-headline font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream-base tracking-tighter leading-tight">
              <span className="inline-block">Naturally&nbsp;</span>
              <span className="inline-block text-caramel">creamy.&nbsp;</span>
              <span className="inline-block">Crafted for&nbsp;</span>
              <span className="inline-block text-caramel">coffee.</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-toasted-oat/90 max-w-xl font-body">
              Sourced from local fields and pressed for a microfoam-ready texture
              that enhances every roast. Barista performance, naturally.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {/* Primary CTA - Styled with Caramel Accent */}
              <HeroButton
                className="border-caramel bg-caramel/10 text-cream-base shadow-[0px_4px_24px_rgba(200,153,104,0.3)] hover:bg-caramel hover:text-espresso hover:shadow-[0px_4px_32px_rgba(200,153,104,0.5)] focus-visible:outline-2 focus-visible:outline-caramel focus-visible:outline-offset-2 transition-all duration-300 font-semibold"
                transition={{ delay: 0.4 }}
              >
                <span>Shop Oat Milk</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </HeroButton>

              {/* Secondary CTA - Styled to match existing page styles */}
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-toasted-oat/30 bg-transparent px-5 py-2 text-cream-base hover:bg-cream-base/10 transition-colors focus-visible:outline-2 focus-visible:outline-caramel focus-visible:outline-offset-2 text-sm font-medium"
              >
                Our Story
              </a>
            </div>
          </ContainerAnimated>

          {/* Inset Image Reveal Container */}
          <div className="w-full flex items-center justify-center">
            <ContainerInset
              className="w-full max-w-[320px] md:max-w-[360px] aspect-[2/3] max-h-[480px] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden border border-white/5"
              style={insetStyle}
              insetYRange={[45, 0]}
              insetXRange={[45, 0]}
              roundednessRange={[1000, 16]}
            >
              {/* Ref Image from attachments and public folder */}
              <HeroImage
                src="/hero-reveal.png"
                alt="Two glass bottles of Oat Milk oat milk beside scattered toasted oats on a dark wood table"
                className="w-full h-full object-cover"
                style={imageStyle}
                loading="eager"
              />
            </ContainerInset>
          </div>
        </div>
      </ContainerSticky>
    </ContainerScroll>
  )
}
