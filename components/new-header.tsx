"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-sm text-foreground">
            <Image
              src="/images/dm-logo.png"
              alt="DigitalManager Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="hidden sm:inline text-sm">DigitalManager</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/demo-videos" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              Demo Videos
            </Link>
            <Link href="/pricing" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-xs font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-xs h-8">
                Log In
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-8">
                Get trial version
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-3 space-y-1">
            <Link href="/" className="block px-2 py-1.5 text-xs rounded hover:bg-secondary">Home</Link>
            <Link href="/features" className="block px-2 py-1.5 text-xs rounded hover:bg-secondary">Features</Link>
            <Link href="/demo-videos" className="block px-2 py-1.5 text-xs rounded hover:bg-secondary">Demo Videos</Link>
            <Link href="/pricing" className="block px-2 py-1.5 text-xs rounded hover:bg-secondary">Pricing</Link>
            <Link href="/contact" className="block px-2 py-1.5 text-xs rounded hover:bg-secondary">Contact</Link>
            <div className="flex flex-col gap-1.5 pt-2">
              <Link href="/login">
                <Button variant="outline" size="sm" className="w-full text-xs h-8">
                  Log In
                </Button>
              </Link>
              <Link href="/book-demo">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-xs h-8">
                  Get trial version
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
