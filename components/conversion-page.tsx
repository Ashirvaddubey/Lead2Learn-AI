"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Clock, TrendingUp, Users, CheckCircle, Calculator, CreditCard, Sparkles, Crown, Zap, Star } from "lucide-react"

interface ConversionPageProps {
  currentUser: string
}

export function ConversionPage({ currentUser }: ConversionPageProps) {
  const [loanAmount, setLoanAmount] = useState(89999)
  const [tenure, setTenure] = useState(12)
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 })
  const [isPurchased, setIsPurchased] = useState(false)

  const interestRate = 12 // 12% annual interest
  const monthlyRate = interestRate / 12 / 100
  const monthlyEMI = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1),
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handlePurchase = (type: string) => {
    const purchaseData = {
      user: currentUser,
      type,
      amount: type === "full" ? loanAmount : type === "emi" ? monthlyEMI : 10000,
      timestamp: new Date().toISOString(),
    }

    localStorage.setItem("purchaseData", JSON.stringify(purchaseData))
    setIsPurchased(true)

    // Simulate payment processing
    setTimeout(() => {
      alert(`Payment successful! Welcome to Scaler Data Engineering Program, ${currentUser}!`)
    }, 2000)
  }

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Data Engineer at Google",
      image: "/placeholder.svg?height=60&width=60",
      content: "Scaler's program helped me transition from a 8 LPA role to 24 LPA at Google in just 10 months!",
      linkedin: "linkedin.com/in/priyasharma",
    },
    {
      name: "Rahul Gupta",
      role: "Senior Data Engineer at Amazon",
      image: "/placeholder.svg?height=60&width=60",
      content: "The hands-on projects and mentorship were game-changers. Now earning 28 LPA at Amazon.",
      linkedin: "linkedin.com/in/rahulgupta",
    },
    {
      name: "Anita Patel",
      role: "Data Architect at Microsoft",
      image: "/placeholder.svg?height=60&width=60",
      content: "From 6 LPA to 32 LPA in 14 months. The ROI on this course is incredible!",
      linkedin: "linkedin.com/in/anitapatel",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-400/10 to-rose-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-amber-100 px-4 py-2 rounded-full mb-4">
              <Crown className="w-4 h-4 text-rose-600" />
              <span className="text-sm font-medium text-gray-700">Exclusive Limited Time Offer</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-rose-600 via-violet-600 to-amber-600 bg-clip-text text-transparent mb-4">
              Congratulations {currentUser}! 🎉
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Based on your session, here's your personalized path to a 14-20 LPA Data Engineering role
            </p>

            <Card className="inline-block p-6 bg-gradient-to-r from-amber-50 via-rose-50 to-orange-50 border-amber-200 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-amber-800">Special pricing expires in:</span>
              </div>
              <div className="flex gap-4 text-center">
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                    {timeLeft.hours}
                  </div>
                  <div className="text-xs text-amber-700 font-medium">Hours</div>
                </div>
                <div className="text-3xl font-bold text-amber-600 self-center">:</div>
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-xs text-amber-700 font-medium">Minutes</div>
                </div>
                <div className="text-3xl font-bold text-amber-600 self-center">:</div>
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent animate-pulse">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-xs text-amber-700 font-medium">Seconds</div>
                </div>
              </div>
            </Card>
          </div>

          {isPurchased ? (
            <Card className="p-8 text-center mb-8 bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 shadow-xl animate-scale-in">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Welcome to Scaler! 🎉</h2>
              <p className="text-emerald-700 mb-4">Congratulations {currentUser}! Your enrollment is confirmed.</p>
              <p className="text-emerald-700">Check your email for course access details and next steps!</p>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 animate-slide-left">
                <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm shadow-xl border border-rose-100">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-6 h-6 text-rose-600" />
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent">
                          Data Engineering Career Accelerator
                        </h2>
                      </div>
                      <p className="text-gray-600">12-month comprehensive program with job guarantee</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border-emerald-200 shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      60% OFF
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                        ₹{loanAmount.toLocaleString()}
                      </span>
                      <span className="text-xl text-gray-500 line-through">₹2,24,999</span>
                      <Badge className="bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg">
                        Save ₹1,35,000
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">One-time payment or easy EMI options available</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 text-gray-800">What's Included:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        "12 months of live classes",
                        "1-on-1 mentorship sessions",
                        "Real industry projects",
                        "Job placement assistance",
                        "Interview preparation",
                        "LinkedIn profile optimization",
                        "Resume building workshop",
                        "Lifetime community access",
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 group hover:scale-105 transition-all duration-300"
                        >
                          <div className="p-1 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                          </div>
                          <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Card className="p-6 bg-gradient-to-br from-violet-50 via-rose-50 to-amber-50 border-violet-200 shadow-lg">
                    <h4 className="font-semibold text-violet-900 mb-4 flex items-center gap-2">
                      <div className="p-2 bg-gradient-to-r from-violet-500 to-rose-500 rounded-full">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      Your Projected Career Growth
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                        <span className="text-violet-800 font-medium">Current Salary:</span>
                        <span className="font-bold text-violet-900">₹6-8 LPA</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                        <span className="text-violet-800 font-medium">After 6 months:</span>
                        <span className="font-bold text-violet-900">₹12-15 LPA</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/80 backdrop-blur-sm rounded-lg">
                        <span className="text-violet-800 font-medium">After 12 months:</span>
                        <span className="font-bold text-emerald-600">₹18-25 LPA</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center text-lg p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
                        <span className="text-emerald-900 font-bold">ROI in Year 1:</span>
                        <span className="font-bold text-emerald-600 text-xl">300%+</span>
                      </div>
                    </div>
                  </Card>
                </Card>

                <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl border border-amber-100">
                  <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                    Success Stories from Our Alumni
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mx-auto mb-3 shadow-lg"
                        />
                        <h4 className="font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                        <p className="text-sm text-amber-600 font-medium mb-3">{testimonial.role}</p>
                        <p className="text-sm text-gray-600 italic">"{testimonial.content}"</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="animate-slide-right">
                <Card className="p-6 sticky top-8 bg-white/80 backdrop-blur-sm shadow-xl border border-violet-100">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-gradient-to-r from-violet-500 to-rose-500 rounded-full">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Secure Your Spot Today</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3 flex items-center gap-2 text-violet-800">
                      <Calculator className="w-4 h-4" />
                      EMI Calculator
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-gray-600 mb-1 block">Course Fee</label>
                        <Input
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="text-right border-violet-200 focus:border-violet-400"
                        />
                      </div>

                      <div>
                        <label className="text-sm text-gray-600 mb-1 block">Tenure (months)</label>
                        <select
                          value={tenure}
                          onChange={(e) => setTenure(Number(e.target.value))}
                          className="w-full p-2 border border-violet-200 rounded-md focus:border-violet-400 bg-white/80 backdrop-blur-sm"
                        >
                          <option value={6}>6 months</option>
                          <option value={12}>12 months</option>
                          <option value={18}>18 months</option>
                          <option value={24}>24 months</option>
                        </select>
                      </div>

                      <div className="bg-gradient-to-br from-violet-50 to-rose-50 p-4 rounded-lg border border-violet-200">
                        <div className="text-center">
                          <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
                            ₹{monthlyEMI.toLocaleString()}
                          </div>
                          <div className="text-sm text-violet-700 font-medium">per month</div>
                          <div className="text-xs text-violet-600 mt-1">@ {interestRate}% annual interest</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 h-12 shadow-lg transition-all duration-300 hover:scale-105"
                      onClick={() => handlePurchase("full")}
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay Full Amount (₹{loanAmount.toLocaleString()})
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full h-12 bg-white/80 backdrop-blur-sm border-violet-300 text-violet-700 hover:bg-violet-50 transition-all duration-300"
                      onClick={() => handlePurchase("emi")}
                    >
                      Start with EMI (₹{monthlyEMI.toLocaleString()}/month)
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full h-12 bg-white/80 backdrop-blur-sm border-rose-300 text-rose-700 hover:bg-rose-50 transition-all duration-300"
                      onClick={() => handlePurchase("partial")}
                    >
                      Pay ₹10,000 Now, Rest Later
                    </Button>
                  </div>

                  <div className="mt-6 text-center space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>100% Money Back Guarantee</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-violet-500" />
                      <span>Join 25,000+ successful learners</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 mt-6 bg-gradient-to-r from-red-50 to-rose-50 border-red-200 shadow-lg animate-pulse-subtle">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="p-1 bg-gradient-to-r from-red-500 to-rose-500 rounded-full">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                      <h4 className="font-semibold text-red-800">Last Few Hours!</h4>
                    </div>
                    <p className="text-red-700 text-sm mb-3">
                      This special pricing won't last long. Secure your future today!
                    </p>
                    <Badge className="bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs shadow-lg">
                      Only 7 spots left at this price
                    </Badge>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
