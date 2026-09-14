import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-foreground py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            Ready to Simplify Your FBR Invoicing?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-background/70">
            Join hundreds of Pakistani businesses using DigitalManager for seamless FBR compliance.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/20 bg-transparent px-8 text-background hover:bg-background/10"
            >
              View Innovative Page
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
