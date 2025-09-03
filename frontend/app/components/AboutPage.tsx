export default function AboutPage() {
  const team = [
    {
      name: "Alice Johnson",
      role: "Founder & CEO",
      bio: "Passionate about creating memorable experiences.",
      image: "/pic.png"
    },
    {
      name: "Bob Smith",
      role: "Head of Events",
      bio: "Expert in event planning and execution.",
      image: "/pic1.png"
    },
    {
      name: "Carol Davis",
      role: "Marketing Director",
      bio: "Driving engagement and growth for Eventify.",
      image: "/pic2.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-foreground mb-6">About Eventify</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're passionate about connecting people through amazing events. Our mission is to make event discovery and attendance effortless and enjoyable for everyone.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To revolutionize the way people discover and attend events by providing a seamless, user-friendly platform that brings communities together.
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            To be the world's leading event platform, fostering connections and creating unforgettable experiences for millions of users globally.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card p-8 rounded-lg border">
        <h2 className="text-3xl font-bold text-foreground text-center mb-8">Eventify by Numbers</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Events Hosted</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Happy Attendees</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Event Organizers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Cities Covered</div>
          </div>
        </div>
      </section>
    </div>
  );
}