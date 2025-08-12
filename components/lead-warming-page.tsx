"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageCircle, Calendar, Play, ArrowRight, Target, Sparkles, Brain, Zap } from "lucide-react"

interface LeadWarmingPageProps {
  currentUser: string
}

export function LeadWarmingPage({ currentUser }: LeadWarmingPageProps) {
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message: `Hi ${currentUser}! 👋 I'm here to help you prepare for your Data Engineering journey. What would you like to know?`,
    },
  ])
  const [currentMessage, setCurrentMessage] = useState("")
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const quizQuestions = [
    {
      question: "What's your current experience level?",
      options: ["Complete Beginner", "Some Programming", "1-2 Years Experience", "3+ Years Experience"],
    },
    {
      question: "Which area interests you most?",
      options: ["Data Pipelines", "Machine Learning", "Cloud Architecture", "Analytics"],
    },
    {
      question: "What's your career goal?",
      options: ["Switch to Data Engineering", "Upskill Current Role", "Start Fresh Career", "Freelancing"],
    },
  ]

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer]
    setQuizAnswers(newAnswers)

    localStorage.setItem("quizAnswers", JSON.stringify(newAnswers))

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    } else {
      localStorage.setItem("quizCompleted", "true")
    }
  }

  const sendMessage = () => {
    if (!currentMessage.trim()) return

    const userMessage = currentMessage
    setChatMessages((prev) => [...prev, { type: "user", message: userMessage }])
    setCurrentMessage("")
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)

      let botResponse = ""
      const lowerMessage = userMessage.toLowerCase()

      if (lowerMessage.includes("salary") || lowerMessage.includes("pay")) {
        botResponse =
          "Great question! Our graduates typically see 2-3x salary increases. Entry-level Data Engineers start at 8-12 LPA, while experienced ones earn 15-25 LPA. Would you like to see specific success stories?"
      } else if (lowerMessage.includes("time") || lowerMessage.includes("duration")) {
        botResponse =
          "Our comprehensive program is 12 months long with flexible scheduling. You can study part-time while working. Most students dedicate 10-15 hours per week. Need help planning your schedule?"
      } else if (lowerMessage.includes("job") || lowerMessage.includes("placement")) {
        botResponse =
          "We have a 95% placement rate! Our career services include resume building, interview prep, and direct connections with 200+ hiring partners including Google, Amazon, and Microsoft. Shall I share more details?"
      } else if (lowerMessage.includes("prerequisite") || lowerMessage.includes("requirement")) {
        botResponse =
          "No specific prerequisites needed! We start from basics. Having some programming knowledge helps, but we've had successful students from non-tech backgrounds too. What's your current background?"
      } else {
        botResponse =
          "That's a great question! Based on your profile and quiz answers, I'd recommend focusing on Python and SQL fundamentals first. Our curriculum is designed to take you from beginner to job-ready. Would you like me to create a personalized study plan?"
      }

      setChatMessages((prev) => [...prev, { type: "bot", message: botResponse }])
    }, 1500)
  }

  useEffect(() => {
    setIsVisible(true)
    const savedAnswers = localStorage.getItem("quizAnswers")
    const quizCompleted = localStorage.getItem("quizCompleted")

    if (savedAnswers) {
      const answers = JSON.parse(savedAnswers)
      setQuizAnswers(answers)
      if (quizCompleted === "true") {
        setQuizStep(quizQuestions.length)
      } else {
        setQuizStep(answers.length)
      }
    }
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`relative container mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-down">
            <div className="relative mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-spin-slow mb-4">
                <Sparkles className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent animate-gradient-x">
              Hi {currentUser}, here's your journey to becoming a Data Engineer! 🚀
            </h1>
            <p className="text-xl text-gray-600 animate-slide-up delay-300">
              Let's personalize your learning experience and get you ready for success
            </p>
          </div>

          <Card className="p-6 mb-8 bg-white/80 backdrop-blur-sm border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102 animate-slide-up delay-500">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-blue-500 animate-pulse" />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Progress
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-green-500 animate-bounce" />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                  You've reserved your spot
                </span>
                <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800 animate-pulse">
                  Completed
                </Badge>
              </div>
              <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                <Target
                  className={`w-6 h-6 transition-all duration-500 ${quizStep >= quizQuestions.length ? "text-green-500 animate-bounce" : "text-orange-500 animate-pulse"}`}
                />
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">Complete skill quiz</span>
                <Badge
                  variant={quizStep >= quizQuestions.length ? "secondary" : "outline"}
                  className={`ml-auto transition-all duration-300 ${quizStep >= quizQuestions.length ? "bg-green-100 text-green-800 animate-pulse" : "animate-pulse"}`}
                >
                  {quizStep >= quizQuestions.length ? "Completed" : "In Progress"}
                </Badge>
              </div>
              <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <span className="text-gray-500 group-hover:text-gray-700 transition-colors">Attend live class</span>
                <Badge variant="outline" className="ml-auto group-hover:border-blue-400 transition-colors">
                  Upcoming
                </Badge>
              </div>
            </div>
            <div className="mt-4">
              <Progress value={quizStep >= quizQuestions.length ? 66 : 33} className="h-3 bg-gray-200 animate-pulse" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Started</span>
                <span className="animate-pulse">{quizStep >= quizQuestions.length ? "66%" : "33%"} Complete</span>
                <span>Ready to Launch</span>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102 animate-slide-right delay-700">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-orange-500 animate-spin-slow" />
                <h3 className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Personalized Learning Quiz
                </h3>
              </div>

              {quizStep < quizQuestions.length ? (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-500 animate-pulse"
                        style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 animate-pulse">
                      {quizStep + 1} of {quizQuestions.length}
                    </span>
                  </div>

                  <h4 className="font-medium mb-4 text-gray-800 animate-slide-up">
                    {quizQuestions[quizStep].question}
                  </h4>
                  <div className="space-y-2">
                    {quizQuestions[quizStep].options.map((option, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start bg-white/50 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 border-gray-200 hover:border-orange-300 transition-all duration-300 hover:scale-105 hover:shadow-md animate-slide-up"
                        style={{ animationDelay: `${800 + index * 100}ms` }}
                        onClick={() => handleQuizAnswer(option)}
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center animate-zoom-in">
                  <div className="relative mb-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto animate-bounce" />
                    <div className="absolute inset-0 w-12 h-12 mx-auto bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-800">Quiz Complete!</h4>
                  <p className="text-gray-600 mb-4">
                    Based on your answers, we've created a personalized learning path for you.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4 border border-blue-200/50 animate-slide-up">
                    <h5 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 animate-pulse" />
                      Your Answers:
                    </h5>
                    <ul className="text-sm text-blue-800 space-y-1">
                      {quizAnswers.map((answer, index) => (
                        <li key={index} className="animate-slide-right" style={{ animationDelay: `${index * 200}ms` }}>
                          • {answer}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => {
                      document.getElementById("action")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <Target className="w-4 h-4 mr-2" />
                    View My Learning Path
                  </Button>
                </div>
              )}
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102 animate-slide-left delay-900">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-blue-500 animate-pulse" />
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ask Me Anything
                </h3>
              </div>

              <div className="h-64 overflow-y-auto mb-4 space-y-3 custom-scrollbar">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                        msg.type === "user"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 border border-gray-200 shadow-md"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start animate-fade-in">
                    <div className="max-w-xs px-4 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about the course, career paths, or anything..."
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white"
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  disabled={isTyping}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
                >
                  Send
                </Button>
              </div>
            </Card>
          </div>

          <Card className="p-6 mt-8 bg-white/80 backdrop-blur-sm border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102 animate-slide-up delay-1100">
            <div className="flex items-center gap-2 mb-4">
              <Play className="w-5 h-5 text-orange-500 animate-pulse" />
              <h3 className="text-xl font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Get a Sneak Peek
              </h3>
            </div>
            <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-500">
              <div className="aspect-video flex items-center justify-center relative">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-400/20 rounded-full blur-xl animate-float-delayed"></div>
                </div>

                <div className="text-center text-white z-10">
                  <div className="relative mb-4">
                    <Play className="w-16 h-16 mx-auto text-orange-400 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                    <div className="absolute inset-0 w-16 h-16 mx-auto bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-orange-200 transition-colors">
                    3-Minute Course Preview
                  </h4>
                  <p className="text-blue-200 group-hover:text-blue-100 transition-colors">
                    See what you'll learn in our comprehensive program
                  </p>
                  <Button className="mt-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Preview
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12 animate-slide-up delay-1300" id="action">
            <div className="relative mb-6">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce mb-4">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 w-12 h-12 mx-auto bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Ready for the Next Step?
            </h3>
            <p className="text-gray-600 mb-6">Complete your quiz and join thousands of successful Data Engineers</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3"
            >
              Continue to Class Booking
              <ArrowRight className="w-4 h-4 ml-2 animate-pulse" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-10px); opacity: 0.8; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-right {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-left {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-particle { animation: float-particle 4s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-slide-down { animation: slide-down 0.8s ease-out; }
        .animate-slide-right { animation: slide-right 0.6s ease-out both; }
        .animate-slide-left { animation: slide-left 0.6s ease-out both; }
        .animate-zoom-in { animation: zoom-in 0.5s ease-out; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-spin-slow { animation: spin 4s linear infinite; }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  )
}
