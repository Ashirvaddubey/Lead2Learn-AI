"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Mail, MessageCircle, BarChart3 } from "lucide-react"

export function PrototypeDemo() {
  const [selectedDemo, setSelectedDemo] = useState("landing")

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Interactive Prototype Demos</h2>

      <Tabs value={selectedDemo} onValueChange={setSelectedDemo} className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="landing">AI Landing Page</TabsTrigger>
          <TabsTrigger value="chatbot">Smart Chatbot</TabsTrigger>
          <TabsTrigger value="email">Email Sequence</TabsTrigger>
          <TabsTrigger value="dashboard">Analytics Dashboard</TabsTrigger>
        </TabsList>

        <TabsContent value="landing" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                AI-Powered Dynamic Landing Page
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-lg mb-4">
                <h3 className="text-2xl font-bold mb-4">🎯 Personalized for: "Data Science Career Switcher"</h3>
                <p className="text-lg mb-6">
                  Join 15,000+ professionals who switched to Data Science careers with our proven methodology
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">✨ What You'll Learn:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Python & SQL for Data Analysis</li>
                      <li>• Machine Learning Fundamentals</li>
                      <li>• Portfolio Projects That Get Hired</li>
                      <li>• Interview Preparation & Salary Negotiation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🏆 Success Stories:</h4>
                    <div className="text-sm space-y-1">
                      <p>"Switched from Marketing → Data Scientist at Google" - Sarah K.</p>
                      <p>"₹8L → ₹25L salary jump in 8 months" - Rahul M.</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold mt-6 px-8 py-3">
                  🚀 Reserve My FREE Seat (2 spots left)
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                <strong>AI Personalization:</strong> Content dynamically adjusted based on visitor's source, previous
                interactions, and behavioral signals (time on site, scroll depth, etc.)
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chatbot" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                AI Chatbot Conversation Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="bg-blue-500 text-white p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">
                      Hi! I'm Alex, your AI career advisor. I noticed you're interested in our Data Science masterclass.
                      What's your current background?
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg rounded-br-none border">
                    <p className="text-sm">I'm a marketing manager looking to switch careers</p>
                  </div>
                  <div className="bg-blue-500 text-white p-3 rounded-lg rounded-bl-none">
                    <p className="text-sm">
                      Perfect! Many successful data scientists come from marketing. Based on your background, I'd
                      recommend focusing on:
                    </p>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Customer analytics & segmentation</li>
                      <li>• A/B testing & experimentation</li>
                      <li>• Marketing attribution modeling</li>
                    </ul>
                    <p className="text-sm mt-2">
                      Would you like me to save a seat in tomorrow's masterclass? We'll cover exactly these topics!
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">
                      Yes, save my seat!
                    </Button>
                    <Button size="sm" variant="outline">
                      Tell me more first
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <strong>AI Features:</strong> Natural language processing, intent recognition, personalized
                recommendations based on background, smart follow-up questions
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                AI-Generated Email Sequence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">Email 1: Immediate Confirmation</h4>
                    <Badge>Sent immediately</Badge>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold">Subject: 🎉 You're in! Your Data Science journey starts tomorrow</p>
                    <div className="mt-2 text-sm">
                      <p>Hi [Name],</p>
                      <p className="mt-2">
                        Congratulations! You've secured your spot in tomorrow's exclusive Data Science Career Switch
                        Masterclass.
                      </p>
                      <p className="mt-2">
                        <strong>📅 Tomorrow at 7 PM IST</strong>
                        <br />📍 Join Link: [Personalized Link]
                      </p>
                      <p className="mt-2">
                        I've prepared something special for marketing professionals like you - a bonus case study on
                        "How Netflix Uses Data Science for Content Recommendations"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">Email 2: Pre-Class Engagement</h4>
                    <Badge>2 hours before class</Badge>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold">Subject: ⏰ Starting in 2 hours + Your pre-class prep</p>
                    <div className="mt-2 text-sm">
                      <p>Hi [Name],</p>
                      <p className="mt-2">Quick reminder - we're starting in just 2 hours!</p>
                      <p className="mt-2">
                        <strong>🎯 To get the most value:</strong>
                      </p>
                      <ul className="mt-1 ml-4 space-y-1">
                        <li>• Have a notebook ready for the 3-step career transition framework</li>
                        <li>• Think about your biggest career switch concern (we'll address it live)</li>
                        <li>• Join 5 minutes early for the best experience</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">Email 3: Last-Minute Urgency</h4>
                    <Badge>15 minutes before</Badge>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold">Subject: 🚨 [Name], we're starting in 15 minutes!</p>
                    <div className="mt-2 text-sm">
                      <p>Hi [Name],</p>
                      <p className="mt-2">This is it! We're going live in 15 minutes.</p>
                      <p className="mt-2">
                        347 marketing professionals are already in the waiting room. Don't miss your chance to be part
                        of this exclusive session.
                      </p>
                      <p className="mt-2">
                        <strong>👆 Click here to join now</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <strong>AI Personalization:</strong> Dynamic content based on profession, engagement level, time zone
                optimization, A/B tested subject lines, behavioral triggers
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dashboard" className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Real-Time Analytics Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Registration Rate</h4>
                  <p className="text-2xl font-bold text-blue-600">23.4%</p>
                  <p className="text-sm text-blue-600">↑ 12% vs last week</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Show-up Rate</h4>
                  <p className="text-2xl font-bold text-green-600">67.8%</p>
                  <p className="text-sm text-green-600">↑ 8% with AI nudges</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800">Engagement Score</h4>
                  <p className="text-2xl font-bold text-purple-600">8.2/10</p>
                  <p className="text-sm text-purple-600">AI-personalized content</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800">Conversion Rate</h4>
                  <p className="text-2xl font-bold text-orange-600">12.3%</p>
                  <p className="text-sm text-orange-600">Target: 15%</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">AI Insights & Recommendations</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <p>Marketing professionals have 34% higher show-up rates - increase targeting</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-500">⚠</span>
                    <p>Mobile users dropping off at 45% - optimize mobile experience</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500">💡</span>
                    <p>Send reminder emails 2.5 hours before class for optimal attendance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
