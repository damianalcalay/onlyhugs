import Statistics from "@/components/statistics/Statistics";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Features from "@/components/features/Features";
import Navbar from "@/components/navbar/Navbar";
import ChooseExcelence from "@/components/our-work/OurWork";
import FAQ from "@/components/FAQ/FAQ";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-gradient-to-b from-[#000000] via-[#111111] to-[#181818]">
        <Navbar />
        <Hero />
        <Services />
        <Statistics />
        <ChooseExcelence />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
