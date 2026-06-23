import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ChevronDown, ShoppingCart, Check, Loader2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { OatmealHero } from '@/components/sections/oatmeal-hero';
import { UseCasesMarquee } from '@/components/sections/use-cases-marquee';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Packaging3DViewer } from '@/components/sections/packaging-3d-viewer';

gsap.registerPlugin(ScrollTrigger);

/**
 * OATMEAL PREMIUM WEBSITE
 * Design System: Fluid Modernity
 * Colors: Cream (#FAF8F3), Espresso (#2B2520), Caramel (#C89968), Matcha Green (#9BA89C)
 * Typography: Poppins (display) + Inter (body)
 * Motion: GSAP ScrollTrigger + native scroll + magnetic hover + staggered reveals
 */

const products = [
  {
    id: 'original',
    name: 'Original',
    description: 'Pure, creamy, stone-milled oats',
    image: 'https://images.unsplash.com/photo-1568651779193-e6e6c382e2c7?w=500&h=500&fit=crop',
    froth: 9,
    protein: '2g',
    sugar: '0g',
    calories: '35',
    fat: '1.5g',
    carbs: '1.2g',
    features: ['100% Organic Oats', 'No Added Sugars', 'Gluten-Free Certified', 'Rich in Beta-Glucans'],
  },
  {
    id: 'barista',
    name: 'Barista Blend',
    description: 'Crafted for micro-foam & latte art',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&h=500&fit=crop',
    froth: 10,
    protein: '2.5g',
    sugar: '0g',
    calories: '40',
    fat: '2.0g',
    carbs: '1.5g',
    features: ['Stretches Beautifully', 'Espresso Compatible', 'Stable Microfoam', 'Acid Balanced'],
  },
  {
    id: 'unsweetened',
    name: 'Unsweetened',
    description: 'Clean, light, and versatile',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=500&h=500&fit=crop',
    froth: 8,
    protein: '2g',
    sugar: '0g',
    calories: '25',
    fat: '1.0g',
    carbs: '0.8g',
    features: ['Keto Friendly', 'Low Calorie', 'No Added Sugars', 'Perfect for Cooking'],
  },
  {
    id: 'vanilla',
    name: 'Vanilla Bean',
    description: 'Infused with real Madagascar vanilla',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=500&h=500&fit=crop',
    froth: 8,
    protein: '2g',
    sugar: '4g',
    calories: '45',
    fat: '1.5g',
    carbs: '3.5g',
    features: ['Madagascar Vanilla Extract', 'Natural Sweetness', 'Warm Aroma', 'Superb in Cold Brew'],
  },
  {
    id: 'chocolate',
    name: 'Dark Chocolate',
    description: 'Rich Belgian cocoa infusion',
    image: 'https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=500&h=500&fit=crop',
    froth: 7,
    protein: '2g',
    sugar: '7g',
    calories: '55',
    fat: '2.2g',
    carbs: '5.0g',
    features: ['Authentic Belgian Cocoa', 'Indulgently Rich', 'No Artificial Flavors', 'Great Hot or Cold'],
  },
  {
    id: 'matcha',
    name: 'Ceremonial Matcha',
    description: 'Creamy blend with Japanese matcha',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&h=500&fit=crop',
    froth: 9,
    protein: '2g',
    sugar: '3g',
    calories: '40',
    fat: '1.2g',
    carbs: '3.0g',
    features: ['Uji Ceremonial Matcha', 'L-Theanine Infused', 'Calm Energy', 'Whisked Perfection'],
  },
  {
    id: 'turmeric',
    name: 'Golden Turmeric',
    description: 'Spiced with turmeric and ginger',
    image: 'https://images.unsplash.com/photo-1614707267537-b85acf00c4b8?w=500&h=500&fit=crop',
    froth: 8,
    protein: '2g',
    sugar: '3g',
    calories: '42',
    fat: '1.5g',
    carbs: '3.2g',
    features: ['Organic Turmeric Root', 'Anti-inflammatory Benefits', 'Warming Spices', 'Perfect Evening Pour'],
  },
  {
    id: 'chai',
    name: 'Spiced Chai',
    description: 'Brewed black tea with aromatic spices',
    image: 'https://images.unsplash.com/photo-1598838342487-3c6f09a06143?w=500&h=500&fit=crop',
    froth: 8,
    protein: '2g',
    sugar: '5g',
    calories: '48',
    fat: '1.5g',
    carbs: '4.0g',
    features: ['Traditional Masala Spices', 'Real Black Tea Extract', 'Perfect Cinnamon Notes', 'Robust Flavor'],
  },
  {
    id: 'strawberry',
    name: 'Strawberry Cream',
    description: 'Blend with sweet summer strawberries',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500&h=500&fit=crop',
    froth: 7,
    protein: '2g',
    sugar: '6g',
    calories: '50',
    fat: '1.6g',
    carbs: '4.5g',
    features: ['Real Strawberry Puree', 'Fruity & Refreshing', 'Rich Creamy Finish', 'Kids & Adults Favorite'],
  },
  {
    id: 'lavender',
    name: 'Honey Lavender',
    description: 'Notes of lavender and wildflower honey',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&h=500&fit=crop',
    froth: 8,
    protein: '2g',
    sugar: '4g',
    calories: '46',
    fat: '1.5g',
    carbs: '3.8g',
    features: ['Culinary Lavender Extract', 'Wildflower Honey Accent', 'Floral & Soothing', 'Great in Earl Grey'],
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Aditi Krishnan',
    role: 'Coffee Blogger',
    company: 'Bengaluru Brews',
    content: 'Finally found an oat milk that actually froths for my morning cup! Oat Milk has completely transformed my daily South Indian filter coffee routine. Truly matches the milk texture perfectly.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Nair',
    role: 'Head Barista',
    company: 'The Malabar Cafe, Kochi',
    content: 'We switched to Oat Milk for our specialty lattes and our customers immediately fell in love with it. It froths beautifully and pairs perfectly with single-origin Indian coffee beans.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Karthik Srinivasan',
    role: 'Founder',
    company: 'Eco Ooty Estates',
    content: "Not only does it taste rich and creamy, but knowing that the oats are sourced sustainably and clean-labeled makes me feel good about our choice. Outstanding product!",
    rating: 5,
  },
  {
    id: 4,
    name: 'Ananya Shetty',
    role: 'Nutrition & Wellness Consultant',
    company: 'Nourish Hyderabad',
    content: 'The Unsweetened and Vanilla Bean variants are absolute game-changers. No weird preservatives, just pure, clean oat goodness. The best plant milk in South India.',
    rating: 5,
  },
];

export default function HomeDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const liquidGlassRef = useRef<HTMLDivElement>(null);
  const liquidFillRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [cartState, setCartState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [selectedVariant, setSelectedVariant] = useState('original');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [fillPercent, setFillPercent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState<typeof products[0] | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll tracking to transition navigation bar background and colors
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Milestones for the liquid pour animation
  const milestones = [
    { range: [0, 20], label: "Sourced from the field" },
    { range: [20, 45], label: "Pressed and filtered" },
    { range: [45, 70], label: "Blended for creaminess" },
    { range: [70, 100], label: "Poured for you" },
  ];

  // Detect prefers-reduced-motion media query
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Hide loading screen after page loads with transition delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderExiting(true); // Trigger scale down / fade transition
      
      const exitTimer = setTimeout(() => {
        setIsLoading(false);  // Trigger hero animation
        setShowLoader(false);  // Unmount loader
      }, 600); // Wait for transition to complete
      return () => clearTimeout(exitTimer);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // ScrollTrigger for liquid pour animation with pinning
  useEffect(() => {
    if (isLoading || prefersReducedMotion) return; // Wait until loading screen completes & bypass if reduced motion is preferred
    if (!liquidFillRef.current) return;

    const pourSection = document.querySelector('.liquid-pour-container');
    if (!pourSection) return;

    let lastMilestone = 0;

    // Pin the pour section and scrub the liquid fill height
    const trigger = ScrollTrigger.create({
      trigger: pourSection,
      start: 'top top',
      end: '+=1000',      // Scroll distance for the animation in pixels
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progressPercent = Math.round(self.progress * 100);
        setFillPercent(progressPercent);
        
        // Update liquid height
        gsap.to(liquidFillRef.current, {
          height: `${progressPercent}%`,
          duration: 0.1,
          ease: 'none',
          overwrite: 'auto',
        });

        // Detect milestone crossing for scale-pulse feedback
        let currentMilestone = 0;
        if (progressPercent >= 20 && progressPercent < 45) currentMilestone = 1;
        else if (progressPercent >= 45 && progressPercent < 70) currentMilestone = 2;
        else if (progressPercent >= 70) currentMilestone = 3;

        if (currentMilestone !== lastMilestone) {
          lastMilestone = currentMilestone;
          gsap.fromTo(liquidGlassRef.current, 
            { scale: 1.0 },
            { 
              scale: 1.02, 
              duration: 0.15, 
              yoyo: true, 
              repeat: 1, 
              ease: 'power2.out',
              overwrite: 'auto'
            }
          );
        }

        // Tilt glass based on velocity
        const velocity = self.getVelocity();
        const maxTilt = 8;
        const tilt = Math.max(-maxTilt, Math.min(maxTilt, velocity * 0.003));
        
        gsap.killTweensOf(liquidGlassRef.current);
        gsap.to(liquidGlassRef.current, {
          rotate: tilt,
          duration: 0.2,
          ease: 'power1.out',
        });
        
        // Settle back to 0 when scrolling stops
        gsap.to(liquidGlassRef.current, {
          rotate: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.15,
          overwrite: 'auto',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [isLoading, prefersReducedMotion]);

  // Modal animations
  useEffect(() => {
    if (showModal && modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [showModal]);

  // Parallax effect for hero background
  useEffect(() => {
    if (!heroRef.current) return;

    const handleParallax = () => {
      if (!heroRef.current) return;
      const yOffset = window.scrollY * 0.5;
      heroRef.current.style.backgroundPosition = `center ${yOffset}px`;
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  // Hero entrance animation
  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo('.hero-headline span', 
      {
        opacity: 0,
        y: 30,
        filter: 'blur(20px)',
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      }, 
      0
    )
      .from('.hero-subheading', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, 0.3)
      .from('.hero-cta', {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: 'back.out',
      }, 0.6)
      .from('.scroll-cue', {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: 'power2.out',
      }, 0.8);
  }, []);

  // Section reveals on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.section-reveal');
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      const anim = gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          markers: false,
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      });
      if (anim.scrollTrigger) {
        triggers.push(anim.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  // Product cards stagger
  useEffect(() => {
    const cards = document.querySelectorAll('.product-card-3d');
    const triggers: ScrollTrigger[] = [];

    cards.forEach((card, index) => {
      const anim = gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out',
      });
      if (anim.scrollTrigger) {
        triggers.push(anim.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  // Parallax effect for product images
  useEffect(() => {
    const handleProductParallax = () => {
      const images = document.querySelectorAll('.product-image-container img');
      images.forEach((img) => {
        const parent = img.parentElement as HTMLElement;
        const rect = parent.getBoundingClientRect();
        const yOffset = (window.innerHeight - rect.top) * 0.03;
        gsap.to(img, {
          y: yOffset,
          duration: 0.5,
          overwrite: 'auto',
        });
      });
    };

    window.addEventListener('scroll', handleProductParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleProductParallax);
  }, []);

  // Magnetic hover effect
  const handleMagneticHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 50;

    if (distance < maxDistance) {
      const pullX = (x / maxDistance) * 8;
      const pullY = (y / maxDistance) * 8;
      gsap.to(element, {
        x: pullX,
        y: pullY,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget as HTMLElement, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  // Open product modal
  const openProductModal = (product: typeof products[0]) => {
    setModalProduct(product);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setModalProduct(null), 300);
  };

  // Add to cart animation
  const handleAddToCart = async () => {
    setCartState('loading');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCartState('success');
    setTimeout(() => setCartState('idle'), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-cream-base">
      {/* Loading Screen */}
      {showLoader && (
        <div className={`loading-screen ${loaderExiting ? 'loader-exit' : ''}`}>
          <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
            <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
            <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
            <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
            <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
          </svg>
          <div className="loading-text">Oat Milk</div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-cream-base/90 backdrop-blur-md border-b border-toasted-oat/20 py-0" 
          : "bg-transparent border-b-0 py-2"
      }`}>
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-caramel to-espresso flex items-center justify-center text-cream-base font-bold text-lg">
              O
            </div>
            <span className={`font-display font-bold text-xl transition-colors duration-300 ${
              isScrolled ? "text-espresso" : "text-cream-base"
            }`}>Oat Milk</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className={`transition-colors duration-300 ${
              isScrolled ? "text-espresso/70 hover:text-espresso" : "text-cream-base/80 hover:text-cream-base"
            }`}>
              Products
            </a>
            <a href="#story" className={`transition-colors duration-300 ${
              isScrolled ? "text-espresso/70 hover:text-espresso" : "text-cream-base/80 hover:text-cream-base"
            }`}>
              Our Story
            </a>
            <a href="#sustainability" className={`transition-colors duration-300 ${
              isScrolled ? "text-espresso/70 hover:text-espresso" : "text-cream-base/80 hover:text-cream-base"
            }`}>
              Sustainability
            </a>
            <a href="#testimonials" className={`transition-colors duration-300 ${
              isScrolled ? "text-espresso/70 hover:text-espresso" : "text-cream-base/80 hover:text-cream-base"
            }`}>
              Reviews
            </a>
          </div>

          <Button 
            variant="outline" 
            className={`gap-2 transition-all duration-300 ${
              isScrolled 
                ? "border-espresso text-espresso hover:bg-espresso/10" 
                : "border-cream-base text-cream-base hover:bg-cream-base/10"
            }`}
          >
            <ShoppingCart size={18} />
            Shop
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <OatmealHero isLoading={isLoading} />

      {/* Use Cases Scrolling Marquee Banner */}
      <UseCasesMarquee />

      {/* Enhanced Liquid Pour Animation */}
      <section className="liquid-pour-container">
        <div className="container">
          <div className="liquid-pour-wrapper">
            <div className="glass-wrapper items-center">
              {/* Vertical Progress Rail */}
              {!prefersReducedMotion && (
                <div className="progress-rail-container">
                  <div
                    className="progress-rail-fill"
                    style={{ height: `${fillPercent}%` }}
                  />
                </div>
              )}

              {/* Glass Container */}
              <div className="glass-container" ref={liquidGlassRef}>
                {/* Radial Glow */}
                {!prefersReducedMotion && (
                  <div
                    className="glass-glow"
                    style={{ opacity: fillPercent >= 70 ? ((fillPercent - 70) / 30) * 0.4 : 0 }}
                  />
                )}
                {prefersReducedMotion && (
                  <div className="glass-glow" style={{ opacity: 0.3 }} />
                )}

                <div className="glass">
                  <div
                    ref={liquidFillRef}
                    className="liquid-fill"
                    style={{ height: prefersReducedMotion ? '85%' : '0%' }}
                  >
                    {/* Textured Foam/Froth Layer */}
                    <div
                      className="liquid-froth"
                      style={{ opacity: prefersReducedMotion || fillPercent > 2 ? 0.9 : 0 }}
                    />
                    
                    {/* Bubbles */}
                    {(prefersReducedMotion || fillPercent > 15) && (
                      <div className="liquid-bubbles">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`bubble bubble-${i}`} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Weight-based Drop Shadow */}
                <div
                  className="glass-shadow"
                  style={
                    prefersReducedMotion
                      ? { transform: 'scale(1.4)', opacity: 0.6 }
                      : {
                          transform: `scale(${1 + fillPercent * 0.004})`,
                          opacity: 0.15 + (fillPercent * 0.005),
                        }
                  }
                />
              </div>
            </div>

            {/* Supporting Content Block */}
            {prefersReducedMotion ? (
              <div className="text-left mt-4 max-w-sm">
                <h3 className="text-espresso font-display font-bold text-2xl mb-4">Our Craft Sourcing & Process</h3>
                <ul className="flex flex-col gap-3 text-espresso/80 text-base">
                  {milestones.map((m, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-caramel font-bold">✓</span> {m.label}
                    </li>
                  ))}
                </ul>
                <p className="text-espresso/60 text-sm mt-6 border-t border-toasted-oat/30 pt-4">
                  Watch the glass fill as you scroll through our story. Every sip of Oat Milk is a journey from field to cup.
                </p>
              </div>
            ) : (
              <div className="liquid-info flex flex-col justify-center items-start text-left max-w-sm md:w-80">
                {/* Secondary Small Percentage Indicator */}
                <div className="text-xs font-semibold tracking-wider text-caramel uppercase mb-2">
                  Oat Milk Progress • {fillPercent}%
                </div>

                {/* Milestone Container with Crossfade */}
                <div className="relative h-16 w-full flex items-center justify-start overflow-hidden mb-2" aria-live="polite">
                  {milestones.map((m, index) => {
                    const isActive = fillPercent >= m.range[0] && fillPercent <= m.range[1];
                    return (
                      <div
                        key={index}
                        className={`absolute text-2xl md:text-3xl font-display font-bold text-espresso text-left transition-all duration-500 transform origin-left ${
                          isActive
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                        }`}
                      >
                        {m.label}
                      </div>
                    );
                  })}
                </div>

                <div className="text-xs text-espresso/40 uppercase tracking-widest animate-pulse mb-6">
                  {fillPercent < 100 ? "Keep scrolling to pour" : "Fully Poured!"}
                </div>

                <p className="text-espresso/60 text-sm leading-relaxed border-t border-toasted-oat/30 pt-4">
                  Watch the glass fill as you scroll through our story. Every sip of Oat Milk is a journey from field to cup.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Packaging 3D Viewer Section */}
      <Packaging3DViewer prefersReducedMotion={prefersReducedMotion} />

      {/* Products Section with Infinite Auto-Slider */}
      <section id="products" className="section-reveal py-24 bg-cream-base overflow-hidden">
        <style>{`
          @keyframes scroll-left-cards {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .cards-slider-container {
            mask: linear-gradient(
              90deg,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
            -webkit-mask: linear-gradient(
              90deg,
              transparent 0%,
              black 10%,
              black 90%,
              transparent 100%
            );
          }
          .cards-infinite-scroll {
            animation: scroll-left-cards 38s linear infinite;
          }
          .cards-infinite-scroll:hover {
            animation-play-state: paused;
          }
          .product-card-3d {
            transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          }
          .product-card-3d:hover {
            transform: scale(1.02);
            z-index: 10;
          }
        `}</style>
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso text-center mb-4">Crafted Flavors to Pour</h2>
          <p className="text-center text-espresso/60 mb-16 max-w-2xl mx-auto">
            Each variant is crafted for a specific moment. Hover to pause, and click any card to explore full details.
          </p>
        </div>

        {/* Full-width sliding track */}
        <div className="cards-slider-container w-full py-4">
          <div className="cards-infinite-scroll flex gap-6 w-max px-6">
            {[...products, ...products].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="product-card-3d cursor-pointer w-[280px] md:w-[320px] flex-shrink-0"
                onClick={() => openProductModal(product)}
              >
                <div className="product-card-inner">
                  <div className="product-card-front">
                    <div className="product-image-container">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="product-shine" />
                    </div>
                    <div className="product-card-content">
                      <h3 className="product-card-title">{product.name}</h3>
                      <p className="product-card-description">{product.description}</p>
                      <div className="product-stats">
                        <div className="product-stat">
                          <span>Froth</span>
                          <span className="product-stat-value">{product.froth}/10</span>
                        </div>
                        <div className="product-stat">
                          <span>Protein</span>
                          <span className="product-stat-value">{product.protein}</span>
                        </div>
                        <div className="product-stat">
                          <span>Sugar</span>
                          <span className="product-stat-value">{product.sugar}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {showModal && modalProduct && (
        <div
          ref={modalRef}
          className="modal-overlay open"
          onClick={closeModal}
          style={{ opacity: 0 }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-image">
              <img src={modalProduct.image} alt={modalProduct.name} />
            </div>

            <div className="modal-body">
              <h2 className="modal-title">{modalProduct.name}</h2>
              <p className="modal-description">{modalProduct.description}</p>

              <div className="modal-specs">
                <div className="modal-spec-row">
                  <span className="modal-spec-label">Froth Rating</span>
                  <span className="modal-spec-value">{modalProduct.froth}/10</span>
                </div>
                <div className="modal-spec-row">
                  <span className="modal-spec-label">Protein</span>
                  <span className="modal-spec-value">{modalProduct.protein}</span>
                </div>
                <div className="modal-spec-row">
                  <span className="modal-spec-label">Sugar</span>
                  <span className="modal-spec-value">{modalProduct.sugar}</span>
                </div>
                <div className="modal-spec-row">
                  <span className="modal-spec-label">Calories</span>
                  <span className="modal-spec-value">{modalProduct.calories}</span>
                </div>
                <div className="modal-spec-row">
                  <span className="modal-spec-label">Fat</span>
                  <span className="modal-spec-value">{modalProduct.fat}</span>
                </div>
                <div className="modal-spec-row">
                  <span className="modal-spec-label">Carbs</span>
                  <span className="modal-spec-value">{modalProduct.carbs}</span>
                </div>
              </div>

              <div className="modal-features">
                <div className="modal-features-title">Why You'll Love It</div>
                <div className="modal-features-list">
                  {modalProduct.features.map((feature, index) => (
                    <div key={index} className="modal-feature-item">
                      <div className="modal-feature-icon">✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-cta">
                <button className="btn-primary" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Brand Story */}
      <section id="story" className="section-reveal py-24 bg-[#E6D8C4] border-t border-[#2B2520]/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-5xl font-bold text-espresso mb-6">From Field to Cup</h2>
              <p className="text-espresso/70 mb-4">
                We source premium oats from sustainable farms across the region. Every batch is cold-pressed to preserve
                the delicate grain flavor and nutritional profile.
              </p>
              <p className="text-espresso/70 mb-8">
                Our process is simple: oats, water, and care. No gums, no compromises. Just pure, creamy oat milk that
                froths like it was made for espresso.
              </p>
              <Button
                variant="outline"
                className="border-espresso text-espresso hover:bg-espresso/5"
                onMouseMove={handleMagneticHover}
                onMouseLeave={handleMagneticLeave}
              >
                Read Our Full Story
              </Button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop"
                alt="Oat field"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="section-reveal py-24 bg-cream-base">
        <div className="container">
          <h2 className="font-display text-5xl font-bold text-espresso text-center mb-16">Crafted for the Planet</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 shadow-md border-2 border-matcha-green/20 relative">
                <img
                  src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=200&h=200&fit=crop"
                  alt="Water ripple"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display font-bold text-espresso mb-3 text-xl">Water Efficient</h3>
              <p className="text-espresso/60 max-w-xs mx-auto">Uses 90% less water than dairy milk. Every carton counts.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 shadow-md border-2 border-matcha-green/20 relative">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop"
                  alt="Green plant seedling"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display font-bold text-espresso mb-3 text-xl">Carbon Neutral</h3>
              <p className="text-espresso/60 max-w-xs mx-auto">Our production is offset through verified environmental projects.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 shadow-md border-2 border-matcha-green/20 relative">
                <img
                  src="https://images.unsplash.com/photo-1595275372297-f51b4fe79033?w=200&h=200&fit=crop"
                  alt="Kraft recycled cardboard"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display font-bold text-espresso mb-3 text-xl">Fully Recyclable</h3>
              <p className="text-espresso/60 max-w-xs mx-auto">Packaging is 100% recyclable and made from recycled materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <AnimatedTestimonials
        title="Loved by Coffee Lovers"
        subtitle="Real reviews from real customers who've switched to Oat Milk. Taste the difference in every pour."
        badgeText="5-Star Rated Creaminess"
        testimonials={testimonials}
        autoRotateInterval={5000}
        trustedCompanies={["Blue Bottle", "Intelligentsia", "Stumptown", "La Colombe", "Onyx Coffee Lab"]}
        trustedCompaniesTitle="Proudly frothed at leading specialty cafes"
      />

      {/* Subscribe Section */}
      <section id="subscribe" className="section-reveal py-24 bg-espresso text-cream-base">
        <div className="container max-w-2xl">
          <h2 className="font-display text-5xl font-bold text-center mb-4">Subscribe & Save</h2>
          <p className="text-center text-cream-base/70 mb-12">
            Get your favorite oat milk delivered monthly. Cancel anytime.
          </p>

          <div className="bg-cream-base/10 rounded-lg p-8 backdrop-blur-sm">
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Select Variant</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedVariant(product.id)}
                    className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                      selectedVariant === product.id
                        ? 'bg-caramel text-espresso'
                        : 'bg-cream-base/20 text-cream-base hover:bg-cream-base/30'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg bg-cream-base/20 hover:bg-cream-base/30 transition-colors flex items-center justify-center"
                >
                  −
                </button>
                <span className="text-2xl font-bold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg bg-cream-base/20 hover:bg-cream-base/30 transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-8 p-4 bg-cream-base/10 rounded-lg">
              <p className="text-sm text-cream-base/70 mb-2">Subscription Price</p>
              <p className="text-3xl font-bold">${(8.99 * quantity).toFixed(2)}</p>
              <p className="text-xs text-cream-base/60 mt-1">/month • Cancel anytime</p>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={cartState === 'loading'}
              className={`w-full py-6 font-semibold text-lg transition-all ${
                cartState === 'success'
                  ? 'bg-matcha-green hover:bg-matcha-green/90'
                  : 'bg-caramel hover:bg-caramel/90 text-espresso'
              }`}
              onMouseMove={handleMagneticHover}
              onMouseLeave={handleMagneticLeave}
            >
              {cartState === 'idle' && (
                <>
                  <ShoppingCart size={18} className="mr-2" />
                  Subscribe Now
                </>
              )}
              {cartState === 'loading' && (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Processing...
                </>
              )}
              {cartState === 'success' && (
                <>
                  <Check size={18} className="mr-2" />
                  Added to Cart!
                </>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso text-cream-base/70 py-12 border-t border-cream-base/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-cream-base mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cream-base transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cream-base transition-colors">
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cream-base mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cream-base transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cream-base transition-colors">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cream-base mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cream-base transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cream-base transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cream-base mb-4">Oat Milk</h4>
              <p className="text-sm">Premium craft oat milk for coffee lovers everywhere.</p>
            </div>
          </div>

          <div className="border-t border-cream-base/10 pt-8 text-center text-sm">
            <p>© 2026 Oat Milk. Crafted with care for coffee lovers everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
