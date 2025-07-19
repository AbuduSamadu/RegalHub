"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Circle,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  Users,
  DollarSign,
} from "lucide-react";

interface IconProps {
  className?: string;
}
interface Stage {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  status: "completed" | "current" | "upcoming";
  progress: number;
  tasks: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

const stages: Stage[] = [
  {
    id: "idea",
    title: "Idea Validation",
    description: "Research and validate your startup concept",
    icon: Lightbulb,
    status: "completed",
    progress: 100,
    tasks: [
      { id: "1", title: "Market research completed", completed: true },
      { id: "2", title: "Customer interviews conducted", completed: true },
      { id: "3", title: "Problem-solution fit validated", completed: true },
    ],
  },
  {
    id: "mvp",
    title: "MVP Development",
    description: "Build your minimum viable product",
    icon: Target,
    status: "completed",
    progress: 100,
    tasks: [
      { id: "4", title: "Core features defined", completed: true },
      { id: "5", title: "MVP developed", completed: true },
      { id: "6", title: "Initial testing completed", completed: true },
    ],
  },
  {
    id: "launch",
    title: "Product Launch",
    description: "Launch your product to early users",
    icon: Rocket,
    status: "current",
    progress: 65,
    tasks: [
      { id: "7", title: "Beta testing completed", completed: true },
      { id: "8", title: "Marketing materials created", completed: true },
      { id: "9", title: "Launch campaign executed", completed: false },
    ],
  },
  {
    id: "users",
    title: "User Acquisition",
    description: "Grow your user base and engagement",
    icon: Users,
    status: "upcoming",
    progress: 20,
    tasks: [
      { id: "10", title: "User acquisition strategy", completed: false },
      { id: "11", title: "Growth metrics tracking", completed: false },
      { id: "12", title: "Product-market fit achieved", completed: false },
    ],
  },
  {
    id: "funding",
    title: "Seek Funding",
    description: "Raise capital to scale your business",
    icon: DollarSign,
    status: "upcoming",
    progress: 0,
    tasks: [
      { id: "13", title: "Pitch deck prepared", completed: false },
      { id: "14", title: "Investor meetings scheduled", completed: false },
      { id: "15", title: "Funding round closed", completed: false },
    ],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-6 w-6 text-green-600" />;
    case "current":
      return <Clock className="h-6 w-6 text-teal-primary" />;
    default:
      return <Circle className="h-6 w-6 text-gray-400" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "current":
      return "bg-teal-primary/10 text-teal-primary";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default function ProgressTracker() {
  const currentStage = stages.find((stage) => stage.status === "current");
  const completedStages = stages.filter(
    (stage) => stage.status === "completed"
  ).length;
  const totalProgress = (completedStages / stages.length) * 100;

  return (
    <Card className="border-0 shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-teal-primary" />
            <span>Startup Growth Journey</span>
          </CardTitle>
          <Badge
            variant="secondary"
            className="bg-teal-primary/10 text-teal-primary"
          >
            {Math.round(totalProgress)}% Complete
          </Badge>
        </div>
        <div className="mt-4">
          <Progress value={totalProgress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {stages.map((stage, index) => (
          <div key={stage.id} className="relative">
            {/* Connection Line */}
            {index < stages.length - 1 && (
              <div className="absolute left-3 top-12 w-0.5 h-16 bg-gray-200"></div>
            )}

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">{getStatusIcon(stage.status)}</div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <stage.icon className="h-5 w-5 text-gray-600" />
                    <h3 className="font-semibold text-lg">{stage.title}</h3>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`text-xs ${getStatusColor(stage.status)}`}
                  >
                    {stage.status === "completed"
                      ? "Complete"
                      : stage.status === "current"
                      ? "In Progress"
                      : "Upcoming"}
                  </Badge>
                </div>

                <p className="text-gray-600 mb-3">{stage.description}</p>

                {stage.status !== "upcoming" && (
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-500">Progress</span>
                      <span className="text-sm font-medium">
                        {stage.progress}%
                      </span>
                    </div>
                    <Progress value={stage.progress} className="h-1" />
                  </div>
                )}

                {/* Task Checklist */}
                <div className="space-y-2">
                  {stage.tasks.map((task) => (
                    <div key={task.id} className="flex items-center space-x-2">
                      {task.completed ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-400" />
                      )}
                      <span
                        className={`text-sm ${
                          task.completed ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>
                  ))}
                </div>

                {stage.status === "current" && (
                  <div className="mt-4">
                    <Button
                      size="sm"
                      className="bg-teal-primary hover:bg-teal-primary/90"
                    >
                      Continue Progress
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
