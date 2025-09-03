import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import ContactPage from "~/components/ContactPage";
import type { Route } from "./+types/contact";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Contact Us | Eventify" },
    { name: "description", content: "Get in touch with Eventify. We're here to help with your event needs." },
  ];
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100">
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}