import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    avatar: "SC",
    content:
      "The mentorship I received through this platform was invaluable. My mentor helped me navigate the challenges of scaling my startup and securing Series A funding.",
    company: "TechFlow",
    badge: "Funded",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO, GreenStart",
    avatar: "MR",
    content:
      "Being part of this ecosystem opened doors I never thought possible. The connections and resources here are truly world-class.",
    company: "GreenStart",
    badge: "Accelerated",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Investor, Venture Capital",
    avatar: "ET",
    content:
      "I've discovered some of the most promising startups through this platform. The quality of entrepreneurs here is exceptional.",
    company: "Venture Capital",
    badge: "Investor",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Senior Mentor",
    avatar: "DK",
    content:
      "Mentoring the next generation of entrepreneurs has been incredibly rewarding. The platform makes it easy to connect and make a real impact.",
    company: "Tech Advisor",
    badge: "Mentor",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from founders, mentors, and investors who are part of our
            thriving ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage alt={testimonial.name} />
                    <AvatarFallback className="bg-teal-primary text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-magenta-primary/10 text-magenta-primary"
                      >
                        {testimonial.badge}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  `{testimonial.content}`
                </p>

                <div className="text-xs text-gray-500 font-medium">
                  {testimonial.company}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
