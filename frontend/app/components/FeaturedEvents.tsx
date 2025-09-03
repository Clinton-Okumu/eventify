import { Link } from "react-router";
import Card from "./Card";

export default function FeaturedEvents() {
    const events = [
        {
            title: "Music Festival 2025",
            description: "Join us for an unforgettable night of live music from top artists.",
            image: "/pic.png",
            date: "March 15, 2025",
            location: "Central Park, NY"
        },
        {
            title: "Tech Conference",
            description: "Explore the latest in technology and innovation.",
            image: "/pic1.png",
            date: "April 20, 2025",
            location: "Convention Center, SF"
        },
        {
            title: "Art Exhibition",
            description: "Discover contemporary art from emerging artists.",
            image: "/pic2.png",
            date: "May 10, 2025",
            location: "Art Gallery, LA"
        },
    ];

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-foreground">Featured Events</h2>
                <Link to="/events" className="text-blue-600 hover:text-blue-700 hover:underline">
                    See All
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <Card
                        key={index}
                        title={event.title}
                        description={event.description}
                        image={event.image}
                        date={event.date}
                        location={event.location}
                    />
                ))}
            </div>
        </section>
    );
}
