import Card from "./Card";

export default function UpcomingEvents() {
    const events = [
        {
            title: "Summer Music Fest",
            description: "Experience an epic lineup of artists under the summer sky. Don't miss this outdoor extravaganza!",
            image: "/pic3.png",
            date: "June 22, 2025",
            location: "Beach Park, Miami"
        },
        {
            title: "Startup Pitch Night",
            description: "Watch innovative startups pitch their ideas to investors. Network with entrepreneurs and investors.",
            image: "/pic5.png",
            date: "July 5, 2025",
            location: "Tech Hub, Austin"
        },
        {
            title: "Food & Wine Festival",
            description: "Savor culinary delights from top chefs and sample wines from renowned vineyards.",
            image: "/pic6.png",
            date: "August 12, 2025",
            location: "Downtown Plaza, Napa"
        }
    ];

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
            <div className="space-y-6">
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
