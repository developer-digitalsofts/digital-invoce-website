import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const features = [
  "Integration with FBR IRIS Portal",
  "Automatic tax calculation",
  "Multi-user access control",
  "Real-time invoice validation",
  "Comprehensive reporting",
  "Buyer database management",
]

export function HeroSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Choose DigitalManager?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              DigitalManager provides complete digital invoicing integration services with the FBR IRIS portal and PRAL system. Whether you are a small retailer or a large enterprise, our solution scales with your business.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              {/* Dashboard Header */}
              <div className="border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">FBR Invoice System</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Welcome back!</h3>
                  <p className="text-sm text-muted-foreground">{"Here's an overview of your invoice system"}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="rounded-lg border border-border bg-background p-3">
                    <p className="text-xs text-muted-foreground">Total Invoices</p>
                    <p className="text-2xl font-bold text-foreground">49</p>
                    <p className="text-xs text-muted-foreground">All invoices in the system</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-3">
                    <p className="text-xs text-muted-foreground">Total Draft Invoices</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                    <p className="text-xs text-muted-foreground">Draft invoices</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-3">
                    <p className="text-xs text-muted-foreground">Total Validated Invoices</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                    <p className="text-xs text-muted-foreground">Validated, pending submission</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background p-3">
                    <p className="text-xs text-muted-foreground">Total Submitted</p>
                    <p className="text-2xl font-bold text-primary">46</p>
                    <p className="text-xs text-muted-foreground">Successfully submitted to FBR</p>
                  </div>
                </div>

                {/* FBR Status */}
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted/50 p-3">
                  <div className="flex h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-foreground">FBR</span>
                  <span className="text-xs text-muted-foreground">FBR token configured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
