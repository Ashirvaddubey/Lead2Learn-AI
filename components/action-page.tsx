"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, AlertCircle, CheckCircle, Phone, Video, Sparkles, Brain, Zap } from "lucide-react"

interface ActionPageProps {
  currentUser: string
}

export function ActionPage({ currentUser }: ActionPageProps) {
  const [selectedSlot, setSelectedSlot] = useState("")
  const [selectedType, setSelectedType] = useState("class")
  const [isBooked, setIsBooked] = useState(false)
  const [bookedSlot, setBookedSlot] = useState<any>(null)
  const [aiRecommendation, setAiRecommendation] = useState("")
  const [isLoadingAI, setIsLoadingAI] = useState(false)

  const classSlots = [
    { id: "1", date: "March 15", time: "7:00 PM - 9:00 PM", seats: 12, type: "Live Class" },
    { id: "2", date: "March 16", time: "2:00 PM - 4:00 PM", seats: 8, type: "Live Class" },
    { id: "3", date: "March 17", time: "7:00 PM - 9:00 PM", seats: 15, type: "Live Class" },
  ]

  const consultationSlots = [
    { id: "c1", date: "March 15", time: "11:00 AM - 11:30 AM", seats: 1, type: "1-on-1 Call" },
    { id: "c2", date: "March 15", time: "3:00 PM - 3:30 PM", seats: 1, type: "1-on-1 Call" },
    { id: "c3", date: "March 16", time: "10:00 AM - 10:30 AM", seats: 1, type: "1-on-1 Call" },
    { id: "c4", date: "March 16", time: "4:00 PM - 4:30 PM", seats: 1, type: "1-on-1 Call" },
  ]

  const currentSlots = selectedType === "class" ? classSlots : consultationSlots

  const generateAIRecommendation = async () => {
    setIsLoadingAI(true)
    try {
      const leadData = localStorage.getItem("leadData")
      const quizData = localStorage.getItem("quizAnswers")

      const userContext = leadData ? JSON.parse(leadData) : {}
      const userQuiz = quizData ? JSON.parse(quizData) : {}

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Scaler AI Funnel",
        },
        body: JSON.stringify({
          model: "anthropic/claude-3.5-sonnet",
          messages: [
            {
              role: "user",
              content: `Based on this user profile: Name: ${currentUser}, Background: ${userContext.background || "Software Professional"}, Experience: ${userQuiz.experience || "Beginner"}, Goals: ${userQuiz.goals || "Career Growth"}, Session Type: ${selectedType === "class" ? "Live Masterclass" : "1-on-1 Consultation"}. 

              Generate a personalized 2-sentence recommendation for their next steps in data engineering career. Be specific and actionable. Focus on salary growth potential and skill development.`,
            },
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      if (data.choices && data.choices[0] && data.choices[0].message) {
        setAiRecommendation(data.choices[0].message.content)
      } else {
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.error("AI recommendation error:", error)
      const fallbackRecommendations = [
        `Hi ${currentUser}! Based on your interest in ${selectedType === "class" ? "our masterclass" : "personalized consultation"}, I recommend focusing on cloud data platforms like AWS/Azure and real-time processing with Apache Kafka to target 15-25 LPA roles. Your selected session will provide the perfect foundation for this high-growth career path.`,
        `${currentUser}, considering your background, I suggest mastering Python data engineering libraries and modern ETL tools like dbt and Airflow. This combination can help you achieve 20-30 LPA positions within 12-18 months of focused learning.`,
        `For your career goals ${currentUser}, I recommend specializing in big data technologies like Spark and Hadoop alongside cloud certifications. This strategic approach can accelerate your path to senior data engineering roles with 25-40 LPA potential.`,
      ]
      const randomRecommendation = fallbackRecommendations[Math.floor(Math.random() * fallbackRecommendations.length)]
      setAiRecommendation(randomRecommendation)
    }
    setIsLoadingAI(false)
  }

  const confirmBooking = () => {
    const slot = currentSlots.find((s) => s.id === selectedSlot)
    if (slot) {
      setBookedSlot(slot)
      setIsBooked(true)

      // Store booking data
      localStorage.setItem(
        "bookedSlot",
        JSON.stringify({
          ...slot,
          bookedBy: currentUser,
          bookedAt: new Date().toISOString(),
        }),
      )

      // Scroll to conversion page after 3 seconds
      setTimeout(() => {
        document.getElementById("conversion")?.scrollIntoView({ behavior: "smooth" })
      }, 3000)
    }
  }

  const addToCalendar = () => {
    const slot = currentSlots.find((s) => s.id === selectedSlot)
    if (slot) {
      // Generate Google Calendar link
      const startDate = new Date(`${slot.date}, 2024 ${slot.time.split(" - ")[0]}`)
      const endDate = new Date(`${slot.date}, 2024 ${slot.time.split(" - ")[1]}`)

      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Scaler%20Data%20Engineering%20${slot.type}&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${endDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z&details=Join%20your%20Data%20Engineering%20session&location=Online`

      window.open(calendarUrl, "_blank")
    }
  }

  const setSMSReminder = () => {
    const leadData = localStorage.getItem("leadData")
    if (leadData) {
      const { phone } = JSON.parse(leadData)
      alert(`SMS reminder set for ${phone}! You'll receive notifications 24 hours and 1 hour before your session.`)
    }
  }

  // Load saved booking and generate AI recommendation
  useEffect(() => {
    const savedBooking = localStorage.getItem("bookedSlot")
    if (savedBooking) {
      const booking = JSON.parse(savedBooking)
      setBookedSlot(booking)
      setIsBooked(true)
      setSelectedSlot(booking.id)
      setSelectedType(booking.type === "Live Class" ? "class" : "consultation")
    }
    generateAIRecommendation()
  }, [selectedType])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-emerald-100 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Session Matching</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Book Your Session
            </h1>
            <p className="text-xl text-gray-600">
              Choose between a live masterclass or personalized 1-on-1 consultation
            </p>
          </div>

          {isBooked ? (
            <Card className="p-8 text-center mb-8 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-xl animate-scale-in">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Booking Confirmed!</h2>
              <p className="text-emerald-700 mb-4">
                Hi {currentUser}, your {bookedSlot?.type} is confirmed for:
              </p>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg inline-block shadow-lg">
                <p className="font-semibold text-gray-900">
                  {bookedSlot?.date} • {bookedSlot?.time}
                </p>
                <p className="text-gray-600">{bookedSlot?.type}</p>
              </div>
              <p className="text-emerald-700 mt-4">Check your email for joining instructions and calendar invite!</p>
            </Card>
          ) : (
            <>
              <div className="flex justify-center mb-8 animate-slide-up">
                <div className="bg-white/80 backdrop-blur-sm p-1 rounded-xl shadow-lg border border-purple-100">
                  <Button
                    variant={selectedType === "class" ? "default" : "ghost"}
                    onClick={() => setSelectedType("class")}
                    className={`px-6 transition-all duration-300 ${
                      selectedType === "class"
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                        : "hover:bg-purple-50"
                    }`}
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Live Masterclass
                  </Button>
                  <Button
                    variant={selectedType === "consultation" ? "default" : "ghost"}
                    onClick={() => setSelectedType("consultation")}
                    className={`px-6 transition-all duration-300 ${
                      selectedType === "consultation"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                        : "hover:bg-emerald-50"
                    }`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    1-on-1 Consultation
                  </Button>
                </div>
              </div>

              <Card className="p-4 mb-8 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg animate-pulse-subtle">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-full">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800">
                      {selectedType === "class" ? "Limited Seats Available!" : "High Demand Alert!"}
                    </p>
                    <p className="text-amber-700 text-sm">
                      {selectedType === "class"
                        ? "Only a few seats left for this week's sessions. Book now to secure your spot!"
                        : "Our career counselors are booking fast. Reserve your slot today!"}
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="animate-slide-left">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">
                    Available {selectedType === "class" ? "Class" : "Consultation"} Slots
                  </h3>

                  <div className="space-y-4">
                    {currentSlots.map((slot, index) => (
                      <Card
                        key={slot.id}
                        className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm ${
                          selectedSlot === slot.id
                            ? "border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50 shadow-lg"
                            : "bg-white/80 hover:border-purple-300"
                        }`}
                        onClick={() => setSelectedSlot(slot.id)}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-purple-500" />
                              <span className="font-medium">{slot.date}</span>
                              <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50">
                                {slot.type}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{slot.time}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm">
                              <Users className="w-4 h-4" />
                              <span className={slot.seats <= 5 ? "text-red-600 font-semibold" : "text-gray-600"}>
                                {slot.seats} seats left
                              </span>
                            </div>
                            {selectedSlot === slot.id && (
                              <CheckCircle className="w-5 h-5 text-purple-600 mt-2 animate-bounce" />
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="animate-slide-right">
                  <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl border border-purple-100">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Confirm Your Booking</h3>

                    {selectedSlot ? (
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-100">
                          <h4 className="font-medium mb-2 text-purple-800">Selected Session:</h4>
                          {(() => {
                            const slot = currentSlots.find((s) => s.id === selectedSlot)
                            return slot ? (
                              <div>
                                <p className="text-purple-700 font-medium">{slot.type}</p>
                                <p className="text-purple-600">
                                  {slot.date} • {slot.time}
                                </p>
                              </div>
                            ) : null
                          })()}
                        </div>

                        <div className="space-y-3">
                          <Button
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg transition-all duration-300 hover:scale-105"
                            onClick={addToCalendar}
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            Add to Google Calendar
                          </Button>

                          <Button
                            variant="outline"
                            className="w-full bg-white/80 backdrop-blur-sm border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
                            onClick={setSMSReminder}
                          >
                            <Zap className="w-4 h-4 mr-2" />
                            Set SMS Reminder
                          </Button>

                          <Button
                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg transition-all duration-300 hover:scale-105"
                            onClick={confirmBooking}
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Confirm Booking
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
                        <p className="text-gray-600">Select a time slot to continue</p>
                      </div>
                    )}
                  </Card>

                  <Card className="p-6 mt-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-indigo-200 shadow-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-indigo-900">AI Career Advisor</h4>
                    </div>

                    {isLoadingAI ? (
                      <div className="flex items-center gap-2 text-indigo-700">
                        <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm">Analyzing your profile...</span>
                      </div>
                    ) : (
                      <div>
                        <p className="text-indigo-800 text-sm mb-4 leading-relaxed">{aiRecommendation}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-indigo-300 text-indigo-700 bg-white/80 backdrop-blur-sm hover:bg-indigo-50 transition-all duration-300"
                          onClick={generateAIRecommendation}
                        >
                          <Sparkles className="w-3 h-3 mr-1" />
                          Get New Recommendation
                        </Button>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            </>
          )}

          <Card className="p-8 mt-12 bg-white/80 backdrop-blur-sm shadow-xl border border-purple-100 animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
              What to Expect in Your {selectedType === "class" ? "Masterclass" : "Consultation"}
            </h3>

            {selectedType === "class" ? (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300">
                    <Video className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-800">Live Interactive Session</h4>
                  <p className="text-gray-600 text-sm">Real-time Q&A with industry experts</p>
                </div>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-800">Hands-on Demo</h4>
                  <p className="text-gray-600 text-sm">Build your first data pipeline live</p>
                </div>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-800">Career Roadmap</h4>
                  <p className="text-gray-600 text-sm">Personalized path to your dream job</p>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-800">Personalized Guidance</h4>
                  <p className="text-gray-600 text-sm">One-on-one career counseling tailored to your background</p>
                </div>
                <div className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-800">Custom Learning Plan</h4>
                  <p className="text-gray-600 text-sm">Get a detailed roadmap based on your goals and timeline</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
