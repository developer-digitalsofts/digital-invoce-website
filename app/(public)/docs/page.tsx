import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"

export const metadata = {
  title: 'Documentation | DigitalManager',
  description: 'Help and documentation for DigitalManager'
}

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Documentation & Help
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to get started with DigitalManager
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Getting Started", desc: "Learn the basics and set up your account" },
                { title: "Creating Invoices", desc: "Step-by-step guide to create and manage invoices" },
                { title: "FBR Integration", desc: "Understanding FBR PRAL integration and requirements" },
                { title: "User Management", desc: "Add team members and manage permissions" },
                { title: "Reports & Analytics", desc: "Generate and export detailed reports" },
                { title: "API Documentation", desc: "Integrate DigitalManager with your systems" },
                { title: "Tax Configuration", desc: "Set up tax rates and calculations" },
                { title: "Troubleshooting", desc: "Common issues and solutions" }
              ].map((doc, idx) => (
                <div key={idx} className="border border-border/40 rounded-lg p-6 hover:border-primary/20 transition-colors cursor-pointer group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{doc.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 rounded-lg border border-primary/20 p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Can't find what you're looking for?</h3>
              <p className="text-muted-foreground mb-6">
                Contact our support team for personalized assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:support@digitalmanager.pk" className="text-primary font-semibold hover:underline">
                  Email Support
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="tel:+92-21-3830-7777" className="text-primary font-semibold hover:underline">
                  +92-21-3830-7777
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
