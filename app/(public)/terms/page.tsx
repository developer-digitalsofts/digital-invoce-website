import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"

export const metadata = {
  title: 'Terms of Service | DigitalManager',
  description: 'Terms of Service for DigitalManager'
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using DigitalManager, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-3">
                DigitalManager grants you a limited license to use our service subject to the following conditions:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>You must comply with all applicable laws and regulations</li>
                <li>You shall not transmit any harmful or malicious code</li>
                <li>You shall not attempt to gain unauthorized access</li>
                <li>You agree not to reproduce or redistribute our service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on DigitalManager are provided for general information only. 
                We do not warrant the accuracy, completeness, or usefulness of this information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall DigitalManager or our suppliers be liable for any damages 
                arising out of the use or inability to use the materials on our service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Modifications</h2>
              <p className="text-muted-foreground">
                We may revise these terms of service for our website at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of Pakistan, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: support@digitalmanager.pk<br />
                Phone: +92-21-3830-7777
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
