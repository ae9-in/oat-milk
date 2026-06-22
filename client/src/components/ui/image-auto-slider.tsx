import React from 'react';

export const ImageAutoSlider = () => {
  // Images for the infinite scroll - using premium Unsplash URLs of nature & sustainable farms
  const images = [
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0"
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="w-full bg-[#2B2520] relative overflow-hidden py-24 flex flex-col items-center justify-center border-t border-[#FAFAF8]/10">
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 28s linear infinite;
        }

        .scroll-container {
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

        .image-item {
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), filter 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .image-item:hover {
          transform: scale(1.03);
          filter: brightness(1.05);
        }
      `}</style>
      
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C89968]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Section Header */}
      <div className="container mx-auto px-4 text-center mb-16 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C89968] block mb-3">
          Visual Gallery
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FAFAF8] mb-4 tracking-tight">
          Grown in Harmony with Nature
        </h2>
        <p className="text-[#FAFAF8]/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          A glimpse into the pure, natural environments and sustainable fields where our premium oats are nurtured.
        </p>
      </div>

      {/* Scrolling images container */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="scroll-container w-full max-w-7xl">
          <div className="infinite-scroll flex gap-6 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-xl overflow-hidden shadow-2xl border border-[#FAFAF8]/5 bg-[#2B2520]"
              >
                <img
                  src={image}
                  alt={`Gallery image ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#2B2520]/40 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export const Component = ImageAutoSlider;

