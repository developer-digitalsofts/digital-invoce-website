'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function BookDemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        businessType: formData.get('businessType'),
        invoiceCount: formData.get('invoiceCount'),
        datetime: formData.get('datetime'),
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
        setStatusMessage('Thank you! Your demo request has been sent. Opening your email client...')
        
        // Open mailto link if provided
        if (result.mailtoLink) {
          window.location.href = result.mailtoLink
        }

        // Reset form
        e.currentTarget.reset()
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.error || 'Failed to send request. Please try again.')
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
    <form className="space-y-4 bg-card rounded-lg border border-border/40 p-6" onSubmit={handleSubmit}>
      <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Schedule Your Demo</h2>
      
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-foreground block mb-1.5">
            Full Name *
          </label>
          <Input placeholder="Your name" className="h-8 text-xs" name="name" required />
        </div>
        <div>
          <label className="text-xs font-medium text-foreground block mb-1.5">
            Company Name *
          </label>
          <Input placeholder="Your company" className="h-8 text-xs" name="company" required />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-foreground block mb-1.5">
            Email *
          </label>
          <Input type="email" placeholder="your@email.com" className="h-8 text-xs" name="email" required />
        </div>
        <div>
          <label className="text-xs font-medium text-foreground block mb-1.5">
            Phone Number *
          </label>
          <Input type="tel" placeholder="+92-300-1234567" className="h-8 text-xs" name="phone" required />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-foreground block mb-1.5">
          Business Type *
        </label>
        <select className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring h-8" name="businessType" required>
          <option value="">Select business type</option>
          <option value="retail">Retail</option>
          <option value="wholesale">Wholesale</option>
          <option value="ecommerce">E-Commerce</option>
          <option value="services">Services</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-medium text-foreground block mb-1.5">
          Number of Monthly Invoices *
        </label>
        <select className="w-full rounded-md border border-input bg-background px-3 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring h-8" name="invoiceCount" required>
          <option value="">Select range</option>
          <option value="<100">Less than 100</option>
          <option value="100-500">100-500</option>
          <option value="500-1000">500-1000</option>
          <option value=">1000">More than 1000</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-medium text-foreground block mb-1.5">
          Preferred Demo Date & Time
        </label>
        <Input type="datetime-local" className="h-8 text-xs" name="datetime" />
      </div>

      <div>
        <label className="text-xs font-medium text-foreground block mb-1.5">
          Message (Optional)
        </label>
        <Textarea placeholder="Tell us about your invoicing needs..." rows={3} className="text-xs py-2 px-3" name="message" />
      </div>

      <Button type="submit" size="sm" className="w-full bg-primary hover:bg-primary/90 text-xs h-8" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Book Demo'}
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

      <p className="text-xs text-muted-foreground text-center">
        We'll respond within 24 hours with a confirmation and meeting link.
      </p>
    </form>
  )
}
