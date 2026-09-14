import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BookDemoForm from "@/components/book-demo-form"

export const metadata = {
  title: 'Book a Demo | DigitalManager',
  description: 'Schedule a personalized demo with our sales team'
}

export default function BookDemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-10 sm:py-12 bg-gradient-to-b from-primary/8 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Book a Personal Demo
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Let our team show you how DigitalManager can transform your invoicing process
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-10 sm:py-12 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Form */}
              <div className="lg:col-span-2">
                <BookDemoForm />
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-lg border border-primary/20 p-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">What to Expect</h3>
                  <ul className="space-y-1.5 text-xs text-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>30-60 minute personalized demo</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Live walkthrough of all features</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Answer your specific questions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Pricing discussion</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span>Next steps planning</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg border border-border/40 p-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Contact Info</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    <strong>Email:</strong><br />
                    <a href="mailto:shahid@digitalsofts.com" className="text-primary hover:underline">shahid@digitalsofts.com</a><br />
                    <a href="mailto:imran.digitalsoft@gmail.com" className="text-primary hover:underline">imran.digitalsoft@gmail.com</a>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Phone:</strong><br />
                    +92-21-3830-7777
                  </p>
                </div>

                <div className="bg-card rounded-lg border border-border/40 p-4">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">Quick Start</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Want to explore first?
                  </p>
                  <a href="https://www.digitalinvoicingsoftware.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full text-xs h-8">
                      Try Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
