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
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}