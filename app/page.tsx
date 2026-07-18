import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatusBadge from "@/components/StatusBadge";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <Hero>
          <StatusBadge />
          <Highlights />
          <Contact />
        </Hero>
        <Footer />
      </div>
    </main>
  );
}
