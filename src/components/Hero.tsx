import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-smoke.jpg"
          alt="Slow motion smoke over wood fire"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 animate-fade-in text-sm font-bold tracking-[0.2em] text-accent uppercase opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          Est. 2024 • Austin, TX
        </span>
        <h1 className="mb-6 animate-fade-in font-display text-6xl font-black tracking-tighter sm:text-8xl opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
          HEARTH <span className="text-primary">&</span> HOPS
        </h1>
        <p className="mb-10 max-w-2xl animate-fade-in text-lg font-light tracking-wide text-gray-300 sm:text-xl opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
          Where the heat of the pit meets the chill of the draft. 
          Experience premium wood-fired BBQ and curated craft brews.
        </p>
        <div className="flex animate-fade-in gap-4 opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book a Table
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white">
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown className="h-8 w-8" />
      </div>
    </section>
  );
}
