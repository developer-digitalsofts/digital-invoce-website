import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"

export const metadata = {
  title: 'Blog | DigitalManager',
  description: 'Blog and news from DigitalManager'
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog & News
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest from DigitalManager
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Understanding FBR Digital Invoicing",
                  date: "March 15, 2024",
                  excerpt: "A comprehensive guide to FBR digital invoicing requirements and how to stay compliant."
                },
                {
                  title: "Why Your Business Needs Digital Invoicing",
                  date: "March 10, 2024",
                  excerpt: "Explore the benefits of switching to digital invoicing and how it improves your business operations."
                },
                {
                  title: "DigitalManager 2.0 Released",
                  date: "March 1, 2024",
                  excerpt: "Check out the new features and improvements in DigitalManager version 2.0."
                },
                {
                  title: "Tax Compliance Made Easy",
                  date: "February 25, 2024",
                  excerpt: "Learn how DigitalManager helps you automate tax calculations and ensure compliance."
                }
              ].map((post, idx) => (
                <div key={idx} className="border border-border/40 rounded-lg overflow-hidden hover:border-primary/20 transition-colors cursor-pointer group">
                  <div className="bg-primary/5 aspect-video"></div>
                  <div className="p-6">
                    <p className="text-xs font-medium text-primary mb-2">{post.date}</p>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
