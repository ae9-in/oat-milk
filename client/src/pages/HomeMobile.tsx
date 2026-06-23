import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Check, 
  Loader2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  Star, 
  Quote, 
  Info,
  RotateCcw
} from 'lucide-react';
import { UseCasesMarquee } from '@/components/sections/use-cases-marquee';


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
    content: 'Finally found an oat milk that actually froths for my morning cup! Oat Milk has completely transformed my South Indian filter coffee routine.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Nair',
    role: 'Head Barista',
    company: 'The Malabar Cafe',
    content: 'We switched to Oat Milk for our specialty lattes and our customers immediately fell in love with it. It froths beautifully.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Karthik Srinivasan',
    role: 'Founder',
    company: 'Eco Ooty Estates',
    content: 'Not only does it taste rich and creamy, but knowing that the oats are sourced sustainably makes me feel good. Outstanding!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ananya Shetty',
    role: 'Nutrition Consultant',
    company: 'Nourish Hyd',
    content: 'The Unsweetened and Vanilla Bean variants are absolute game-changers. No weird preservatives, just pure, clean oat goodness.',
    rating: 5,
  },
];

const useCases = [
  "Barista Lattes", "Cold Brew", "Matcha Latte", "Morning Cereal", 
  "Baking & Pastry", "Smoothie Bowls", "Hot Tea", "Specialty Coffee"
];

const PACKAGING_SPECS = {
  weight: "500 g",
  dimensions: "18 × 11 × 6 cm",
  material: "Kraft + biofilm",
  shelfLife: "9 months",
};

const PACKAGING_FEATURES = [
  "Compostable pouch with recyclable liner",
  "Resealable zip-lock strip for freshness",
  "Matte soy-ink print — no harsh chemicals",
  "Tamper-evident mill-applied seal",
];

export default function HomeMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);
  
  // Products states
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [cartState, setCartState] = useState<'idle' | 'loading' | 'success'>('idle');
  
  // Subscription states
  const [subSelectedVariant, setSubSelectedVariant] = useState('original');
  const [subQuantity, setSubQuantity] = useState(1);
  const [subCartState, setSubCartState] = useState<'idle' | 'loading' | 'success'>('idle');

  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // 3D Model Activation
  const [is3DActive, setIs3DActive] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);

  // Interactive Pour Animation States
  const [pourProgress, setPourProgress] = useState(0);
  const [isPouring, setIsPouring] = useState(false);
  const pourIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPouringRef = useRef(false);

  // Track scrolling for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dismiss loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderExiting(true);
      const exitTimer = setTimeout(() => {
        setShowLoader(false);
      }, 600);
      return () => clearTimeout(exitTimer);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Liquid Pour Animation Loop (Tap to Pour triggers this)
  const startPouring = () => {
    if (pourProgress >= 100) return;
    setIsPouring(true);
    isPouringRef.current = true;
    
    // Smooth increment
    pourIntervalRef.current = setInterval(() => {
      setPourProgress(prev => {
        if (prev >= 100) {
          stopPouring();
          return 100;
        }
        return prev + 1;
      });
    }, 30);
  };

  const stopPouring = () => {
    setIsPouring(false);
    isPouringRef.current = false;
    if (pourIntervalRef.current) {
      clearInterval(pourIntervalRef.current);
      pourIntervalRef.current = null;
    }
  };

  const resetPour = () => {
    stopPouring();
    setPourProgress(0);
  };

  // Safe cleanup for interval
  useEffect(() => {
    return () => {
      if (pourIntervalRef.current) clearInterval(pourIntervalRef.current);
    };
  }, []);

  // Determine current milestone
  const getCurrentMilestoneLabel = () => {
    if (pourProgress < 20) return "Sourced from the field";
    if (pourProgress < 45) return "Pressed and filtered";
    if (pourProgress < 70) return "Blended for creaminess";
    return "Poured for you";
  };

  // Add to cart helper
  const handleAddToCart = async () => {
    setCartState('loading');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCartState('success');
    setTimeout(() => {
      setCartState('idle');
      setSelectedProduct(null);
    }, 1500);
  };

  // Subscribe helper
  const handleSubscribe = async () => {
    setSubCartState('loading');
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubCartState('success');
    setTimeout(() => setSubCartState('idle'), 2000);
  };

  // Smooth scroll links
  const navigateTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  // 3D model setup hook
  useEffect(() => {
    if (is3DActive) {
      let active = true;
      const loadEngine = async () => {
        try {
          const { MeshoptDecoder } = await import("meshoptimizer");
          await MeshoptDecoder.ready;
          (window as any).MeshoptDecoder = MeshoptDecoder;
          (window as any).ModelViewerElement = (window as any).ModelViewerElement || {};
          (window as any).ModelViewerElement.meshoptDecoderLocation = '/meshopt_decoder.js';
          
          if (!active) return;
          await import("@google/model-viewer");
          if (active) setModelLoading(false);
        } catch (e) {
          console.error("3D model loader error", e);
        }
      };
      loadEngine();
      return () => { active = false; };
    }
  }, [is3DActive]);

  return (
    <div className="min-h-screen bg-cream-base font-body text-espresso overflow-x-hidden">
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bubble-rise {
          0% {
            bottom: 0;
            transform: translateX(0) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            bottom: 95%;
            transform: translateX(20px) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
      {/* Loading Screen */}
      {showLoader && (
        <div className={`loading-screen ${loaderExiting ? 'loader-exit' : ''}`}>
          <div className="flex flex-col items-center justify-center gap-6">
            <svg className="pl w-24 h-24" viewBox="0 0 240 240">
              <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#C89968" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
              <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#2B2520" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
              <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#9BA89C" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
              <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#E8DCC8" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
            </svg>
            <div className="loading-text text-lg tracking-widest font-display text-espresso">Oat Milk</div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || menuOpen
          ? "bg-cream-base/95 backdrop-blur-md border-b border-toasted-oat/20 py-3" 
          : "bg-transparent border-b-0 py-4"
      }`}>
        <div className="px-4 flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-caramel to-espresso flex items-center justify-center text-cream-base font-bold text-sm">
              O
            </div>
            <span className="font-display font-bold text-lg text-espresso">Oat Milk</span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => navigateTo('subscribe')}
              variant="outline" 
              size="sm"
              className="border-espresso text-espresso hover:bg-espresso/10 text-xs px-3 h-8 flex items-center gap-1.5"
            >
              <ShoppingCart size={14} />
              <span>Shop</span>
            </Button>

            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex items-center justify-center text-espresso focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] bg-cream-base z-40 flex flex-col justify-between px-6 py-8 border-t border-toasted-oat/20"
          >
            <div className="flex flex-col gap-6 pt-4">
              <button 
                onClick={() => navigateTo('products-mobile')} 
                className="text-left font-display text-2xl font-bold text-espresso py-2 border-b border-toasted-oat/10 flex items-center justify-between"
              >
                <span>Flavors</span>
                <span className="text-caramel text-sm">✦ 01</span>
              </button>
              <button 
                onClick={() => navigateTo('pour-mobile')} 
                className="text-left font-display text-2xl font-bold text-espresso py-2 border-b border-toasted-oat/10 flex items-center justify-between"
              >
                <span>Interactive Pour</span>
                <span className="text-caramel text-sm">✦ 02</span>
              </button>
              <button 
                onClick={() => navigateTo('packaging-mobile')} 
                className="text-left font-display text-2xl font-bold text-espresso py-2 border-b border-toasted-oat/10 flex items-center justify-between"
              >
                <span>3D Packaging</span>
                <span className="text-caramel text-sm">✦ 03</span>
              </button>
              <button 
                onClick={() => navigateTo('story-mobile')} 
                className="text-left font-display text-2xl font-bold text-espresso py-2 border-b border-toasted-oat/10 flex items-center justify-between"
              >
                <span>Our Story</span>
                <span className="text-caramel text-sm">✦ 04</span>
              </button>
              <button 
                onClick={() => navigateTo('testimonials-mobile')} 
                className="text-left font-display text-2xl font-bold text-espresso py-2 border-b border-toasted-oat/10 flex items-center justify-between"
              >
                <span>Reviews</span>
                <span className="text-caramel text-sm">✦ 05</span>
              </button>
            </div>

            <div className="flex flex-col gap-4 text-center">
              <p className="text-xs text-espresso/40 tracking-widest uppercase">Pure Creamy Oat Milk</p>
              <div className="flex justify-center gap-6 text-sm text-espresso/60">
                <a href="#">Instagram</a>
                <span>•</span>
                <a href="#">Sustainability Report</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-8 bg-espresso overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: "url(/farm-bg.jpg)" }}
        />
        {/* Contrast Tint */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-espresso" />

        {/* Hero Text */}
        <div className="relative z-20 container px-4 flex flex-col justify-center items-center text-center flex-1 py-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-caramel/20 text-caramel uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-caramel animate-ping" />
              100% Organic Oat Purity
            </span>
            
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-cream-base tracking-tight leading-tight max-w-sm">
              Naturally <span className="text-caramel">creamy.</span><br />
              Crafted for <span className="text-caramel">coffee.</span>
            </h1>
            
            <p className="mt-3 text-sm text-toasted-oat/80 max-w-xs leading-relaxed">
              Sourced from local fields and stone-pressed for a rich, microfoam-ready texture. Barista performance, made naturally.
            </p>

            <div className="mt-6 flex gap-3 w-full max-w-[280px]">
              <Button 
                onClick={() => navigateTo('subscribe')}
                className="flex-1 bg-caramel hover:bg-caramel/90 text-espresso font-semibold h-11 rounded-full text-sm shadow-[0_4px_16px_rgba(200,153,104,0.3)]"
              >
                Shop Now
              </Button>
              <Button 
                onClick={() => navigateTo('story-mobile')}
                variant="outline"
                className="flex-1 border-white/20 text-cream-base hover:bg-white/10 font-medium h-11 rounded-full text-sm bg-transparent"
              >
                Our Story
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hero Reveal Image - Flow placement */}
        <div className="relative z-20 w-full flex justify-center px-4 mt-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-[200px] aspect-[2/3] max-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="/hero-reveal.png" 
              alt="Oat Milk bottle on dark wooden table with scattered oats" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Use Cases Scrolling Marquee Banner */}
      <UseCasesMarquee />


      {/* Interactive Pour Section */}
      <section id="pour-mobile" className="py-16 px-4 bg-gradient-to-b from-[#FAF8F3] to-[#EBE4D5]/30 overflow-hidden">
        <div className="container max-w-sm mx-auto text-center">
          <span className="text-xs font-semibold text-caramel uppercase tracking-widest mb-1.5 block">Micro-Experience</span>
          <h2 className="font-display text-2xl font-bold text-espresso mb-2">Interactive Pouring</h2>
          <p className="text-xs text-espresso/60 mb-8 max-w-xs mx-auto leading-relaxed">
            Hold the pour button to brew oat milk. Feel the smooth milestone progress from crop to cup.
          </p>

          {/* Interactive Glass Wrapper */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-[130px] h-[220px] mb-2 flex items-end justify-center">
              {/* Radial glow when filled */}
              <div 
                className="absolute w-[200px] h-[200px] bg-radial-gradient from-caramel/30 to-transparent rounded-full filter blur-xl transition-opacity duration-500 pointer-events-none"
                style={{ opacity: pourProgress / 100 }}
              />

              {/* Glass frame */}
              <div className="relative w-full h-full border-4 border-espresso rounded-b-[24px] rounded-t-[8px] overflow-hidden bg-[#FAF8F3]/25 shadow-xl">
                {/* Liquid Fill */}
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-[#C89968] to-[#B88550] transition-all duration-75 rounded-b-[18px]"
                  style={{ height: `${pourProgress}%` }}
                >
                  {/* Foam/Froth */}
                  {pourProgress > 2 && (
                    <div className="absolute top-[-8px] left-0 right-0 h-4 bg-[#FAF8F3] opacity-90 rounded-t-full filter blur-[1px]" />
                  )}
                  
                  {/* Bubbles */}
                  {pourProgress > 15 && (
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 absolute left-[20%] bottom-[10%] animate-[bubble-rise_2s_infinite]" />
                      <div className="w-1 h-1 rounded-full bg-white/40 absolute left-[50%] bottom-[20%] animate-[bubble-rise_2.5s_infinite_0.4s]" />
                      <div className="w-2 h-2 rounded-full bg-white/40 absolute left-[75%] bottom-[5%] animate-[bubble-rise_1.8s_infinite_0.8s]" />
                    </div>
                  )}
                </div>
              </div>

              {/* Dynamic Pour Stream Indicator (styled absolute above glass) */}
              {isPouring && pourProgress < 100 && (
                <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-[#C89968] to-[#B88550] h-[60px] animate-[pulse_0.4s_infinite]" />
              )}
            </div>

            {/* Pour Stats Block */}
            <div className="w-full flex flex-col items-center">
              <div className="text-sm font-semibold text-caramel mb-1 flex items-center gap-1.5">
                <span>Oat Progress:</span>
                <span className="text-espresso font-bold tabular-nums">{pourProgress}%</span>
              </div>
              
              <div className="h-6 overflow-hidden relative w-full flex justify-center items-center">
                <span className="font-display font-bold text-espresso text-base transition-all duration-300">
                  {getCurrentMilestoneLabel()}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3 mt-6 w-full">
                <button
                  onTouchStart={startPouring}
                  onTouchEnd={stopPouring}
                  onMouseDown={startPouring}
                  onMouseUp={stopPouring}
                  onMouseLeave={stopPouring}
                  className={`flex-1 font-semibold text-sm py-3.5 px-6 rounded-full border-none transition-all duration-200 select-none cursor-pointer active:scale-95 ${
                    pourProgress >= 100 
                      ? 'bg-matcha-green text-cream-base shadow-[0_4px_12px_rgba(155,168,156,0.3)]' 
                      : isPouring
                        ? 'bg-caramel text-espresso scale-[0.98] shadow-inner'
                        : 'bg-espresso text-cream-base shadow-[0_6px_16px_rgba(43,37,32,0.25)]'
                  }`}
                >
                  {pourProgress >= 100 
                    ? "✓ Successfully Poured!" 
                    : isPouring 
                      ? "Pouring Oat Milk..." 
                      : "Tap & Hold to Pour"
                  }
                </button>

                {pourProgress > 0 && (
                  <button 
                    onClick={resetPour}
                    className="w-12 h-12 rounded-full bg-toasted-oat/30 hover:bg-toasted-oat/50 flex items-center justify-center text-espresso transition-colors"
                    aria-label="Reset pour"
                  >
                    <RotateCcw size={18} />
                  </button>
                )}
              </div>

              {pourProgress > 0 && pourProgress < 100 && !isPouring && (
                <p className="text-[10px] text-espresso/40 mt-3 animate-pulse">Resume holding to finish pouring</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Packaging Viewer */}
      <section id="packaging-mobile" className="py-16 bg-cream-base border-t border-toasted-oat/15">
        <div className="container px-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-caramel" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-caramel">Spec Showcase</span>
          </div>

          <h2 className="font-display text-2xl font-bold text-espresso mb-3">
            Designed to protect <br />
            <em className="font-display not-italic text-matcha-green">the coffee ritual</em>
          </h2>

          <p className="text-xs text-espresso/70 mb-6 leading-relaxed">
            Engineered pouch structure that seals in freshness. Drag the 3D render to see the sustainable craft pouch details.
          </p>

          {/* Mobile Spec Grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            <div className="bg-[#E8DCC8]/25 border border-toasted-oat/20 rounded-xl p-3">
              <span className="block text-[9px] uppercase tracking-wider text-espresso/50 mb-0.5">Weight</span>
              <span className="font-display text-sm font-bold text-espresso">{PACKAGING_SPECS.weight}</span>
            </div>
            <div className="bg-[#E8DCC8]/25 border border-toasted-oat/20 rounded-xl p-3">
              <span className="block text-[9px] uppercase tracking-wider text-espresso/50 mb-0.5">Material</span>
              <span className="font-display text-sm font-bold text-espresso">{PACKAGING_SPECS.material}</span>
            </div>
            <div className="bg-[#E8DCC8]/25 border border-toasted-oat/20 rounded-xl p-3">
              <span className="block text-[9px] uppercase tracking-wider text-espresso/50 mb-0.5">Dimensions</span>
              <span className="font-display text-sm font-bold text-espresso text-xs">{PACKAGING_SPECS.dimensions}</span>
            </div>
            <div className="bg-[#E8DCC8]/25 border border-toasted-oat/20 rounded-xl p-3">
              <span className="block text-[9px] uppercase tracking-wider text-espresso/50 mb-0.5">Shelf Life</span>
              <span className="font-display text-sm font-bold text-espresso">{PACKAGING_SPECS.shelfLife}</span>
            </div>
          </div>

          {/* 3D Model Display Card (with touch protection) */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-toasted-oat/30 bg-gradient-to-br from-[#E8DCC8]/30 via-white to-[#9BA89C]/5 flex items-center justify-center p-3 mb-6">
            {!is3DActive ? (
              // Static Poster with Tap Overlay
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-transparent">
                <img 
                  src="/assets/images/packaging-poster.png" 
                  alt="Packaging Poster fallback"
                  className="absolute inset-0 w-full h-full object-contain opacity-80" 
                  onError={(e) => {
                    // fallback if poster doesn't exist yet
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="relative z-10 bg-espresso/90 backdrop-blur-md text-cream-base rounded-2xl p-4 shadow-xl border border-white/10 flex flex-col items-center max-w-[220px]">
                  <span className="text-xl mb-1.5">📦</span>
                  <h4 className="font-display font-semibold text-xs mb-1">Interactive 3D Preview</h4>
                  <p className="text-[10px] text-cream-base/70 mb-3.5">Rotate and zoom the pouch model in real time.</p>
                  <Button 
                    onClick={() => setIs3DActive(true)}
                    size="sm"
                    className="w-full bg-caramel text-espresso font-semibold text-[11px] h-8 rounded-lg"
                  >
                    Activate 3D View
                  </Button>
                </div>
              </div>
            ) : (
              // Interactive Model Viewer
              <div className="w-full h-full relative">
                {modelLoading && (
                  <div className="absolute inset-0 bg-[#FAF8F3]/90 flex flex-col items-center justify-center gap-3 z-10">
                    <Loader2 size={24} className="animate-spin text-caramel" />
                    <span className="text-[10px] text-espresso/50 font-medium">Downloading 3D files...</span>
                  </div>
                )}
                {/* @ts-expect-error */}
                <model-viewer
                  src="/assets/3d/oatmilk-packaging-tripo.glb"
                  alt="3D packaging pouch"
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
                  style={{ width: "100%", height: "100%", background: "transparent" }}
                >
                  {/* @ts-expect-error */}
                </model-viewer>
                
                {/* Close/Reset interactive trigger */}
                <button 
                  onClick={() => setIs3DActive(false)}
                  className="absolute top-2 right-2 bg-espresso/80 text-cream-base w-7 h-7 rounded-full flex items-center justify-center text-xs border-none"
                  aria-label="Deactivate 3D"
                >
                  <X size={14} />
                </button>

                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-[9px] px-2.5 py-1 rounded-full pointer-events-none">
                  ↻ Swipe to Rotate • Pinch to Zoom
                </div>
              </div>
            )}
          </div>

          {/* Bullet specifications list */}
          <ul className="space-y-2 mb-6" aria-label="Feature list">
            {PACKAGING_FEATURES.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-espresso/80">
                <span className="w-2 h-2 rounded-full bg-matcha-green mt-1 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a 
            href="/oatmilk-packaging-spec.pdf"
            className="inline-flex items-center justify-center bg-espresso text-cream-base text-xs font-semibold px-5 py-3 rounded-full w-full text-center border-none shadow-md"
            download
          >
            Download spec sheet (PDF) &nbsp;→
          </a>
        </div>
      </section>

      {/* Touch Carousel Products Section */}
      <section id="products-mobile" className="py-16 bg-[#EBE4D5]/20 overflow-hidden">
        <div className="container px-4 mb-8 text-center">
          <span className="text-xs font-semibold text-caramel uppercase tracking-widest block mb-1">Our Lineup</span>
          <h2 className="font-display text-2xl font-bold text-espresso">Crafted Flavors</h2>
          <p className="text-xs text-espresso/60 mt-1 max-w-xs mx-auto">
            Swipe left/right to browse the flavors. Tap any card for nutrition specs and details.
          </p>
        </div>

        {/* Swipe Track */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none px-6 py-2">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="snap-center w-[250px] bg-cream-base rounded-2xl overflow-hidden shadow-md flex-shrink-0 border border-toasted-oat/20 flex flex-col justify-between"
            >
              <div className="aspect-square relative overflow-hidden bg-toasted-oat">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 right-2.5 bg-espresso/80 text-cream-base text-[9px] px-2 py-0.5 rounded-md font-semibold flex items-center gap-1">
                  <span>Froth</span>
                  <span className="text-caramel font-bold">{product.froth}/10</span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-espresso mb-1">{product.name}</h3>
                  <p className="text-xs text-espresso/60 line-clamp-2 leading-relaxed">{product.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-toasted-oat/20 flex justify-between items-center">
                  <span className="text-[11px] font-semibold text-caramel uppercase tracking-wider">Nutrition details</span>
                  <span className="text-xs bg-espresso/5 text-espresso/60 px-2 py-0.5 rounded font-mono font-medium">{product.calories} cal</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Swipe Indicator Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          <span className="w-8 h-1 bg-caramel rounded-full" />
          <span className="w-1.5 h-1 bg-toasted-oat rounded-full" />
          <span className="w-1.5 h-1 bg-toasted-oat rounded-full" />
        </div>
      </section>

      {/* Product Detail Sheet / Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center"
          >
            {/* Sheet Content */}
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-cream-base w-full max-h-[85vh] rounded-t-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Drag Handle Bar */}
              <div className="w-full flex justify-center py-3 border-b border-toasted-oat/15 flex-shrink-0">
                <div className="w-12 h-1 bg-toasted-oat rounded-full" />
              </div>

              <div className="overflow-y-auto flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-espresso">{selectedProduct.name}</h3>
                    <p className="text-xs text-espresso/60 mt-1">{selectedProduct.description}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="w-8 h-8 rounded-full bg-toasted-oat/20 flex items-center justify-center text-espresso"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-toasted-oat mb-5">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>

                {/* Specs */}
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-espresso mb-2">Nutritional Values</h4>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="bg-toasted-oat/10 rounded-lg p-2.5 text-center">
                    <span className="block text-[9px] text-espresso/50">Calories</span>
                    <span className="font-semibold text-xs font-mono">{selectedProduct.calories}</span>
                  </div>
                  <div className="bg-toasted-oat/10 rounded-lg p-2.5 text-center">
                    <span className="block text-[9px] text-espresso/50">Protein</span>
                    <span className="font-semibold text-xs font-mono">{selectedProduct.protein}</span>
                  </div>
                  <div className="bg-toasted-oat/10 rounded-lg p-2.5 text-center">
                    <span className="block text-[9px] text-espresso/50">Sugar</span>
                    <span className="font-semibold text-xs font-mono">{selectedProduct.sugar}</span>
                  </div>
                  <div className="bg-toasted-oat/10 rounded-lg p-2.5 text-center">
                    <span className="block text-[9px] text-espresso/50">Fat</span>
                    <span className="font-semibold text-xs font-mono">{selectedProduct.fat}</span>
                  </div>
                  <div className="bg-toasted-oat/10 rounded-lg p-2.5 text-center">
                    <span className="block text-[9px] text-espresso/50">Carbs</span>
                    <span className="font-semibold text-xs font-mono">{selectedProduct.carbs}</span>
                  </div>
                  <div className="bg-toasted-oat/10 rounded-lg p-2.5 text-center">
                    <span className="block text-[9px] text-espresso/50">Froth Rating</span>
                    <span className="font-semibold text-xs text-caramel">{selectedProduct.froth}/10</span>
                  </div>
                </div>

                {/* Features */}
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-espresso mb-2.5">Why You'll Love It</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs text-espresso/80">
                      <span className="text-caramel font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-t border-toasted-oat/20 bg-cream-base flex gap-2 flex-shrink-0">
                <Button
                  onClick={handleAddToCart}
                  disabled={cartState === 'loading'}
                  className={`flex-1 font-semibold text-sm py-4 h-11 rounded-xl border-none transition-all ${
                    cartState === 'success'
                      ? 'bg-matcha-green text-cream-base'
                      : 'bg-caramel text-espresso'
                  }`}
                >
                  {cartState === 'idle' && (
                    <span className="flex items-center justify-center gap-1.5">
                      <ShoppingCart size={16} />
                      Add to Cart ($5.99)
                    </span>
                  )}
                  {cartState === 'loading' && <Loader2 size={16} className="animate-spin" />}
                  {cartState === 'success' && <Check size={16} />}
                </Button>
                <Button 
                  onClick={() => setSelectedProduct(null)}
                  variant="outline"
                  className="border-toasted-oat text-espresso font-medium h-11 rounded-xl text-xs bg-transparent"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand Story */}
      <section id="story-mobile" className="py-16 px-4 bg-[#E6D8C4] border-t border-espresso/5">
        <div className="container max-w-sm mx-auto">
          <h2 className="font-display text-2xl font-bold text-espresso mb-4 leading-tight">From Field to Cup</h2>
          
          <p className="text-xs text-espresso/70 mb-3 leading-relaxed">
            We source premium oats from sustainable farms across the region. Every batch is cold-pressed to preserve the delicate grain flavor and nutritional profile.
          </p>
          
          <p className="text-xs text-espresso/70 mb-6 leading-relaxed">
            Our process is simple: oats, water, and care. No gums, no compromises. Just pure, creamy oat milk that froths like it was made for espresso.
          </p>

          <div className="aspect-video rounded-xl overflow-hidden shadow-md mb-6">
            <img 
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop" 
              alt="Oat field background" 
              className="w-full h-full object-cover"
            />
          </div>

          <Button 
            variant="outline" 
            className="w-full border-espresso text-espresso hover:bg-espresso/5 text-xs font-semibold rounded-full py-2.5 h-11 bg-transparent"
          >
            Read Our Full Story
          </Button>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 px-4 bg-cream-base">
        <div className="container max-w-sm mx-auto">
          <h2 className="font-display text-2xl font-bold text-espresso text-center mb-10 leading-tight">Crafted for the Planet</h2>

          <div className="space-y-8">
            <div className="text-center bg-[#FAF8F3]/50 p-5 rounded-2xl border border-toasted-oat/15">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border border-matcha-green/20">
                <img 
                  src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=200&h=200&fit=crop" 
                  alt="Water ripple" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-espresso text-base mb-1.5">Water Efficient</h3>
              <p className="text-xs text-espresso/60 leading-relaxed max-w-xs mx-auto">
                Uses 90% less water than dairy milk. Every single carton counts.
              </p>
            </div>

            <div className="text-center bg-[#FAF8F3]/50 p-5 rounded-2xl border border-toasted-oat/15">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border border-matcha-green/20">
                <img 
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=200&fit=crop" 
                  alt="Plant sprout" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-espresso text-base mb-1.5">Carbon Neutral</h3>
              <p className="text-xs text-espresso/60 leading-relaxed max-w-xs mx-auto">
                Production carbon footprint offset through verified environmental projects.
              </p>
            </div>

            <div className="text-center bg-[#FAF8F3]/50 p-5 rounded-2xl border border-toasted-oat/15">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border border-matcha-green/20">
                <img 
                  src="https://images.unsplash.com/photo-1595275372297-f51b4fe79033?w=200&h=200&fit=crop" 
                  alt="Recycled cardboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-bold text-espresso text-base mb-1.5">Fully Recyclable</h3>
              <p className="text-xs text-espresso/60 leading-relaxed max-w-xs mx-auto">
                Packaging is 100% recyclable, made from renewable plant-based materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials-mobile" className="py-16 px-4 bg-[#EDE3D3] border-t border-espresso/5">
        <div className="container max-w-sm mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-caramel/15 text-caramel uppercase tracking-widest mb-2 font-display">
              <Star className="h-3 w-3 fill-caramel text-caramel" />
              5-Star Rated
            </span>
            <h2 className="font-display text-2xl font-bold text-espresso">Reviews</h2>
            <p className="text-xs text-espresso/60 mt-1 max-w-[280px] mx-auto">
              What coffee lovers say about the milk texture.
            </p>
          </div>

          {/* Testimonial Active Card - fixed height to prevent resizing layout shifts */}
          <div className="relative min-h-[220px] bg-cream-base rounded-2xl border border-espresso/10 p-5 shadow-lg flex flex-col justify-between">
            <Quote className="absolute top-4 right-4 h-6 w-6 text-caramel/10" />
            
            <div>
              <div className="flex gap-0.5 mb-3.5">
                {Array(testimonials[activeTestimonial].rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-caramel text-caramel border-none" />
                ))}
              </div>
              <p className="text-xs text-espresso font-medium italic leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </p>
            </div>

            <div className="pt-3 border-t border-toasted-oat/20 mt-4">
              <h4 className="font-display font-bold text-xs text-espresso">{testimonials[activeTestimonial].name}</h4>
              <p className="text-[10px] text-espresso/50">
                {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
              </p>
            </div>
          </div>

          {/* Controls dots + arrows */}
          <div className="flex items-center justify-between mt-4 px-2">
            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx ? "w-6 bg-caramel" : "w-1.5 bg-espresso/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-8 h-8 rounded-full bg-cream-base flex items-center justify-center text-espresso shadow border-none"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="w-8 h-8 rounded-full bg-cream-base flex items-center justify-center text-espresso shadow border-none"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="py-16 px-4 bg-espresso text-cream-base">
        <div className="container max-w-sm mx-auto">
          <h2 className="font-display text-2xl font-bold text-center mb-2 leading-tight">Subscribe & Save</h2>
          <p className="text-xs text-center text-cream-base/70 mb-8 max-w-xs mx-auto">
            Get your fresh plant milk delivered monthly. Cancel or modify anytime.
          </p>

          <div className="bg-cream-base/5 rounded-2xl p-5 border border-white/10 backdrop-blur-sm">
            {/* Choose Variant */}
            <div className="mb-4">
              <label className="block text-[10px] uppercase tracking-wider font-semibold mb-2.5 text-cream-base/60">Choose Variant</label>
              {/* 2 column grid for clean mobile alignment */}
              <div className="grid grid-cols-2 gap-1.5">
                {products.slice(0, 6).map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSubSelectedVariant(product.id)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-semibold border-none text-left truncate transition-colors ${
                      subSelectedVariant === product.id
                        ? 'bg-caramel text-espresso font-bold'
                        : 'bg-cream-base/10 text-cream-base hover:bg-cream-base/20'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-[10px] uppercase tracking-wider font-semibold mb-2.5 text-cream-base/60">Select Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSubQuantity(Math.max(1, subQuantity - 1))}
                  className="w-9 h-9 rounded-lg bg-cream-base/10 text-cream-base hover:bg-cream-base/20 transition-colors flex items-center justify-center border-none text-lg"
                >
                  −
                </button>
                <span className="text-xl font-bold w-6 text-center">{subQuantity}</span>
                <button
                  onClick={() => setSubQuantity(subQuantity + 1)}
                  className="w-9 h-9 rounded-lg bg-cream-base/10 text-cream-base hover:bg-cream-base/20 transition-colors flex items-center justify-center border-none text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Sub total */}
            <div className="mb-6 p-3 bg-cream-base/10 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-[10px] text-cream-base/50">Subscription Price</p>
                <p className="text-2xl font-bold">${(8.99 * subQuantity).toFixed(2)}<span className="text-xs font-normal text-cream-base/60">/mo</span></p>
              </div>
              <span className="text-[9px] bg-matcha-green/30 text-matcha-green px-2 py-0.5 rounded font-semibold uppercase tracking-wider">Save 15%</span>
            </div>

            {/* Submit */}
            <Button
              onClick={handleSubscribe}
              disabled={subCartState === 'loading'}
              className={`w-full py-4 font-semibold text-sm h-11 rounded-xl transition-all border-none ${
                subCartState === 'success'
                  ? 'bg-matcha-green hover:bg-matcha-green/90 text-cream-base'
                  : 'bg-caramel hover:bg-caramel/90 text-espresso'
              }`}
            >
              {subCartState === 'idle' && (
                <span className="flex items-center justify-center gap-1.5">
                  <ShoppingCart size={16} />
                  Subscribe Now
                </span>
              )}
              {subCartState === 'loading' && <Loader2 size={16} className="animate-spin mr-1" />}
              {subCartState === 'success' && <Check size={16} />}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso text-cream-base/60 py-10 border-t border-white/5">
        <div className="container px-4 text-center max-w-sm mx-auto">
          {/* Quick link sections stack */}
          <div className="grid grid-cols-2 gap-6 mb-8 text-left">
            <div>
              <h4 className="font-semibold text-xs text-cream-base mb-3 uppercase tracking-wider">Shop</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-cream-base transition-colors">All Flavors</a></li>
                <li><a href="#" className="hover:text-cream-base transition-colors">Subscriptions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xs text-cream-base mb-3 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-cream-base transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-cream-base transition-colors">Sustainability</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 text-[10px] text-cream-base/40">
            <p>© 2026 Oat Milk. Crafted with care for coffee lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
