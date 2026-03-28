import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: 'Features | DigitalManager',
  description: 'Explore all features of DigitalManager FBR Digital Invoicing system'
}

type SliderItem = {
  title: string
  points?: string[]
}

const fbrPralSlides: SliderItem[] = [
  { title: "API token registration for Sandbox testing" },
  { title: "Required FBR business Scenarios testing" },
  { title: "API token registration for Production" },
  { title: "Invoice validation with PRAL" },
  { title: "Invoice submission" },
  { title: "FBR Invoice number QR Code printing on invoice" },
  { title: "FBR portal error handling" },
]

const automatedTaxSlides: SliderItem[] = [
  { title: "Multi-tax support" },
  { title: "Custom tax rules" },
  { title: "Tax bracket management" },
  { title: "Automatic Tax calculations" },
]

const buyerManagementSlides: SliderItem[] = [
  {
    title: "Buyer Registration",
    points: ["STN number", "NTN number", "Province", "Register/Non Register"],
  },
  { title: "Contact management" },
  { title: "Quick access" },
]

function FeatureSliderSection({
  title,
  description,
  image,
  slides,
}: {
  title: string
  description?: string
  image: string
  slides: SliderItem[]
}) {
  return (
    <section className="py-12 sm:py-14 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">{title}</h2>
          {description ? <p className="text-sm text-muted-foreground max-w-3xl">{description}</p> : null}
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/1">
                <div className="pb-4">
                  <div className="grid lg:grid-cols-2 gap-8 items-center bg-card border border-border/40 rounded-lg p-6 sm:p-8">
                    <div>
                      <div className="flex items-start gap-2 mb-4">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">{slide.title}</h3>
                      </div>

                      {slide.points?.length ? (
                        <ul className="space-y-2">
                          {slide.points.map((p, pidx) => (
                            <li key={pidx} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                              <span className="text-xs text-foreground">{p}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>

                    <div className="relative w-full h-64 rounded-lg border border-primary/15 overflow-hidden bg-secondary/30">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  )
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-12 sm:py-14 bg-linear-to-b from-primary/8 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Powerful Features for Modern Invoicing
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Everything you need to streamline your billing, ensure FBR compliance, and grow your business.
            </p>
          </div>
        </section>

        <FeatureSliderSection
          title="FBR PRAL Integration"
          description="Steps and capabilities for integrating with the FBR PRAL portal."
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/setting.PNG-9bjZKmKIBltvOu11T0ixh8ULWNIkP6.png"
          slides={fbrPralSlides}
        />

        <FeatureSliderSection
          title="Automated Tax Calculations"
          description="Automate your tax calculations with configurable rules and brackets."
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invoives.PNG-1lrIJ3TXX96XNMyDVkGxxRhNidx3Wd.png"
          slides={automatedTaxSlides}
        />

        <FeatureSliderSection
          title="Buyer Management"
          description="Manage buyer data with fast registration and quick access."
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buyers.PNG-Vs6HgtB47kEEu1vD4BZxVPMipmdyrO.png"
          slides={buyerManagementSlides}
        />

        {/* CTA */}
        <section className="py-10 sm:py-12 bg-secondary/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Ready to experience these features?
            </h2>
            <Link href="https://www.digitalinvoicingsoftware.com/">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-8">
                Try Live Demo <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
