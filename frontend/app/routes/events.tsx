import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import EventsPage from "~/components/EventsPage";
import type { Route } from "./+types/events";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Events | Eventify" },
    { name: "description", content: "Browse all upcoming events on Eventify." },
  ];
}

export default function Events() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100">
        <EventsPage />
      </main>
      <Footer />
    </>
  );
}