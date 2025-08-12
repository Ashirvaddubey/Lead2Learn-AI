import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, MessageSquare, Linkedin, Phone } from "lucide-react"

export function CopywritingExamples() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8">AI-Generated Copy Examples</h2>

      <Tabs defaultValue="email" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="sms" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            SMS
          </TabsTrigger>
          <TabsTrigger value="whatsapp" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </TabsTrigger>
          <TabsTrigger value="linkedin" className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>High-Intent Lead (Visited pricing page)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">Subject: [Name], ready to 10x your career in 12 months?</p>
                  <div className="mt-3 text-sm space-y-2">
                    <p>Hi [Name],</p>
                    <p>I noticed you were checking out our Data Science Career Program. Smart move!</p>
                    <p>
                      Here's what caught my attention: You spent 4 minutes on our success stories page. That tells me
                      you're serious about making this career switch work.
                    </p>
                    <p>
                      <strong>Quick question:</strong> What's the #1 thing holding you back from starting your data
                      science journey?
                    </p>
                    <p>
                      I ask because tomorrow's masterclass addresses the top 3 concerns I hear from career switchers
                      like you:
                    </p>
                    <ul className="ml-4 space-y-1">
                      <li>• "I don't have a technical background"</li>
                      <li>• "How do I compete with CS graduates?"</li>
                      <li>• "Will companies actually hire career switchers?"</li>
                    </ul>
                    <p>
                      Want to get these answered? <strong>Join us tomorrow at 7 PM.</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Low-Intent Lead (Just browsed blog)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">Subject: That article you read + a free resource</p>
                  <div className="mt-3 text-sm space-y-2">
                    <p>Hi [Name],</p>
                    <p>Thanks for reading "5 Data Science Projects That Actually Get You Hired" on our blog!</p>
                    <p>Since you're interested in practical projects, I thought you'd love this:</p>
                    <p>
                      <strong>🎁 FREE Download:</strong> "The Complete Data Science Portfolio Template" (used by 500+
                      successful career switchers)
                    </p>
                    <p>It includes:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• 3 project templates with code</li>
                      <li>• How to present your work to recruiters</li>
                      <li>• Common mistakes that kill your chances</li>
                    </ul>
                    <p>No strings attached - just click here to download.</p>
                    <p>
                      P.S. If you want to see these projects in action, I'm doing a live walkthrough tomorrow at 7 PM.
                      Interested?
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sms" className="mt-6">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>1 Hour Before Class</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    🚨 [Name], your Data Science masterclass starts in 1 hour!
                    <br />
                    <br />
                    Join link: [link]
                    <br />
                    <br />
                    347 people already joined. Don't miss out!
                    <br />
                    <br />
                    Reply STOP to opt out.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Post-Registration Follow-up</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm">
                    🎉 You're in, [Name]!
                    <br />
                    <br />
                    Tomorrow 7 PM: Data Science Career Switch Masterclass
                    <br />
                    <br />
                    Quick prep: Think of 1 career goal you want to achieve in 2025. We'll show you the roadmap!
                    <br />
                    <br />
                    Calendar reminder: [link]
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="whatsapp" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Touch Follow-up</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm space-y-2">
                  <p>Hey [Name]! 👋</p>
                  <p>
                    This is Alex from Scaler. I saw you registered for tomorrow's Data Science masterclass - awesome!
                  </p>
                  <p>
                    Quick question: What's your current role? I like to personalize the session based on who's attending
                    🎯
                  </p>
                  <p>Also, here's a sneak peek of what we'll cover:</p>
                  <p>
                    📊 The 3-step career transition framework
                    <br />💰 Salary negotiation tactics (avg increase: ₹12L)
                    <br />🚀 Live portfolio review
                  </p>
                  <p>See you tomorrow at 7 PM! 🔥</p>
                  <p>
                    <em>This is a one-time message. Reply STOP to opt out.</em>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="linkedin" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Connection Request + Invitation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm space-y-3">
                  <p>
                    <strong>Connection Request:</strong>
                  </p>
                  <p>
                    "Hi [Name], I noticed you're in [Current Role] at [Company]. I'm hosting a free masterclass on Data
                    Science career transitions tomorrow - thought it might interest you given your background in
                    [relevant skill]. Would love to connect!"
                  </p>

                  <hr className="my-4" />

                  <p>
                    <strong>Follow-up Message (after connection):</strong>
                  </p>
                  <p>"Thanks for connecting, [Name]! 🙌</p>
                  <p>
                    I looked at your profile - your experience in [specific skill] would actually translate really well
                    to data science. Many of our most successful students come from similar backgrounds.
                  </p>
                  <p>
                    Tomorrow's masterclass covers exactly how to leverage your existing skills for a data science
                    transition. Plus, I'll be doing live portfolio reviews.
                  </p>
                  <p>Interested? It's completely free: [link]</p>
                  <p>Either way, happy to be connected! 🚀"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
