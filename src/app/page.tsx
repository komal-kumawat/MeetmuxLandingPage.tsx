import { Navbar } from "@/components/section/Navbar";
import { About } from "@/components/section/About";
import { Cta } from "@/components/section/Cta";
import { Hero } from "@/components/section/Hero";
import { Footer } from "@/components/section/Footer";
import { Feature } from "@/components/section/Feature";
import { Faq } from "@/components/section/Faq";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Feature />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="cta">
        <Cta />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
