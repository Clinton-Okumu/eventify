
import Footer from "~/components/Footer";
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
            <main className="flex-1">
                {/* Content will go here */}
            </main>
            <Footer />
        </>
    );
}
