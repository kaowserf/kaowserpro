import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroVideo from "@/components/IntroVideo";
import ScrollProgress from "@/components/ScrollProgress";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import BookCall from "@/components/BookCall";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <IntroVideo />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <BookCall />
      <Contact />
      <Footer />
    </main>
  );
}
