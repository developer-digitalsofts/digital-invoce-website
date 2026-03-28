export type PricingPlan = {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  href: string
  featured?: boolean
}

export const PRICING_BILLING_LABEL = "/month, billed annually"

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    price: "PKR 1,000",
    description: "Perfect for small businesses just getting started with digital invoicing",
    features: [
      "Includes FBR portal Integration",
      "Up to 100 invoices/month",
      "Basic reporting",
      "Whatsapp support",
      "1 user account",
    ],
    cta: "Get Started",
    href: "/book-demo",
  },
  {
    name: "Standard",
    price: "PKR 2,000",
    description: "Ideal for those medium businesses that have limited monthly invoices",
    features: [
      "Includes FBR portal Integration",
      "Up to 300 invoices/month",
      "Advanced reporting",
      "Priority whatsapp & phone support",
      "5 user accounts",
      "Custom invoice templates",
      "Export to CSV/PDF",
    ],
    cta: "Get Started",
    href: "/book-demo",
    featured: true,
  },
  {
    name: "Advanced Reporting",
    price: "PKR 5,000",
    description: "For large enterprises requiring unlimited invoicing and premium support",
    features: [
      "Includes FBR portal Integration",
      "AI powered PDF invoice import option",
      "Excel import option",
      "Unlimited invoices",
      "Custom reports & dashboards",
      "24/7 dedicated support",
      "Unlimited user accounts",
      "Custom invoice templates",
      "API access",
      "Enterprise training",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
]
