import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  FileText, 
  Users, 
  BarChart3, 
  Shield, 
  UserCog, 
  RefreshCw 
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Invoice Management",
    description: "Create, edit, and manage invoices with automatic FBR validation and submission.",
  },
  {
    icon: Users,
    title: "Buyer Management",
    description: "Maintain a complete database of your registered and unregistered buyers.",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Generate comprehensive reports with date filters, grouping, and CSV export.",
  },
  {
    icon: Shield,
    title: "FBR Compliant",
    description: "Direct integration with FBR IRIS and PRAL portal for seamless compliance.",
  },
  {
    icon: UserCog,
    title: "User Management",
    description: "Multi-user support with role-based access control and sandbox environments.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description: "Instant synchronization with FBR for invoice validation and submission.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-card py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need for FBR Compliance
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our comprehensive invoicing system handles all aspects of digital invoicing, from creation to FBR submission.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-background transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
