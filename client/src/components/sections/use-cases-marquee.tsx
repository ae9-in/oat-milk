import React from "react"

export function UseCasesMarquee() {
  const useCases = [
    { text: "Barista Lattes", color: "text-cream-base" },
    { text: "Cold Brew", color: "text-cream-base" },
    { text: "Matcha Latte", color: "text-cream-base" },
    { text: "Morning Cereal", color: "text-cream-base" },
    { text: "Baking & Pastry", color: "text-cream-base" },
    { text: "Smoothie Bowls", color: "text-cream-base" },
    { text: "Hot Tea", color: "text-cream-base" },
    { text: "Specialty Coffee", color: "text-cream-base" },
  ]

  // Duplicate items twice to ensure seamless overflow coverage
  const items = [...useCases, ...useCases, ...useCases]

  return (
    <div className="relative w-full bg-gradient-to-r from-[#2B2520] via-[#C89968] to-[#2B2520] py-2 md:py-3 border-y border-toasted-oat/15 overflow-hidden z-20">
      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee-scroll 35s linear infinite;
        }
        .marquee-mask {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }
      `}</style>

      <div className="marquee-mask w-full max-w-7xl mx-auto overflow-hidden">
        <div className="animate-marquee flex gap-12 md:gap-16 w-max items-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-12 md:gap-16">
              <span
                className={`font-display text-xs md:text-sm lg:text-base font-bold uppercase tracking-widest whitespace-nowrap ${item.color}`}
              >
                {item.text}
              </span>
              <span className="text-[#2B2520] font-bold text-xs md:text-sm opacity-60">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
