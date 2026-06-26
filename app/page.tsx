import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Articles } from "@/components/Articles";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Experience />
        <Articles />
      </main>
      <Contact />
    </>
  );
}
