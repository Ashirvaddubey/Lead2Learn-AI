"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Users, Clock, CheckCircle, Star, TrendingUp, Award } from "lucide-react"

interface LandingPageProps {
  currentUser: string
}

export function LandingPage({ currentUser }: LandingPageProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 32, seconds: 45 })
  const [formData, setFormData] = useState({ name: currentUser, email: "", phone: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Countdown timer effect
  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.phone) {
      localStorage.setItem("leadData", JSON.stringify(formData))
      setIsSubmitted(true)

      setTimeout(() => {
        document.getElementById("warming")?.scrollIntoView({ behavior: "smooth" })
      }, 2000)
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`relative container mx-auto px-4 py-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto text-center text-white mb-12">
          <div className="animate-slide-down">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
              Master Data Engineering in 12 Months
              <span className="block text-transparent bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text animate-pulse">
                Free Live Class This Week!
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up delay-300 max-w-3xl mx-auto">
            Join 25,000+ learners from Google, Amazon, Microsoft and land your dream job
          </p>

          <div className="flex justify-center mb-8 animate-slide-up delay-500">
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-orange-400 animate-spin-slow" />
                <span className="text-orange-400 font-semibold animate-pulse">Only 2 days left to join!</span>
              </div>
              <div className="flex gap-4 text-center">
                {Object.entries(timeLeft).map(([unit, value], index) => (
                  <div key={unit} className="animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                    <div className="text-3xl font-bold text-white bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
                      {value}
                    </div>
                    <div className="text-sm text-blue-200 capitalize">{unit}</div>
                    {index < 3 && <div className="text-3xl font-bold text-white absolute -right-2 top-0">:</div>}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="flex items-center justify-center gap-2 mb-12 animate-slide-up delay-700">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <Users className="w-5 h-5 text-orange-400 animate-pulse" />
            <span className="text-blue-100">Trusted by 25,000+ learners from Google, Amazon, Microsoft</span>
          </div>
        </div>

        <div className="max-w-md mx-auto animate-slide-up delay-900">
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <Award className="w-12 h-12 text-orange-400 mx-auto mb-3 animate-bounce" />
                  <h3 className="text-2xl font-bold text-white mb-2">Reserve Your Free Spot</h3>
                  <p className="text-blue-200 text-sm">Join the exclusive masterclass</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="animate-slide-right delay-1000">
                    <Input
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder-blue-300 focus:bg-white/20 focus:border-orange-400 transition-all duration-300 hover:bg-white/15"
                      required
                    />
                  </div>

                  <div className="animate-slide-right delay-1100">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder-blue-300 focus:bg-white/20 focus:border-orange-400 transition-all duration-300 hover:bg-white/15"
                      required
                    />
                  </div>

                  <div className="animate-slide-right delay-1200">
                    <Input
                      type="tel"
                      placeholder="+91 Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12 bg-white/10 border-white/20 text-white placeholder-blue-300 focus:bg-white/20 focus:border-orange-400 transition-all duration-300 hover:bg-white/15"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-up delay-1300"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Reserve My Free Spot
                  </Button>
                </form>

                <p className="text-sm text-blue-300 text-center mt-4 animate-fade-in delay-1400">
                  Get free reminders & personalized learning plan after sign-up
                </p>
              </>
            ) : (
              <div className="text-center py-8 animate-zoom-in">
                <div className="relative mb-4">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto animate-bounce" />
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Spot Reserved Successfully!</h3>
                <p className="text-blue-200 mb-6">
                  Thank you {formData.name}! We've sent confirmation details to {formData.email}
                </p>
                <p className="text-sm text-orange-400 animate-pulse">
                  Continue below to personalize your learning journey →
                </p>
              </div>
            )}
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-20 animate-slide-up delay-1500">
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 text-center animate-gradient-x bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              What You'll Learn in This Free Masterclass
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Data Pipeline Architecture",
                  desc: "Build scalable data pipelines used by top tech companies",
                },
                {
                  icon: TrendingUp,
                  title: "Real-World Projects",
                  desc: "Work on actual industry projects from day one",
                },
                { icon: Award, title: "Career Guidance", desc: "Get personalized roadmap to land 14-20 LPA jobs" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${1600 + index * 200}ms` }}
                >
                  <div className="relative mb-3">
                    <item.icon className="w-8 h-8 text-orange-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 w-8 h-8 mx-auto bg-orange-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                  <h4 className="font-semibold text-white mb-2 group-hover:text-orange-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-blue-200 text-sm group-hover:text-blue-100 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>
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
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
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
        
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-slide-down { animation: slide-down 0.8s ease-out; }
        .animate-slide-right { animation: slide-right 0.6s ease-out both; }
        .animate-zoom-in { animation: zoom-in 0.5s ease-out; }
        .animate-spin-slow { animation: spin 4s linear infinite; }
      `}</style>
    </div>
  )
}
