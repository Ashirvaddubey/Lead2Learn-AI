import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp, Zap, Target } from "lucide-react"

export function ImprovementPlan() {
  const improvements = [
    {
      category: "Advanced AI Integrations",
      icon: Zap,
      color: "bg-purple-100 text-purple-700",
      items: [
        {
          title: "Predictive Lead Scoring 2.0",
          description: "Implement ML model that predicts likelihood to convert based on 50+ behavioral signals",
          impact: "25% improvement in lead quality",
          effort: "High",
        },
        {
          title: "Dynamic Content Generation",
          description: "Use GPT-4 to generate personalized email content based on user's LinkedIn profile and behavior",
          impact: "40% increase in email engagement",
          effort: "Medium",
        },
        {
          title: "Voice AI for Follow-ups",
          description: "Implement AI voice calls for high-intent leads who don't show up",
          impact: "15% recovery of no-shows",
          effort: "High",
        },
      ],
    },
    {
      category: "A/B Testing & Optimization",
      icon: Target,
      color: "bg-blue-100 text-blue-700",
      items: [
        {
          title: "Multi-variate Landing Page Testing",
          description: "Test 16 combinations of headlines, CTAs, and social proof elements",
          impact: "20% lift in conversion rate",
          effort: "Medium",
        },
        {
          title: "Email Send Time Optimization",
          description: "AI-powered send time optimization based on individual user behavior patterns",
          impact: "30% improvement in open rates",
          effort: "Low",
        },
        {
          title: "Chatbot Conversation Flow Testing",
          description: "Test different conversation paths and personality styles for the AI chatbot",
          impact: "25% increase in chat-to-registration",
          effort: "Medium",
        },
      ],
    },
    {
      category: "Data-Driven Personalization",
      icon: TrendingUp,
      color: "bg-green-100 text-green-700",
      items: [
        {
          title: "Behavioral Cohort Analysis",
          description: "Segment users into behavioral cohorts and create targeted nurture sequences",
          impact: "35% improvement in show-up rate",
          effort: "Medium",
        },
        {
          title: "Real-time Website Personalization",
          description: "Dynamic website content based on traffic source, previous visits, and inferred intent",
          impact: "50% increase in time on site",
          effort: "High",
        },
        {
          title: "Cross-channel Attribution",
          description: "Track user journey across email, social, ads, and website for better attribution",
          impact: "Better ROI measurement",
          effort: "High",
        },
      ],
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">"If I Had 2 More Weeks" - Advanced Improvements</h2>

      <div className="max-w-6xl mx-auto space-y-8">
        {improvements.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${category.color}`}>
                  <category.icon className="w-5 h-5" />
                </div>
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <Badge
                        variant={
                          item.effort === "Low" ? "default" : item.effort === "Medium" ? "secondary" : "destructive"
                        }
                      >
                        {item.effort} Effort
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <strong className="text-green-800">Expected Impact:</strong>
                      <span className="text-green-700 ml-1">{item.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              2-Week Implementation Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-800">Week 1: Foundation & Quick Wins</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Implement email send time optimization (Day 1-2)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Set up multi-variate landing page tests (Day 3-4)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Launch behavioral cohort analysis (Day 5-7)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-purple-800">Week 2: Advanced AI Features</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">⚡</span>
                    <span>Deploy predictive lead scoring 2.0 (Day 8-10)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">⚡</span>
                    <span>Implement dynamic content generation (Day 11-12)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">⚡</span>
                    <span>Launch real-time website personalization (Day 13-14)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border">
              <h4 className="font-semibold mb-2">Expected Compound Impact:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-600">45%</p>
                  <p className="text-sm text-gray-600">Show-up Rate Increase</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">60%</p>
                  <p className="text-sm text-gray-600">Email Engagement Lift</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">35%</p>
                  <p className="text-sm text-gray-600">Lead Quality Improvement</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600">25%</p>
                  <p className="text-sm text-gray-600">Overall Conversion Boost</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
