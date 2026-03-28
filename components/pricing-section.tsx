import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import { PRICING_BILLING_LABEL, PRICING_PLANS } from "@/lib/pricing-plans"

const plans = PRICING_PLANS

export function PricingSection() {
  return (
    <section id="pricing" className="bg-muted/30 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Choose the plan that fits your business needs. All plans include FBR compliance and PRAL API integration.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col border-border bg-card transition-shadow hover:shadow-lg ${
                plan.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                    Recommended
                  </span>
                </div>
              )}
              <CardHeader className={plan.featured ? "pt-8" : ""}>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">{PRICING_BILLING_LABEL}</span>
                </div>
                <CardDescription className="mt-3 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.href} className="mt-8">
                  <Button className="w-full" variant={plan.featured ? "default" : "outline"} size="lg">
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All prices are in PKR and exclude applicable taxes.
          </p>
        </div>
      </div>
    </section>
  )
}
