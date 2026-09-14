'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { useState, useEffect } from "react"

const industries = [
  "Manufacturing",
  "Retail",
  "Wholesale",
  "Services",
  "Import/Export",
]

const carouselImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dasboard.PNG-A8S3400dRQRQ56jAhnTpNO9LogbhdN.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invoives.PNG-1lrIJ3TXX96XNMyDVkGxxRhNidx3Wd.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reports.PNG-Js7WtGo1VPo1nFrMfvEX0Vg1E20urj.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Users.PNG-sUvQgnYessdfjZ8nMds9VILEM4MYbv.png"
]

export function FBRHeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Version Badge */}
            <div className="mb-6 inline-flex items-center gap-2 text-sm">
              <span className="text-primary">+ Version 12.0 Now Available</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              FBR Digital Invoicing
              <br />
              <span className="text-primary">Made Simple</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8">
              Complete digital invoicing integration software for B2B and B2C businesses in Pakistan. Stay FBR compliant with ease.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-4">
              <a href="https://www.digitalinvoicingsoftware.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 px-8">
                  Get Started Free
                </Button>
              </a>
              <Button variant="outline" size="lg" className="px-8">
                View Demo
              </Button>
            </div>

            {/* Trust Text */}
            <p className="mt-12 text-sm text-muted-foreground">
              Trusted by businesses across Pakistan for FBR compliance
            </p>

            {/* Industry Tags */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              {industries.map((industry) => (
                <span key={industry} className="hover:text-foreground transition-colors cursor-default">
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="relative">
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
                    <div className="relative h-96 rounded-xl overflow-hidden border border-primary/20 shadow-lg">
                      <Image
                        src={image}
                        alt={`Dashboard view ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        priority={idx === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>

            {/* Slide Indicators */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === current ? 'bg-primary w-6' : 'bg-border w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
