import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certs } from "@/components/portfolio/Certs";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lokesh Kaushik — SOC Analyst · Cloud Security & GRC" },
      {
        name: "description",
        content:
          "Portfolio of Lokesh Kaushik, a cybersecurity professional specializing in SOC operations, cloud security, threat analytics, and GRC frameworks.",
      },
      { property: "og:title", content: "Lokesh Kaushik — Cybersecurity Portfolio" },
      {
        property: "og:description",
        content:
          "SOC analyst, cloud security, threat analytics, and GRC frameworks.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Background />
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Certs />
      <Contact />
      <Footer />
    </main>
  );
}
