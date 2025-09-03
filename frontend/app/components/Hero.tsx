import { Link } from "react-router";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(/hero.png)` }}>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-blue px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Amazing Events</h1>
                <p className="text-lg md:text-xl mb-8">Find and attend the best events in your area.</p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to="/events">View All Events</Link>
                </Button>
            </div>
        </section>
    );
}
