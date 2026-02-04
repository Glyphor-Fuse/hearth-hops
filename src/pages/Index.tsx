import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import BoardBuilder from "@/components/BoardBuilder";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen w-full bg-background selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Philosophy />
      <BoardBuilder />
      <Reservation />
      <Footer />
    </main>
  );
}
