import { Facebook, Instagram, Twitter, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h2 className="mb-6 font-display text-3xl font-bold text-white">HEARTH & HOPS</h2>
            <p className="mb-6 max-w-sm">
              Authentic Central Texas BBQ paired with craft local brews. 
              We cook with wood, time, and patience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-white/5 p-2 transition-colors hover:bg-primary hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/5 p-2 transition-colors hover:bg-primary hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-full bg-white/5 p-2 transition-colors hover:bg-primary hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>1204 East 6th Street<br />Austin, TX 78702</span>
              </li>
              <li>
                <a href="tel:+15125550199" className="hover:text-primary">(512) 555-0199</a>
              </li>
              <li>
                <a href="mailto:hello@hearthandhops.com" className="hover:text-primary">hello@hearthandhops.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Our Story</a></li>
              <li><a href="#" className="hover:text-primary">Menu</a></li>
              <li><a href="#build-board" className="hover:text-primary">Build Your Board</a></li>
              <li><a href="#" className="hover:text-primary">Private Events</a></li>
              <li><a href="#" className="hover:text-primary">Gift Cards</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
          <p>&copy; 2024 Hearth & Hops. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
