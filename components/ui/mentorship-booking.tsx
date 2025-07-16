"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  MessageSquare, 
  Star,
  CheckCircle
} from "lucide-react";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface Session {
  id: string;
  mentorName: string;
  mentorAvatar: string;
  date: string;
  time: string;
  duration: string;
  status: "upcoming" | "completed" | "cancelled";
  type: "video" | "chat";
  topic: string;
}

const timeSlots: TimeSlot[] = [
  { id: "1", time: "9:00 AM", available: true },
  { id: "2", time: "10:00 AM", available: false },
  { id: "3", time: "11:00 AM", available: true },
  { id: "4", time: "2:00 PM", available: true },
  { id: "5", time: "3:00 PM", available: false },
  { id: "6", time: "4:00 PM", available: true }
];

const upcomingSessions: Session[] = [
  {
    id: "1",
    mentorName: "John Davis",
    mentorAvatar: "JD",
    date: "March 18, 2024",
    time: "2:00 PM",
    duration: "60 min",
    status: "upcoming",
    type: "video",
    topic: "Product Strategy"
  },
  {
    id: "2",
    mentorName: "Sarah Kim",
    mentorAvatar: "SK",
    date: "March 15, 2024",
    time: "10:00 AM",
    duration: "45 min",
    status: "completed",
    type: "video",
    topic: "Fundraising Strategy"
  }
];

export default function MentorshipBooking() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [sessionTopic, setSessionTopic] = useState<string>("");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookSession = () => {
    // Handle booking logic here
    console.log("Booking session:", { selectedDate, selectedTime, sessionTopic });
    setIsBookingOpen(false);
    // Reset form
    setSelectedTime("");
    setSessionTopic("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-teal-primary/10 text-teal-primary";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Book New Session */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-teal-primary" />
            <span>Book Mentorship Session</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Calendar */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Select Date</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
            </div>
            
            {/* Time Slots */}
            <div>
              <Label className="text-sm font-medium mb-2 block">Available Times</Label>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot.id}
                    variant={selectedTime === slot.time ? "default" : "outline"}
                    size="sm"
                    disabled={!slot.available}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`${
                      selectedTime === slot.time 
                        ? "bg-teal-primary hover:bg-teal-primary/90" 
                        : ""
                    }`}
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {slot.time}
                  </Button>
                ))}
              </div>
              
              {selectedDate && selectedTime && (
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-4 bg-teal-primary hover:bg-teal-primary/90">
                      Book Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Session Booking</DialogTitle>
                      <DialogDescription>
                        Book a mentorship session for {selectedDate?.toDateString()} at {selectedTime}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="topic">Session Topic (Optional)</Label>
                        <Textarea
                          id="topic"
                          placeholder="What would you like to discuss in this session?"
                          value={sessionTopic}
                          onChange={(e) => setSessionTopic(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          onClick={handleBookSession}
                          className="flex-1 bg-teal-primary hover:bg-teal-primary/90"
                        >
                          Confirm Booking
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setIsBookingOpen(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-magenta-primary" />
            <span>Your Sessions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" />
                      <AvatarFallback className="bg-magenta-primary text-white">
                        {session.mentorAvatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{session.mentorName}</h4>
                      <p className="text-sm text-gray-600">{session.topic}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${getStatusColor(session.status)}`}
                  >
                    {session.status}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{session.time} ({session.duration})</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {session.type === "video" ? (
                      <Video className="h-4 w-4" />
                    ) : (
                      <MessageSquare className="h-4 w-4" />
                    )}
                    <span>{session.type === "video" ? "Video Call" : "Chat"}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {session.status === "upcoming" && (
                    <>
                      <Button size="sm" className="bg-teal-primary hover:bg-teal-primary/90">
                        Join Session
                      </Button>
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Cancel
                      </Button>
                    </>
                  )}
                  {session.status === "completed" && (
                    <Button variant="outline" size="sm">
                      <Star className="h-3 w-3 mr-1" />
                      Rate Session
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}