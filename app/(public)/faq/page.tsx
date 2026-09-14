import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"

export const metadata = {
  title: 'FAQ | DigitalManager',
  description: 'Frequently asked questions about DigitalManager'
}

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-10 sm:py-12 bg-gradient-to-b from-primary/8 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Find answers to common questions about DigitalManager
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-12 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-3">
            {[
              {
                q: "What is DigitalManager?",
                a: "DigitalManager is a comprehensive digital invoicing system that helps Pakistani businesses stay FBR compliant while managing their invoicing process efficiently."
              },
              {
                q: "Is DigitalManager compliant with FBR requirements?",
                a: "Yes, DigitalManager is directly integrated with FBR's PRAL system and ensures full compliance with all digital invoicing requirements."
              },
              {
                q: "Can I use DigitalManager for my small business?",
                a: "Absolutely! DigitalManager is designed for businesses of all sizes, from small retailers to large enterprises. We offer plans starting from PKR 5,000/month."
              },
              {
                q: "What if I don't meet the minimum invoice volume for a plan?",
                a: "You can choose the Basic plan even if you send fewer invoices. You'll only be charged the monthly subscription fee regardless of invoice volume."
              },
              {
                q: "Can I change my plan later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, credit cards, and online payment systems commonly used in Pakistan."
              },
              {
                q: "Is there a contract term?",
                a: "No, all our plans are month-to-month with no long-term contracts. You can cancel anytime."
              },
              {
                q: "Do you offer technical support?",
                a: "Yes, we offer email support for Basic plan and priority phone & email support for Standard and Premium plans."
              },
              {
                q: "How secure is my data?",
                a: "We use enterprise-grade security with SSL encryption, regular backups, and comply with international data protection standards."
              },
              {
                q: "Can I integrate DigitalManager with my other systems?",
                a: "Yes, our Premium plan includes API access for custom integrations with your existing systems."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-border/40 rounded-lg p-4 hover:border-primary/20 transition-colors">
                <h3 className="font-semibold text-foreground mb-1.5 text-sm">{faq.q}</h3>
                <p className="text-muted-foreground text-xs">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
