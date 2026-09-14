'use client'

import { Header } from "@/components/new-header"
import { Footer } from "@/components/new-footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formEl = e.currentTarget
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData(formEl)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage('Thank you! Your message has been sent. Opening your email client...')

        // Reset form before opening mail client (avoids null currentTarget issues)
        formEl.reset()
        
        // Open mailto link if provided
        if (result.mailtoLink) {
          window.location.href = result.mailtoLink
        }
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setStatusMessage('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-8 sm:py-10 bg-gradient-to-b from-primary/8 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Get in Touch
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-8 sm:py-10 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form className="space-y-3 bg-card rounded-lg border border-border/40 p-4" onSubmit={handleSubmit}>
                  <h2 className="text-sm font-semibold text-foreground mb-3">Send us a Message</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Name</label>
                      <Input placeholder="Your name" className="h-7 text-xs" name="name" required />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Email</label>
                      <Input type="email" placeholder="your@email.com" className="h-7 text-xs" name="email" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1">Subject</label>
                    <Input placeholder="How can we help?" className="h-7 text-xs" name="subject" required />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1">Message</label>
                    <Textarea placeholder="Your message..." rows={3} className="text-xs py-1.5 px-2" name="message" required />
                  </div>

                  <Button type="submit" size="sm" className="w-full bg-primary hover:bg-primary/90 text-xs h-7" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 text-xs p-2 rounded">
                      {statusMessage}
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 text-xs p-2 rounded">
                      {statusMessage}
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="bg-primary/5 rounded-lg border border-primary/20 p-3">
                  <div className="flex gap-2">
                    <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground mb-0.5 text-xs">Email</h3>
                      <div className="space-y-1">
                        <a href="mailto:shahid@digitalsofts.com" className="text-xs text-primary hover:underline break-all block">
                          shahid@digitalsofts.com
                        </a>
                        <a href="mailto:imran.digitalsoft@gmail.com" className="text-xs text-primary hover:underline break-all block">
                          imran.digitalsoft@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg border border-border/40 p-3">
                  <div className="flex gap-2">
                    <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-0.5 text-xs">Phone</h3>
                      <a href="tel:+92-21-3830-7777" className="text-xs text-primary hover:underline">
                        +92-21-3830-7777
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg border border-border/40 p-3">
                  <div className="flex gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground mb-0.5 text-xs">Office</h3>
                      <p className="text-xs text-muted-foreground leading-tight">
                        Office # 234, 2nd Floor,<br />
                        Al-Zahar Shopping Center,<br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg border border-primary/20 p-3">
                  <h3 className="font-semibold text-foreground mb-1.5 text-xs">Business Hours</h3>
                  <ul className="space-y-0.5 text-xs text-muted-foreground">
                    <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                    <li>Saturday: 10:00 AM - 2:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
