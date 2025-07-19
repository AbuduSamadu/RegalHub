import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  DollarSign,
  Users,
  Calendar,
  BookOpen,
  Award,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Mentorship",
    description:
      "Connect with experienced entrepreneurs and industry experts who can guide your journey.",
    badge: "1-on-1 Sessions",
    color: "text-teal-primary",
  },
  {
    icon: DollarSign,
    title: "Funding",
    description:
      "Access investors, pitch opportunities, and funding resources to fuel your startup's growth.",
    badge: "Investor Network",
    color: "text-magenta-primary",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Join a global network of entrepreneurs, creators, and innovators working together.",
    badge: "Global Network",
    color: "text-teal-primary",
  },
  {
    icon: Calendar,
    title: "Events",
    description:
      "Participate in workshops, networking sessions, and industry conferences worldwide.",
    badge: "Monthly Events",
    color: "text-magenta-primary",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description:
      "Access bootcamps, training programs, and educational resources to build skills.",
    badge: "Skill Building",
    color: "text-teal-primary",
  },
  {
    icon: Award,
    title: "Recognition",
    description:
      "Showcase your startup, compete in challenges, and gain recognition in the ecosystem.",
    badge: "Innovation Awards",
    color: "text-magenta-primary",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2
            id="features-heading"
            className="text-3xl font-bold text-neutral-dark mb-4 tracking-tight"
          >
            Why Join Our Ecosystem?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to build, grow, and scale your startup in one
            collaborative platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <feature.icon
                    className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-200`}
                    aria-hidden="true"
                  />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold tracking-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed font-medium">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
