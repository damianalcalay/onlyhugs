import Statistics from "@/components/statistics/Statistics";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import FAQ from "@/components/FAQ/FAQ";
import Services from "@/components/services/Services";
import OurWork from "@/components/our-work/OurWork";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-[#181818] ">
        <div className="relative bg-gradient-to-b from-[#000000] via-[#111111] to-[#181818] ">
          <Navbar />
          <Hero />
          <div className="absolute top-[500px] right-[200px] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[190px] opacity-50 pointer-events-none z-0">
            <img src="/assets/ellipse.svg" alt="glow" className="w-full h-full" />
          </div>
        </div>
        <Services />
        <Statistics />
        <OurWork />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
