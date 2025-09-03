import { useState } from "react";
import Card from "./Card";

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allEvents = [
    {
      title: "Music Festival 2025",
      description: "Join us for an unforgettable night of live music from top artists.",
      image: "/pic.png",
      date: "March 15, 2025",
      location: "Central Park, NY",
      category: "Music"
    },
    {
      title: "Tech Conference",
      description: "Explore the latest in technology and innovation.",
      image: "/pic1.png",
      date: "April 20, 2025",
      location: "Convention Center, SF",
      category: "Tech"
    },
    {
      title: "Art Exhibition",
      description: "Discover contemporary art from emerging artists.",
      image: "/pic2.png",
      date: "May 10, 2025",
      location: "Art Gallery, LA",
      category: "Art"
    },
    {
      title: "Comedy Night",
      description: "Laugh out loud with stand-up comedy from top comedians.",
      image: "/pic3.png",
      date: "June 5, 2025",
      location: "Comedy Club, Chicago",
      category: "Comedy"
    },
    {
      title: "Food Truck Festival",
      description: "Taste delicious cuisines from various food trucks around the city.",
      image: "/pic4.png",
      date: "July 12, 2025",
      location: "City Square, Denver",
      category: "Food"
    },
    {
      title: "Book Launch Event",
      description: "Celebrate the release of bestselling books with author talks.",
      image: "/pic5.png",
      date: "August 18, 2025",
      location: "Bookstore, Boston",
      category: "Literature"
    },
    {
      title: "Summer Music Fest",
      description: "Experience an epic lineup of artists under the summer sky.",
      image: "/pic6.png",
      date: "June 22, 2025",
      location: "Beach Park, Miami",
      category: "Music"
    },
    {
      title: "Startup Pitch Night",
      description: "Watch innovative startups pitch their ideas to investors.",
      image: "/hero.png",
      date: "July 5, 2025",
      location: "Tech Hub, Austin",
      category: "Business"
    },
    {
      title: "Food & Wine Festival",
      description: "Savor culinary delights from top chefs and sample wines.",
      image: "/logo.png",
      date: "August 12, 2025",
      location: "Downtown Plaza, Napa",
      category: "Food"
    }
  ];

  const categories = ["All", "Music", "Tech", "Art", "Comedy", "Food", "Literature", "Business"];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">All Events</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
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

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No events found matching your criteria.</p>
        </div>
      )}
    </section>
  );
}