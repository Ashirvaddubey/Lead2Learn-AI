"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, User, Lock, CheckCircle, Sparkles } from "lucide-react"

interface LoginPageProps {
  onLogin: (username: string) => void
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Demo credentials with Indian names
  const demoCredentials = [
    { username: "priya.sharma", password: "demo123", name: "Priya Sharma" },
    { username: "rahul.gupta", password: "demo123", name: "Rahul Gupta" },
    { username: "anita.patel", password: "demo123", name: "Anita Patel" },
    { username: "vikram.singh", password: "demo123", name: "Vikram Singh" },
    { username: "kavya.reddy", password: "demo123", name: "Kavya Reddy" },
    { username: "arjun.kumar", password: "demo123", name: "Arjun Kumar" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user = demoCredentials.find((cred) => cred.username === username && cred.password === password)

    if (user) {
      onLogin(user.name)
    } else {
      setError("Invalid username or password. Please try demo credentials.")
    }

    setIsLoading(false)
  }

  const handleDemoLogin = (cred: (typeof demoCredentials)[0]) => {
    setUsername(cred.username)
    setPassword(cred.password)
    onLogin(cred.name)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-full max-w-md z-10">
        <Card className="p-8 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
          <div className="text-center mb-8 animate-fade-in">
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-spin-slow">
                <Sparkles className="w-10 h-10 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
            </div>

            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2 animate-slide-up">
              Welcome to Scaler AI
            </h1>
            <p className="text-blue-200 animate-slide-up delay-200">Access your personalized funnel experience</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-slide-up delay-300">
              <label className="block text-sm font-medium text-blue-200 mb-2">Username</label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="pl-10 h-12 bg-white/10 border-white/20 text-white placeholder-blue-300 focus:bg-white/20 focus:border-blue-400 transition-all duration-300 hover:bg-white/15"
                  required
                />
              </div>
            </div>

            <div className="animate-slide-up delay-400">
              <label className="block text-sm font-medium text-blue-200 mb-2">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-300 group-focus-within:text-blue-400 transition-colors" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="pl-10 pr-10 h-12 bg-white/10 border-white/20 text-white placeholder-blue-300 focus:bg-white/20 focus:border-blue-400 transition-all duration-300 hover:bg-white/15"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-blue-400 transition-colors hover:scale-110"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-300 text-sm text-center bg-red-500/20 backdrop-blur-sm p-3 rounded-md border border-red-400/30 animate-shake">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-up delay-500"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-8 animate-slide-up delay-600">
            <div className="text-center mb-4">
              <span className="text-sm text-blue-200">Or try demo credentials:</span>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
              {demoCredentials.map((cred, index) => (
                <Card
                  key={index}
                  className="p-3 cursor-pointer bg-white/5 hover:bg-white/15 transition-all duration-300 border-white/10 hover:border-blue-400/50 transform hover:scale-102 hover:shadow-lg group"
                  onClick={() => handleDemoLogin(cred)}
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-between animate-slide-up">
                    <div>
                      <div className="font-medium text-sm text-white group-hover:text-blue-200 transition-colors">
                        {cred.name}
                      </div>
                      <div className="text-xs text-blue-300">{cred.username}</div>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs border-blue-400/50 text-blue-300 group-hover:border-blue-400 group-hover:text-blue-200 transition-all"
                    >
                      Click to login
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-4 text-center animate-slide-up delay-1000">
              <div className="flex items-center justify-center gap-2 text-xs text-blue-300">
                <CheckCircle className="w-3 h-3 text-green-400 animate-pulse" />
                <span>All demo accounts use password: demo123</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6 text-white/60 text-sm animate-slide-up delay-1200">
          <p>This is a demo application for the Scaler AI APM Intern assignment</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out both; }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1200 { animation-delay: 1200ms; }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  )
}
