import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Star, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: "Low & Slow",
    description: "Oak-smoked for 14 hours until the bark is black and the meat melts.",
  },
  {
    icon: Beer,
    title: "Local Drafts",
    description: "24 rotating taps featuring the best of Texas Hill Country breweries.",
  },
  {
    icon: Users,
    title: "Communal Dining",
    description: "Long tables, open air, and a shared experience for friends and strangers.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-background py-24 text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/images/pit-master.jpg"
                alt="Pit master slicing brisket"
                className="h-[600px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">The Process</p>
                <h3 className="font-display text-3xl font-bold">Respect the Fire</h3>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 hidden lg:block">
              <Card className="border-border bg-card shadow-xl">
                <CardContent className="flex items-center gap-4 p-6">
                  <Clock className="h-10 w-10 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Average Smoke Time</p>
                    <p className="text-2xl font-bold text-foreground">14 Hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary uppercase tracking-widest">
              Our Philosophy
            </Badge>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Not Just BBQ. <br />
              <span className="text-muted-foreground">It's a Ritual.</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We believe BBQ is an art form that demands patience. We start our fires before dawn, 
              tending to the pits with obsessive care. No gas, no shortcuts—just seasoned oak, 
              quality meat, and time.
            </p>

            <div className="grid gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-bold">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
