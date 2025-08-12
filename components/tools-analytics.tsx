import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, DollarSign, BarChart3, Settings } from "lucide-react"

export function ToolsAndAnalytics() {
  const tools = {
    free: [
      { name: "Google Analytics 4", purpose: "Behavior tracking & conversion funnels", setup: "Easy" },
      { name: "Facebook Pixel", purpose: "Retargeting & lookalike audiences", setup: "Easy" },
      { name: "Hotjar (Free Plan)", purpose: "Heatmaps & user session recordings", setup: "Medium" },
      { name: "Mailchimp (Free)", purpose: "Email automation & segmentation", setup: "Easy" },
      { name: "Calendly (Free)", purpose: "Automated booking for consultation calls", setup: "Easy" },
      { name: "Typeform (Free)", purpose: "Lead qualification surveys", setup: "Easy" },
      { name: "Zapier (Free)", purpose: "Workflow automation between tools", setup: "Medium" },
    ],
    paid: [
      { name: "HubSpot ($45/mo)", purpose: "CRM + lead scoring + email automation", setup: "Medium" },
      { name: "Intercom ($39/mo)", purpose: "AI chatbot + live chat", setup: "Medium" },
      { name: "Segment ($120/mo)", purpose: "Customer data platform", setup: "Hard" },
      { name: "Mixpanel ($25/mo)", purpose: "Advanced event tracking & cohort analysis", setup: "Medium" },
      { name: "Drift ($50/mo)", purpose: "Conversational marketing & chatbots", setup: "Medium" },
      { name: "Clearbit ($99/mo)", purpose: "Lead enrichment & company data", setup: "Easy" },
    ],
  }

  const integrations = [
    {
      stage: "Lead Capture",
      tools: ["Landing Page Builder", "Form Analytics", "A/B Testing"],
      apis: ["Google Analytics API", "Facebook Conversions API", "Typeform API"],
    },
    {
      stage: "Lead Scoring",
      tools: ["CRM Integration", "Behavioral Tracking", "Demographic Analysis"],
      apis: ["HubSpot API", "Clearbit API", "Custom ML Model"],
    },
    {
      stage: "Nurturing",
      tools: ["Email Automation", "SMS Marketing", "Chatbot"],
      apis: ["Mailchimp API", "Twilio API", "OpenAI API"],
    },
    {
      stage: "Conversion",
      tools: ["Booking System", "Payment Processing", "Follow-up Automation"],
      apis: ["Calendly API", "Stripe API", "Zoom API"],
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">Tools, APIs & Analytics Setup</h2>

      <Tabs defaultValue="tools" className="max-w-6xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tools" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Tools & Pricing
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Integrations
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Analytics Setup
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tools" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <DollarSign className="w-5 h-5" />
                  Free Tools (Prototype Budget: $0)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tools.free.map((tool, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">{tool.name}</h4>
                      <p className="text-sm text-gray-600">{tool.purpose}</p>
                      <Badge variant={tool.setup === "Easy" ? "default" : "secondary"} className="mt-1">
                        {tool.setup} Setup
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <DollarSign className="w-5 h-5" />
                  Paid Tools (Scale-up Budget: ~$300/mo)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tools.paid.map((tool, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">{tool.name}</h4>
                      <p className="text-sm text-gray-600">{tool.purpose}</p>
                      <Badge
                        variant={
                          tool.setup === "Easy" ? "default" : tool.setup === "Medium" ? "secondary" : "destructive"
                        }
                        className="mt-1"
                      >
                        {tool.setup} Setup
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{integration.stage}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Required Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {integration.tools.map((tool, i) => (
                          <Badge key={i} variant="outline">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">API Integrations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {integration.apis.map((api, i) => (
                          <Badge key={i} className="bg-purple-100 text-purple-800">
                            {api}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Metrics to Track</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Traffic Metrics</h4>
                    <ul className="text-sm mt-2 space-y-1 text-blue-700">
                      <li>• Unique visitors</li>
                      <li>• Traffic sources</li>
                      <li>• Page views</li>
                      <li>• Bounce rate</li>
                    </ul>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Conversion Metrics</h4>
                    <ul className="text-sm mt-2 space-y-1 text-green-700">
                      <li>• Registration rate</li>
                      <li>• Show-up rate</li>
                      <li>• Engagement time</li>
                      <li>• Final conversion</li>
                    </ul>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Engagement Metrics</h4>
                    <ul className="text-sm mt-2 space-y-1 text-purple-700">
                      <li>• Email open rates</li>
                      <li>• Click-through rates</li>
                      <li>• Chatbot interactions</li>
                      <li>• Time on page</li>
                    </ul>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800">AI Performance</h4>
                    <ul className="text-sm mt-2 space-y-1 text-orange-700">
                      <li>• Lead scoring accuracy</li>
                      <li>• Personalization lift</li>
                      <li>• Chatbot resolution</li>
                      <li>• Prediction accuracy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics Implementation Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Week 1: Foundation Setup</h4>
                    <ul className="text-sm mt-1 space-y-1 text-gray-600">
                      <li>• Install Google Analytics 4 with enhanced ecommerce</li>
                      <li>• Set up Facebook Pixel for retargeting</li>
                      <li>• Configure Hotjar for user behavior analysis</li>
                      <li>• Create custom events for funnel tracking</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Week 2: Advanced Tracking</h4>
                    <ul className="text-sm mt-1 space-y-1 text-gray-600">
                      <li>• Implement lead scoring algorithm</li>
                      <li>• Set up email automation tracking</li>
                      <li>• Configure chatbot analytics</li>
                      <li>• Create conversion attribution model</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Week 3: AI Integration</h4>
                    <ul className="text-sm mt-1 space-y-1 text-gray-600">
                      <li>• Connect ML models to analytics</li>
                      <li>• Set up real-time personalization tracking</li>
                      <li>• Implement A/B testing framework</li>
                      <li>• Create automated reporting dashboard</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
