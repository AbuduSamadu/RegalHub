"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Edit, 
  Settings, 
  Award, 
  Calendar,
  Bookmark,
  MessageSquare,
  MapPin,
  Building,
  Mail,
  Globe,
  Camera,
  Save
} from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  role: string;
  bio: string;
  location: string;
  company: string;
  website: string;
  interests: string[];
  isPublic: boolean;
  profileCompletion: number;
}

const mockProfile: UserProfile = {
  name: "Sarah Chen",
  email: "sarah.chen@example.com",
  role: "Startup Founder",
  bio: "Building the future of sustainable technology. Passionate about AI, clean energy, and creating positive impact through innovation.",
  location: "San Francisco, CA",
  company: "EcoTech Solutions",
  website: "https://ecotech-solutions.com",
  interests: ["AI", "Sustainability", "B2B", "Product Management", "Fundraising"],
  isPublic: true,
  profileCompletion: 85
};

const achievements = [
  { id: "1", title: "Community Contributor", description: "Active in community discussions", icon: "🏆" },
  { id: "2", title: "Mentor", description: "Helped 5+ startups", icon: "🎯" },
  { id: "3", title: "Event Speaker", description: "Spoke at 3 events", icon: "🎤" },
  { id: "4", title: "Startup of the Month", description: "Featured startup", icon: "⭐" }
];

export default function UserProfile({ isEditable = true }: { isEditable?: boolean }) {
  const [profile, setProfile] = useState(mockProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Handle save logic here
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof UserProfile, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const addInterest = (interest: string) => {
    if (interest && !profile.interests.includes(interest)) {
      setProfile(prev => ({
        ...prev,
        interests: [...prev.interests, interest]
      }));
    }
  };

  const removeInterest = (interest: string) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/api/placeholder/80/80" />
                  <AvatarFallback className="bg-teal-primary text-white text-xl">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {isEditable && isEditing && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                  >
                    <Camera className="h-3 w-3" />
                  </Button>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-neutral-dark">{profile.name}</h1>
                <p className="text-lg text-gray-600">{profile.role}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Building className="h-4 w-4" />
                    <span>{profile.company}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {isEditable && (
              <div className="flex items-center space-x-2">
                {isEditing ? (
                  <>
                    <Button 
                      onClick={handleSave}
                      className="bg-teal-primary hover:bg-teal-primary/90"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button 
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Profile Completion */}
          {isEditable && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Profile Completion</span>
                <span className="text-sm text-gray-600">{profile.profileCompletion}%</span>
              </div>
              <Progress value={profile.profileCompletion} className="h-2" />
            </div>
          )}

          {/* Bio */}
          <div className="mb-6">
            {isEditing ? (
              <div>
                <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="mt-1"
                  rows={3}
                />
              </div>
            ) : (
              <p className="text-gray-700">{profile.bio}</p>
            )}
          </div>

          {/* Interests */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Interests & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <Badge 
                  key={interest} 
                  variant="secondary" 
                  className="bg-teal-primary/10 text-teal-primary"
                >
                  {interest}
                  {isEditing && (
                    <button 
                      onClick={() => removeInterest(interest)}
                      className="ml-2 text-xs hover:text-red-600"
                    >
                      ×
                    </button>
                  )}
                </Badge>
              ))}
              {isEditing && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    const interest = prompt("Add new interest:");
                    if (interest) addInterest(interest);
                  }}
                >
                  + Add Interest
                </Button>
              )}
            </div>
          </div>

          {/* Contact Info */}
          {isEditing && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="website" className="text-sm font-medium">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={profile.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="achievements" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="saved">Saved Items</TabsTrigger>
          {isEditable && <TabsTrigger value="settings">Settings</TabsTrigger>}
        </TabsList>
        
        <TabsContent value="achievements" className="mt-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-yellow-600" />
                <span>Achievements & Badges</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="activity" className="mt-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-teal-primary" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center py-8">
                Activity feed will be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="saved" className="mt-6">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bookmark className="h-5 w-5 text-magenta-primary" />
                <span>Saved Items</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 text-center py-8">
                Your saved items will be displayed here
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        {isEditable && (
          <TabsContent value="settings" className="mt-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <span>Privacy & Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Public Profile</h4>
                    <p className="text-sm text-gray-600">
                      Make your profile discoverable to other users
                    </p>
                  </div>
                  <Switch
                    checked={profile.isPublic}
                    onCheckedChange={(checked) => handleInputChange('isPublic', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-600">
                      Receive updates about events and opportunities
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Mentorship Requests</h4>
                    <p className="text-sm text-gray-600">
                      Allow others to send you mentorship requests
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}