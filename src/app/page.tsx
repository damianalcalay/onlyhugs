import Statistics from "@/components/statistics/Statistics";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Features from "@/components/features/Features";
import Navbar from "@/components/navbar/Navbar";

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
