"use client"

import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView, Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 5000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants explicitly typed to resolve TypeScript build errors
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials when in view and not hovered
  useEffect(() => {
    if (!isInView || autoRotateInterval <= 0 || testimonials.length <= 1 || isHovered) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [isInView, isHovered, autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`py-24 overflow-hidden bg-[#EDE3D3] border-t border-[#2B2520]/5 ${className || ""}`}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 w-full md:grid-cols-2 lg:gap-24 items-center"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-[#C89968]/15 text-[#C89968] font-display uppercase tracking-widest">
                  <Star className="mr-1.5 h-3.5 w-3.5 fill-[#C89968] text-[#C89968]" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#2B2520] tracking-tight">{title}</h2>

              <p className="max-w-[600px] text-[#2B2520]/70 text-base md:text-lg leading-relaxed">{subtitle}</p>

              <div className="flex items-center gap-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-10 bg-[#C89968]" : "w-2 bg-[#2B2520]/20"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards (WITHOUT avatars) */}
          <motion.div
            variants={itemVariants}
            className="relative h-full mr-10 min-h-[300px] md:min-h-[400px] flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0 flex items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="bg-[#FAF8F3] border border-[#2B2520]/10 shadow-xl rounded-xl p-8 w-full min-h-[260px] md:min-h-[300px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
                  <div>
                    <div className="mb-6 flex gap-1">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#C89968] text-[#C89968]" />
                        ))}
                    </div>

                    <div className="relative mb-6">
                      <Quote className="absolute -top-3 -left-3 h-8 w-8 text-[#C89968]/10 rotate-180" />
                      <p className="relative z-10 text-lg md:text-xl font-medium text-[#2B2520] italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>

                  <div>
                    <Separator className="my-4 bg-[#2B2520]/10" />

                    <div className="flex items-center gap-4">
                      {/* Avatar image removed as requested */}
                      <div>
                        <h3 className="font-display font-semibold text-[#2B2520] text-base md:text-lg">{testimonial.name}</h3>
                        <p className="text-xs md:text-sm text-[#2B2520]/60 font-medium">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-[#C89968]/5 pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-[#C89968]/5 pointer-events-none"></div>
          </motion.div>
        </motion.div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-24 text-center">
            <h3 className="text-xs font-semibold text-[#2B2520]/40 uppercase tracking-widest mb-8">{trustedCompaniesTitle}</h3>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {trustedCompanies.map((company) => (
                <div key={company} className="text-xl md:text-2xl font-display font-semibold text-[#2B2520]/30 tracking-tight">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
