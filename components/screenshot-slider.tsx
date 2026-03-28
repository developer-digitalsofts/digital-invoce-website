"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const screenshots = [
  {
    id: 1,
    title: "Dashboard Overview",
    description: "Get a complete overview of your invoices, FBR status, PKR financial summary, and recent activity at a glance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7bzRvPnbxGzAdaBLtYaNIJ2qj2k8fA.png",
  },
  {
    id: 2,
    title: "Invoice Management",
    description: "Create, edit, and manage invoices with automatic FBR validation and submission.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7bzRvPnbxGzAdaBLtYaNIJ2qj2k8fA.png",
  },
  {
    id: 3,
    title: "Buyer Management",
    description: "Maintain a complete database of your registered and unregistered buyers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7bzRvPnbxGzAdaBLtYaNIJ2qj2k8fA.png",
  },
  {
    id: 4,
    title: "Detailed Reports",
    description: "Generate comprehensive reports with date filters, grouping, and CSV export.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7bzRvPnbxGzAdaBLtYaNIJ2qj2k8fA.png",
  },
  {
    id: 5,
    title: "FBR Compliance",
    description: "Direct integration with FBR IRIS and PRAL portal for seamless compliance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7bzRvPnbxGzAdaBLtYaNIJ2qj2k8fA.png",
  },
  {
    id: 6,
    title: "User Management",
    description: "Multi-user support with role-based access control and sandbox environments.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7bzRvPnbxGzAdaBLtYaNIJ2qj2k8fA.png",
  },
]

export function ScreenshotSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="bg-background py-16 sm:py-20" suppressHydrationWarning>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See It In Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our intuitive interface designed for ease of use and maximum productivity.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">FBR Invoice System</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  Real Sandbox
                </span>
              </div>
            </div>

            {/* Screenshot Display */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
              <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {screenshots.map((screenshot) => (
                  <div
                    key={screenshot.id}
                    className="h-full w-full flex-shrink-0"
                  >
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 shadow-lg hover:bg-card"
            onClick={goToPrevious}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 shadow-lg hover:bg-card"
            onClick={goToNext}
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Slide Info */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-foreground">
            {screenshots[currentIndex].title}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            {screenshots[currentIndex].description}
          </p>
        </div>

        {/* Dots Navigation */}
        <div className="mt-6 flex items-center justify-center gap-2" suppressHydrationWarning>
          <div className="flex items-center gap-1">
            <div className="h-1 w-6 rounded-full bg-primary" />
            <div className="h-1 w-1 rounded-full bg-primary/30" />
          </div>
          <div className="flex gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  mounted && index === currentIndex
                    ? "bg-primary w-4"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="mt-4 text-center text-sm text-muted-foreground" suppressHydrationWarning>
          {mounted ? `${currentIndex + 1} / ${screenshots.length}` : `1 / ${screenshots.length}`}
        </div>

        {/* View All Link */}
        <div className="mt-4 text-center">
          <Button variant="link" className="gap-1 text-primary">
            View All Screenshots
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
