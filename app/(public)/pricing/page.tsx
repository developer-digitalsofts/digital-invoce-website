import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PRICING_BILLING_LABEL, PRICING_PLANS } from "@/lib/pricing-plans"

export const metadata = {
  title: 'Pricing | DigitalManager',
  description: 'Simple and transparent pricing plans for DigitalManager'
}

export default function PricingPage() {
  const plans = PRICING_PLANS

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-8 sm:py-10 bg-linear-to-b from-primary/8 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Transparent Pricing
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
              Plans that scale with your business. All plans include FBR PRAL API integration.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-8 sm:py-10 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-3">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-lg border p-4 transition-all duration-300 ${
                    plan.featured
                      ? 'border-primary bg-primary/3 shadow-md md:scale-105'
                      : 'border-border/40 bg-card hover:border-primary/20'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}
                  <h3 className="text-sm font-semibold text-foreground mb-0.5">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{plan.description}</p>
                  <div className="text-xl font-bold text-foreground">{plan.price}</div>
                  <p className="text-xs text-muted-foreground mb-3">{PRICING_BILLING_LABEL}</p>
                  
                  <Link href={plan.href} className="block">
                    <Button size="sm" className="w-full mb-3 text-xs h-7" variant={plan.featured ? 'default' : 'outline'}>
                      {plan.cta}
                    </Button>
                  </Link>

                  <ul className="space-y-1">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-1.5 text-xs">
                        <span className="text-primary font-bold shrink-0">✓</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <p className="text-center text-xs text-muted-foreground mt-6">All plans are billed annually.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 sm:py-10 bg-secondary/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm sm:text-base font-semibold text-foreground mb-4 text-center">FAQs</h2>
            <div className="space-y-2">
              {[
                { q: "Can I change plans anytime?", a: "Yes, you can upgrade your plan at any time." },
                { q: "What payment methods do you accept?", a: "We accept bank transfers, mobile wallets and online payment systems commonly used in Pakistan." },
                { q: "Is there a long-term contract?", a: "No, all plans are with annual commitments." },
                { q: "Do you offer refund payment?", a: "Yes, we offer 50% refund payment on annual billing." }
              ].map((item, idx) => (
                <div key={idx} className="border border-border/40 rounded-lg p-3">
                  <h3 className="font-semibold text-foreground mb-0.5 text-xs">{item.q}</h3>
                  <p className="text-muted-foreground text-xs">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
