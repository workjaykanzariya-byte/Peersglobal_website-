'use client'

import * as React from 'react'
import { ctaClass } from '@/components/site/ui'

const INTENTS = [
  { id: 'membership', label: 'Membership Enquiry' },
  { id: 'leadership', label: 'Leadership / Circle Founder' },
  { id: 'sponsorship', label: 'Sponsorship / Partnership' },
  { id: 'media', label: 'Media / Press' },
  { id: 'support', label: 'Support' },
  { id: 'investor', label: 'Investor Relations' },
  { id: 'careers', label: 'Careers' },
  { id: 'explorer', label: 'Guest Seat Request' },
]

export function ContactForm({ defaultIntent }: { defaultIntent?: string }) {
  const [intent, setIntent] = React.useState(defaultIntent ?? 'membership')
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with real API/Zoho form integration
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center gap-4 py-16 text-center"
        role="alert"
        aria-live="polite"
      >
        <div
          className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground"
          style={{ borderRadius: 'var(--btn-radius)' }}
        >
          <svg viewBox="0 0 24 24" className="size-7 fill-none stroke-current stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="display text-2xl">Message received.</h3>
        <p className="text-muted-foreground">
          We'll be in touch within 2 working days. For urgent queries, call{' '}
          <a href="tel:+919316120831" className="text-primary hover:underline">
            +91 93161 20831
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Intent selector */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground">
          What are you reaching out about?
        </label>
        <div className="flex flex-wrap gap-2">
          {INTENTS.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => setIntent(it.id)}
              className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                intent === it.id
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-[var(--border)] text-muted-foreground hover:border-primary hover:text-primary'
              }`}
              style={{ borderRadius: 'var(--btn-radius)' }}
            >
              {it.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Dr. Pravin Parmar"
            className="rounded border border-[var(--border)] bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderRadius: 'var(--radius-md)' }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-company" className="text-sm font-medium text-foreground">
            Company / Business
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Your business name"
            className="rounded border border-[var(--border)] bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderRadius: 'var(--radius-md)' }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
            Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="rounded border border-[var(--border)] bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderRadius: 'var(--radius-md)' }}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="rounded border border-[var(--border)] bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderRadius: 'var(--radius-md)' }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-city" className="text-sm font-medium text-foreground">
          City
        </label>
        <input
          id="contact-city"
          name="city"
          type="text"
          placeholder="Ahmedabad, Mumbai, Bengaluru…"
          className="rounded border border-[var(--border)] bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ borderRadius: 'var(--radius-md)' }}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Tell us a bit about your business and what you're looking for…"
          className="rounded border border-[var(--border)] bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          style={{ borderRadius: 'var(--radius-md)' }}
        />
      </div>

      <input type="hidden" name="intent" value={intent} />

      <button
        type="submit"
        disabled={loading}
        className={ctaClass('primary', 'lg', 'self-start disabled:opacity-70')}
        style={{ borderRadius: 'var(--btn-radius)' }}
      >
        {loading ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
