import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Check, Plus, Minus, ShoppingBag, Star, Utensils } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/hooks/use-toast";

type Item = {
  id: string;
  name: string;
  category: "meat" | "drink";
  price: number;
  image: string;
  description: string;
};

const MENU_ITEMS: Item[] = [
  { id: "1", name: "Prime Brisket (1/2 lb)", category: "meat", price: 18, image: "/images/meat-brisket.jpg", description: "14-hour oak smoked, S&P rub." },
  { id: "2", name: "Pork Ribs (1/2 Rack)", category: "meat", price: 22, image: "/images/meat-ribs.jpg", description: "Sticky glaze or dry rub." },
  { id: "3", name: "Jalapeño Cheddar Sausage", category: "meat", price: 12, image: "/images/meat-sausage.jpg", description: "House-made daily." },
  { id: "4", name: "Turkey Breast (1/2 lb)", category: "meat", price: 16, image: "/images/meat-turkey.jpg", description: "Butter-dipped and peppery." },
  { id: "5", name: "Hill Country IPA", category: "drink", price: 8, image: "/images/beer-ipa.jpg", description: "Hazy, citrus notes, 6.8% ABV." },
  { id: "6", name: "Midnight Stout", category: "drink", price: 9, image: "/images/beer-stout.jpg", description: "Coffee & chocolate notes, 8% ABV." },
  { id: "7", name: "Austin Lager", category: "drink", price: 7, image: "/images/beer-lager.jpg", description: "Crisp, clean, 4.5% ABV." },
];

export default function BoardBuilder() {
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});

  const updateQuantity = (id: string, delta: number) => {
    setSelectedItems((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      const newMap = { ...prev, [id]: next };
      if (next === 0) delete newMap[id];
      return newMap;
    });
  };

  const total = Object.entries(selectedItems).reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find((i) => i.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const handleOrder = () => {
    toast({
      title: "Board Configured!",
      description: `Total estimate: $${total}. Show this to your server.`,
    });
  };

  return (
    <section className="bg-muted/30 py-24" id="build-board">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold">Build Your Board</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Customize your perfect platter. Select your meats and pair them with the perfect drafts.
            Get a live estimate before you order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Menu Selection */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {MENU_ITEMS.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between">
                      <CardTitle className="text-lg font-bold">{item.name}</CardTitle>
                      <span className="font-mono text-primary">${item.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="mb-4 text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {item.category === "meat" ? <Utensils className="h-3 w-3" /> : <Star className="h-3 w-3" />}
                        {item.category}
                      </div>
                      <div className="flex items-center gap-3">
                         {selectedItems[item.id] ? (
                           <>
                            <Button 
                              size="icon" 
                              variant="outline" 
                              className="h-8 w-8 rounded-full"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-4 text-center font-mono font-bold">{selectedItems[item.id]}</span>
                           </>
                         ) : null}
                        <Button 
                          size="icon" 
                          variant={selectedItems[item.id] ? "default" : "secondary"}
                          className={`h-8 w-8 rounded-full ${selectedItems[item.id] ? "bg-primary" : ""}`}
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sticky Board Summary */}
          <div className="relative">
            <div className="sticky top-24">
              <Card className="border-primary/20 bg-card shadow-2xl">
                <CardHeader className="bg-muted/50 pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    Your Tray
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[300px] p-6">
                    {Object.keys(selectedItems).length === 0 ? (
                      <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground opacity-50">
                        <Utensils className="mb-2 h-10 w-10" />
                        <p>Your tray is empty.</p>
                        <p className="text-xs">Start adding meats & drinks.</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {Object.entries(selectedItems).map(([id, qty]) => {
                          const item = MENU_ITEMS.find((i) => i.id === id);
                          if (!item) return null;
                          return (
                            <div key={id} className="flex items-center justify-between animate-fade-in">
                              <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded bg-muted text-xs font-bold">
                                  {qty}x
                                </div>
                                <div>
                                  <p className="font-medium leading-none">{item.name}</p>
                                  <p className="text-xs text-muted-foreground">{item.category}</p>
                                </div>
                              </div>
                              <span className="font-mono font-medium">${item.price * qty}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
                <Separator />
                <CardFooter className="flex flex-col gap-4 bg-muted/50 p-6">
                  <div className="flex w-full justify-between text-lg font-bold">
                    <span>Estimated Total</span>
                    <span>${total}</span>
                  </div>
                  <Button 
                    className="w-full text-lg" 
                    size="lg" 
                    disabled={total === 0}
                    onClick={handleOrder}
                  >
                    {total === 0 ? "Select Items" : "Reserve This Setup"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
