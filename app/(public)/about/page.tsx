import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"

export const metadata = {
  title: 'About | DigitalManager',
  description: 'Learn about DigitalManager company'
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-10 sm:py-12 bg-gradient-to-b from-primary/8 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              About DigitalManager
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Transforming digital invoicing for Pakistani businesses
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-12 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Our Mission</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                To simplify FBR compliance and digital invoicing for every business in Pakistan, 
                enabling them to focus on growth rather than bureaucratic challenges.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Our Story</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                DigitalManager was founded with a clear vision: to bridge the gap between Pakistani 
                businesses and FBR's digital invoicing requirements. We understand the challenges 
                businesses face in staying compliant while managing growth.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Our platform has helped hundreds of businesses, from small retailers to large enterprises, 
                streamline their invoicing processes and ensure FBR compliance.
              </p>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Why Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { title: "FBR Expert", desc: "Deep understanding of FBR requirements and regulations" },
                  { title: "Local Support", desc: "Pakistan-based support team that understands your market" },
                  { title: "Reliable", desc: "99.9% uptime SLA with dedicated support" },
                  { title: "Scalable", desc: "Solutions that grow with your business" },
                  { title: "Secure", desc: "Enterprise-grade security for your data" },
                  { title: "Affordable", desc: "Transparent pricing with no hidden costs" }
                ].map((item, idx) => (
                  <div key={idx} className="border border-border/40 rounded-lg p-3">
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Key Milestones</h2>
              <div className="space-y-3">
                {[
                  { year: "2020", event: "DigitalManager founded" },
                  { year: "2021", event: "FBR PRAL integration launched" },
                  { year: "2022", event: "500+ businesses onboarded" },
                  { year: "2023", event: "Enterprise features released" },
                  { year: "2024", event: "1000+ active users" }
                ].map((milestone, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-9 h-9 flex items-center justify-center font-semibold flex-shrink-0 text-xs">
                      {milestone.year.slice(-2)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{milestone.year}</p>
                      <p className="text-muted-foreground text-xs">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
