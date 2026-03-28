import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"
import { HomeHeroSection } from "@/components/home-hero-section"
import { HomePricingSection } from "@/components/home-pricing-section"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"
import { Zap, Shield, BarChart3, Users, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <HomeHeroSection />

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why Choose DigitalManager?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  DigitalManager provides a comprehensive digital invoicing integration with the FBR PRAL portal and system. Whether you are a small retailer or a large enterprise, our solution scales with your business.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "1000+ businesses using DigitalManager",
                    "99% customer satisfaction rate",
                    "FBR officially integrated",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Easy to Use", desc: "Intuitive interface that requires minimal training for your team" },
                  { icon: Shield, title: "24/7 Support", desc: "Round-the-clock customer support for all your needs" },
                  { icon: Users, title: "Technical Support", desc: "Expert technical team to assist with integration and setup" },
                  { icon: BarChart3, title: "Operational Support", desc: "Dedicated support for daily operations and troubleshooting" }
                ].map((benefit, idx) => {
                  const Icon = benefit.icon
                  return (
                    <div key={idx} className="bg-card border border-border/40 rounded-lg p-6 text-center hover:border-primary/20 transition-all">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="text-sm font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                Everything You Need for FBR Compliance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive invoicing system handles all aspects of digital invoicing, from creation to FBR submission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Zap, 
                  title: "Invoice Management", 
                  desc: "Create, edit, and manage invoices with automatic FBR validation and submission.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invoives.PNG-1lrIJ3TXX96XNMyDVkGxxRhNidx3Wd.png"
                },
                { 
                  icon: Users, 
                  title: "Buyer Management", 
                  desc: "Maintain a complete database of your registered and unregistered buyers.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buyers.PNG-Vs6HgtB47kEEu1vD4BZxVPMipmdyrO.png"
                },
                { 
                  icon: BarChart3, 
                  title: "Detailed Reports", 
                  desc: "Generate comprehensive reports with data filters, grouping, and CSV export.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reports.PNG-Js7WtGo1VPo1nFrMfvEX0Vg1E20urj.png"
                },
                { 
                  icon: Shield, 
                  title: "FBR Compliant", 
                  desc: "Direct integration with FBR PRAL portal for seamless compliance.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/setting.PNG-9bjZKmKIBltvOu11T0ixh8ULWNIkP6.png"
                },
                { 
                  icon: Users, 
                  title: "User Management", 
                  desc: "Multi-user support with role-based access control and permissions.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Users.PNG-sUvQgnYessdfjZ8nMds9VILEM4MYbv.png"
                },
                { 
                  icon: Sparkles, 
                  title: "Scenario Testing", 
                  desc: "Pre-configured test scenarios to validate invoices before FBR submission.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scenerios.PNG-QUZOKBTlx7ByQOa6wewocVtm0tdQod.png"
                }
              ].map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <Dialog key={idx}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="w-full text-left border border-border/40 rounded-lg overflow-hidden hover:border-primary/20 transition-all hover:shadow-md group"
                      >
                        <div className="relative w-full h-32 bg-secondary/30 overflow-hidden">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="p-4">
                          <Icon className="h-6 w-6 text-primary mb-2" />
                          <h3 className="text-base font-semibold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-muted-foreground text-xs">{feature.desc}</p>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{feature.title}</DialogTitle>
                        <DialogDescription>{feature.desc}</DialogDescription>
                      </DialogHeader>
                      <div className="relative w-full h-[65vh] max-h-[65vh] rounded-lg border border-border overflow-hidden bg-secondary/30">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <HomePricingSection />

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-foreground text-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Simplify Your FBR Invoicing?
            </h2>
            <p className="text-xl text-background/80 mb-8">
              Join hundreds of Pakistani businesses using DigitalManager for seamless FBR compliance.
            </p>
            <Link href="/book-demo">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
