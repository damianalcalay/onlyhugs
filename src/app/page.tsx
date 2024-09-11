import Statistics from "@/components/ui/statistics/Statistics";
import Contact from "../components/ui/contact/Contact";
import Footer from "../components/ui/footer/Footer";
import Hero from "../components/ui/hero/Hero";
import Features from "@/components/ui/features/Features";
import Navbar from "@/components/ui/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
