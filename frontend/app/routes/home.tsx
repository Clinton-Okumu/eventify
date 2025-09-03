import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import FeaturedEvents from "~/components/FeaturedEvents";
import UpcomingEvents from "~/components/UpcomingEvents";
import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Eventify" },
        { name: "description", content: "Eventify is a simple event management app." },
    ];
}

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex-1 bg-white">
                <Hero />
                <FeaturedEvents />
                <UpcomingEvents />
            </main>
            <Footer />
        </>
    );
}
