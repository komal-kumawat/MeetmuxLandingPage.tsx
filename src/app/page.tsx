import Navbar from "@/components/section/Navbar";
import About from "@/components/section/About";
import { Cta } from "@/components/section/Cta";
import { Hero } from "@/components/section/Hero";
import { Footer } from "@/components/section/Footer";
import { Feature } from "@/components/section/Feature";
import { Faq } from "@/components/section/Faq";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
