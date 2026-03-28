'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { CheckCircle } from 'lucide-react'

const carouselImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dasboard.PNG-A8S3400dRQRQ56jAhnTpNO9LogbhdN.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invoives.PNG-1lrIJ3TXX96XNMyDVkGxxRhNidx3Wd.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reports.PNG-Js7WtGo1VPo1nFrMfvEX0Vg1E20urj.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Users.PNG-sUvQgnYessdfjZ8nMds9VILEM4MYbv.png"
]

export function HomeHeroSection() {
  return (
    <section className="relative py-12 sm:py-16 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3">
              FBR Digital Invoicing

            </h1>
            <p className="text-lg sm:text-xl font-semibold text-primary mb-4">Made Simple</p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-lg leading-relaxed">
              Streamline your invoicing with our FBR-compliant system. Designed for Pakistani businesses to simplify billing and ensure tax compliance.
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Integration with FBR PRAL Portal",
                "Automated tax calculations",
                "Multi-user access control",
                "Real-time invoice validation",
                "Comprehensive reporting",
                "Buyer database management",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://www.digitalinvoicingsoftware.com/" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-9">
                  Live Demo
                </Button>
              </a>
              <Link href="/book-demo">
                <Button size="sm" variant="outline" className="text-xs h-9">
                  Get trial version
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - MacBook-style Screenshot Slider */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl border border-primary/20 bg-card shadow-lg overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs font-medium text-muted-foreground truncate">DigitalManager</span>
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary shrink-0">FBR</span>
                </div>
              </div>

              <div className="p-4">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {carouselImages.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden border border-border bg-secondary/20">
                          <Image
                            src={image}
                            alt={`MacBook screenshot ${idx + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={idx === 0}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>

              {/* Base */}
              <div className="h-3 bg-muted/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
