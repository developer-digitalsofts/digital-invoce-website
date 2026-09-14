import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: 'Live Demo | DigitalManager',
  description: 'Access the live demo of DigitalManager FBR Digital Invoicing system'
}

export default function LiveDemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-10 sm:py-12 bg-gradient-to-b from-primary/8 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Experience FBR Digital Invoicing Live
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6">
              Explore the full-featured dashboard with live data. Login to test all functionality including invoice management, FBR compliance, and reporting.
            </p>
            <a href="https://www.digitalinvoicingsoftware.com/" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-8">
                Access Live Demo <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </a>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-10 sm:py-12 bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-6">Application Features</h2>
            
            <div className="space-y-8">
              {/* Dashboard */}
              <div className="bg-card border border-border/40 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border/40">
                  <h3 className="text-sm font-semibold text-foreground">Dashboard Overview</h3>
                  <p className="text-xs text-muted-foreground mt-1">Real-time invoice metrics, FBR status, and financial summary</p>
                </div>
                <div className="relative w-full h-64 sm:h-80 bg-secondary/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dasboard.PNG-A8S3400dRQRQ56jAhnTpNO9LogbhdN.png"
                    alt="Dashboard Overview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </div>

              {/* Invoice Management */}
              <div className="bg-card border border-border/40 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border/40">
                  <h3 className="text-sm font-semibold text-foreground">Invoice Management</h3>
                  <p className="text-xs text-muted-foreground mt-1">Create, manage, and track invoices with real-time validation and FBR submission status</p>
                </div>
                <div className="relative w-full h-64 sm:h-80 bg-secondary/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invoives.PNG-1lrIJ3TXX96XNMyDVkGxxRhNidx3Wd.png"
                    alt="Invoice Management"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </div>

              {/* Reports */}
              <div className="bg-card border border-border/40 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border/40">
                  <h3 className="text-sm font-semibold text-foreground">Comprehensive Reports</h3>
                  <p className="text-xs text-muted-foreground mt-1">Advanced filtering, grouping, and export options for detailed financial insights</p>
                </div>
                <div className="relative w-full h-64 sm:h-80 bg-secondary/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reports.PNG-Js7WtGo1VPo1nFrMfvEX0Vg1E20urj.png"
                    alt="Reports"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </div>

              {/* User Management */}
              <div className="bg-card border border-border/40 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border/40">
                  <h3 className="text-sm font-semibold text-foreground">User Management</h3>
                  <p className="text-xs text-muted-foreground mt-1">Control team access with role-based permissions and activity tracking</p>
                </div>
                <div className="relative w-full h-64 sm:h-80 bg-secondary/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Users.PNG-sUvQgnYessdfjZ8nMds9VILEM4MYbv.png"
                    alt="User Management"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </div>

              {/* Buyer Management */}
              <div className="bg-card border border-border/40 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border/40">
                  <h3 className="text-sm font-semibold text-foreground">Buyer Management</h3>
                  <p className="text-xs text-muted-foreground mt-1">Manage buyer database with registration types and location details</p>
                </div>
                <div className="relative w-full h-64 sm:h-80 bg-secondary/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buyers.PNG-Vs6HgtB47kEEu1vD4BZxVPMipmdyrO.png"
                    alt="Buyer Management"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </div>

              {/* Settings */}
              <div className="bg-card border border-border/40 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border/40">
                  <h3 className="text-sm font-semibold text-foreground">Company Settings</h3>
                  <p className="text-xs text-muted-foreground mt-1">Configure company details, FBR scenarios, tax settings, and API tokens</p>
                </div>
                <div className="relative w-full h-64 sm:h-80 bg-secondary/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/setting.PNG-9bjZKmKIBltvOu11T0ixh8ULWNIkP6.png"
                    alt="Settings"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </div>

              {/* Scenarios Testing */}
              <div className="bg-card border border-border/40 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-border/40">
                  <h3 className="text-sm font-semibold text-foreground">Scenarios Testing</h3>
                  <p className="text-xs text-muted-foreground mt-1">Pre-configured test scenarios for different invoice types and business scenarios</p>
                </div>
                <div className="relative w-full h-64 sm:h-80 bg-secondary/30">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scenerios.PNG-QUZOKBTlx7ByQOa6wewocVtm0tdQod.png"
                    alt="Scenarios Testing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 sm:py-12 bg-secondary/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Ready to Get Started?</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">Try the live demo now or book a personalized walkthrough with our team.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://www.digitalinvoicingsoftware.com/" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-8">
                  Access Live Demo <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </a>
              <Link href="/book-demo">
                <Button size="sm" variant="outline" className="text-xs h-8">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
