import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Startup Pitch Night",
    description: "Present your startup to a panel of investors and get valuable feedback.",
    date: "March 15, 2024",
    time: "7:00 PM PST",
    location: "San Francisco, CA",
    attendees: 150,
    type: "Networking",
    image: "🎤"
  },
  {
    id: 2,
    title: "AI in Business Workshop",
    description: "Learn how to integrate AI tools into your business operations.",
    date: "March 20, 2024",
    time: "2:00 PM EST",
    location: "Virtual",
    attendees: 300,
    type: "Workshop",
    image: "🤖"
  },
  {
    id: 3,
    title: "Founder's Breakfast",
    description: "Casual networking breakfast for startup founders and entrepreneurs.",
    date: "March 25, 2024",
    time: "8:00 AM PST",
    location: "Austin, TX",
    attendees: 50,
    type: "Networking",
    image: "🥐"
  },
  {
    id: 4,
    title: "Funding Bootcamp",
    description: "Learn the ins and outs of raising capital for your startup.",
    date: "April 1, 2024",
    time: "10:00 AM EST",
    location: "New York, NY",
    attendees: 200,
    type: "Bootcamp",
    image: "💰"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for exciting events, workshops, and networking opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">{event.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <Badge 
                        variant="secondary" 
                        className="text-xs bg-magenta-primary/10 text-magenta-primary"
                      >
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600">
                  {event.description}
                </CardDescription>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    className="bg-teal-primary hover:bg-teal-primary/90 flex-1"
                  >
                    Register Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-magenta-primary text-magenta-primary hover:bg-magenta-primary hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}