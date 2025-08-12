import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Users, MessageSquare, Calendar, Trophy } from "lucide-react"

export function FunnelOverview() {
  const stages = [
    {
      title: "Cold Lead Acquisition",
      description: "Attract potential learners through multiple channels",
      aiTouchpoints: ["AI-powered content recommendations", "Dynamic landing pages", "Behavioral tracking"],
      icon: Users,
      color: "bg-red-100 text-red-700",
    },
    {
      title: "Lead Qualification & Scoring",
      description: "Identify high-intent prospects using AI scoring",
      aiTouchpoints: ["ML-based lead scoring", "Intent prediction", "Demographic analysis"],
      icon: MessageSquare,
      color: "bg-orange-100 text-orange-700",
    },
    {
      title: "Personalized Nurturing",
      description: "Engage leads with tailored content and messaging",
      aiTouchpoints: ["Personalized email sequences", "AI chatbot interactions", "Content recommendations"],
      icon: Calendar,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Conversion Optimization",
      description: "Drive registered users to actually join live classes",
      aiTouchpoints: ["Smart reminder timing", "Personalized incentives", "Social proof optimization"],
      icon: Trophy,
      color: "bg-green-100 text-green-700",
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Complete Funnel Journey</h2>
      <div className="max-w-4xl mx-auto">
        {stages.map((stage, index) => (
          <div key={index} className="mb-8">
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${stage.color}`}>
                    <stage.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{stage.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{stage.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {stage.aiTouchpoints.map((touchpoint, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800">
                      {touchpoint}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            {index < stages.length - 1 && (
              <div className="flex justify-center my-4">
                <ArrowDown className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
