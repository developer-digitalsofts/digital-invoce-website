import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"

export const metadata = {
  title: 'Privacy Policy | DigitalManager',
  description: 'Privacy Policy for DigitalManager'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-invert max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  DigitalManager ("we," "us," "our," or "Company") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and otherwise process personal data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-3">We may collect the following types of information:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Personal identification information (name, email, phone number, etc.)</li>
                  <li>Company information (company name, registration number, tax ID, etc.)</li>
                  <li>Invoice and business transaction data</li>
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-3">We use the collected information for:</p>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Providing and improving our services</li>
                  <li>Processing invoices and transactions</li>
                  <li>FBR compliance and reporting</li>
                  <li>Customer support and communication</li>
                  <li>Analytics and performance monitoring</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal data 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground mt-2">
                  Email: support@digitalmanager.pk<br />
                  Phone: +92-21-3830-7777
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
