import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 text-white">
        <Link to="/" className="font-display text-2xl font-bold tracking-tighter">
          HEARTH <span className="text-primary">&</span> HOPS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium hover:text-primary">Menu</a>
          <a href="#build-board" className="text-sm font-medium hover:text-primary">Build Board</a>
          <a href="#" className="text-sm font-medium hover:text-primary">Events</a>
          <a href="#" className="text-sm font-medium hover:text-primary">About</a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book Table
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full h-screen w-full bg-black p-4 md:hidden">
          <div className="flex flex-col gap-6 text-center text-lg">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
            <a href="#build-board" onClick={() => setIsMobileMenuOpen(false)}>Build Board</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <Button className="w-full bg-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Book Table
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
