import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { PRICING_BILLING_LABEL, PRICING_PLANS } from '@/lib/pricing-plans'

export function HomePricingSection() {
  const plans = PRICING_PLANS

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include FBR PRAL API integration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-lg border transition-all duration-300 ${
                plan.featured
                  ? 'border-primary bg-primary/3 shadow-md scale-105 md:scale-100'
                  : 'border-border/40 bg-card hover:border-primary/20'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-0.5 rounded-full">
                    Recommended
                  </span>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{plan.description}</p>
                
                <div className="mb-5">
                  <div className="text-2xl font-bold text-foreground mb-1">{plan.price}</div>
                  <p className="text-xs text-muted-foreground">{PRICING_BILLING_LABEL}</p>
                </div>

                <Link href={plan.href} className="w-full block mb-6">
                  <Button
                    className="w-full text-xs h-8"
                    variant={plan.featured ? 'default' : 'outline'}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </Link>

                <div className="space-y-2">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">All plans are billed annually.</p>
      </div>
    </section>
  )
}
