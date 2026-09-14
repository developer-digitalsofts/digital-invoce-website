"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 font-semibold text-sm mb-3">
              <Image
                src="/images/dm-logo.png"
                alt="DigitalManager Logo"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span>DigitalManager</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              FBR compliant digital invoicing for Pakistani businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-xs">Product</h3>
            <ul className="space-y-1.5">
              <li><Link href="/features" className="text-xs text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="/pricing" className="text-xs text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="/demo-videos" className="text-xs text-muted-foreground hover:text-foreground">Demo Videos</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-xs">Company</h3>
            <ul className="space-y-1.5">
              <li><Link href="/about" className="text-xs text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="/blog" className="text-xs text-muted-foreground hover:text-foreground">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-xs">Support</h3>
            <ul className="space-y-1.5">
              <li><Link href="/docs" className="text-xs text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link href="/faq" className="text-xs text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/live-demo" className="text-xs text-muted-foreground hover:text-foreground">Live Demo</Link></li>
              <li><Link href="/book-demo" className="text-xs text-muted-foreground hover:text-foreground">Get trial version</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-xs">Legal</h3>
            <ul className="space-y-1.5">
              <li><Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-foreground">
              © {currentYear} DigitalManager. All rights reserved.
            </p>
            <div className="flex gap-3">
              <a href="mailto:support@digitalmanager.pk" className="text-xs text-muted-foreground hover:text-foreground">
                support@digitalmanager.pk
              </a>
              <a href="tel:+92-21-3830-7777" className="text-xs text-muted-foreground hover:text-foreground">
                +92-21-3830-7777
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
