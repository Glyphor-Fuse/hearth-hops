import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Reservation() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "We'll confirm your table shortly via email.",
    });
  };

  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 font-display text-5xl font-bold text-white">
              Claim Your Spot <span className="text-primary">.</span>
            </h2>
            <p className="mb-8 text-lg text-gray-400">
              We fill up fast on weekends. Reserve a table for your group to guarantee a spot near the pits. 
              Large parties (8+) please call us directly.
            </p>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-bold text-white">Opening Hours</p>
                  <p>Tue-Sun: 11am - 10pm</p>
                  <p>Mon: Closed for Fire Maintenance</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-bold text-white">Group Events</p>
                  <p>Private patio booking available for 20+ guests.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-gray-400">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="date" className="border-white/10 bg-black/50 pl-10 text-white placeholder:text-gray-600 focus:border-primary" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-gray-400">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="time" className="border-white/10 bg-black/50 pl-10 text-white placeholder:text-gray-600 focus:border-primary" required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-gray-400">Party Size</label>
                <div className="relative">
                  <Users className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                  <Input type="number" min="1" max="20" placeholder="Number of guests" className="border-white/10 bg-black/50 pl-10 text-white placeholder:text-gray-600 focus:border-primary" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-gray-400">Special Requests</label>
                <Textarea placeholder="Dietary restrictions, celebrations, etc." className="min-h-[100px] border-white/10 bg-black/50 text-white placeholder:text-gray-600 focus:border-primary" />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Confirm Reservation
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
