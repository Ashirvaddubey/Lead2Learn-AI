"use client"

import { useState, useEffect } from "react"
import { LoginPage } from "@/components/login-page"
import { LandingPage } from "@/components/landing-page"
import { LeadWarmingPage } from "@/components/lead-warming-page"
import { ActionPage } from "@/components/action-page"
import { ConversionPage } from "@/components/conversion-page"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function AIFunnelPrototype() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState<string>("")

  // Check if user is logged in on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuthenticated")
    const savedUser = localStorage.getItem("currentUser")
    if (savedAuth === "true" && savedUser) {
      setIsAuthenticated(true)
      setCurrentUser(savedUser)
    }
  }, [])

  const handleLogin = (username: string) => {
    setIsAuthenticated(true)
    setCurrentUser(username)
    localStorage.setItem("isAuthenticated", "true")
    localStorage.setItem("currentUser", username)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser("")
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("currentUser")
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation between funnel pages */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-600">Scaler AI Funnel Demo - Welcome, {currentUser}!</div>
            <div className="flex items-center gap-2">
              <a href="#landing" className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                Landing
              </a>
              <a href="#warming" className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                Warming
              </a>
              <a href="#action" className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                Action
              </a>
              <a href="#conversion" className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                Conversion
              </a>
              <Button variant="outline" size="sm" onClick={handleLogout} className="ml-4 bg-transparent">
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <section id="landing" className="min-h-screen">
          <LandingPage currentUser={currentUser} />
        </section>

        <section id="warming" className="min-h-screen bg-gray-50">
          <LeadWarmingPage currentUser={currentUser} />
        </section>

        <section id="action" className="min-h-screen">
          <ActionPage currentUser={currentUser} />
        </section>

        <section id="conversion" className="min-h-screen bg-gray-50">
          <ConversionPage currentUser={currentUser} />
        </section>
      </div>
    </div>
  )
}
