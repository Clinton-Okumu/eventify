import { Link } from "react-router";
import { Button } from "./ui/button";

interface CardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
}

export default function Card({ title, description, image, date, location }: CardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow-sm overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-2">{description}</p>
        <div className="text-xs text-muted-foreground mb-4">
          <p>{date}</p>
          <p>{location}</p>
        </div>
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          <Link to="/events">View Details</Link>
        </Button>
      </div>
    </div>
  );
}