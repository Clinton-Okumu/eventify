import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import AboutPage from "~/components/AboutPage";
import type { Route } from "./+types/about";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About Us | Eventify" },
    { name: "description", content: "Learn about Eventify's mission to connect people through amazing events." },
  ];
}

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}