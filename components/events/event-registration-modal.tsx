'use client'

import React, { useState, useEffect } from 'react'
import { X, CheckCircle, Loader2, Calendar, MapPin, Building2, User, Mail, Phone, Briefcase, Map } from 'lucide-react'
import { PeerEvent, submitEventRegistration } from '@/lib/api/events'

interface EventRegistrationModalProps {
  event: PeerEvent | null
  isOpen: boolean
  onClose: () => void
}

export function EventRegistrationModal({ event, isOpen, onClose }: EventRegistrationModalProps) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company_name: '',
    city: '',
    designation: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    if (event) {
      // Derive default city from event location or circle state, fallback to 'Ahmedabad'
      const derivedCity =
        event.circle?.state_name ||
        (event.location && event.location.split(',')[0].trim()) ||
        'Ahmedabad'

      setFormData((prev) => ({
        ...prev,
        city: prev.city || derivedCity,
      }))
    }
  }, [event])

  if (!isOpen || !event) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      if (!event.event_id) {
        throw new Error('Event ID is missing.')
      }

      const response = await submitEventRegistration(
        event.event_id,
        event.occurrence_id,
        {
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.company_name,
          city: formData.city || 'Ahmedabad',
          designation: formData.designation || '',
          source: 'visitor_web',
        }
      )

      // Handle Paid Event Redirect
      if (response && response.payment_required && response.payment_url) {
        window.location.href = response.payment_url
        return
      }

      setIsSuccess(true)
      setSuccessMessage(response?.message || 'Registration Successful! A confirmation email has been sent.')
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please check your details and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    setError(null)
    setSuccessMessage(null)
    setFormData({
      full_name: '',
      email: '',
      phone: '',
      company_name: '',
      city: '',
      designation: '',
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border)] bg-background p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
          aria-label="Close dialog"
        >
          <X className="size-4.5" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center text-center py-6 gap-4 animate-in zoom-in-95 duration-200">
            <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
              <CheckCircle className="size-8" />
            </div>
            <h3 className="display text-2xl font-bold text-foreground">Registration Successful!</h3>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Thank you, <strong className="text-foreground">{formData.full_name}</strong>. {successMessage || 'A confirmation email has been sent to your inbox.'}
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 rounded-full bg-primary px-8 py-2.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors shadow-lg shadow-blue-600/30"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {/* Modal Header */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                {event.event_type || 'Circle Meeting'}
              </span>
              <h2 className="display text-2xl text-foreground font-extrabold mt-1">{event.title}</h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3.5 text-primary" />
                  {event.formatted_start_at || event.start_at}
                </span>
                <span className="flex items-center gap-1 font-sans">
                  <MapPin className="size-3.5 text-red-500" />
                  {event.location || 'Online / Virtual'}
                </span>
              </div>
            </div>

            {/* Error Banner */}
            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-600 dark:text-red-400 leading-relaxed">
                <strong>Error:</strong> {error}
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full rounded-xl border border-[var(--border)] bg-muted/30 pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-[var(--border)] bg-muted/30 pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-[var(--border)] bg-muted/30 pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Company & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      placeholder="Your Organization"
                      value={formData.company_name}
                      onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                      className="w-full rounded-xl border border-[var(--border)] bg-muted/30 pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Map className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmedabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-[var(--border)] bg-muted/30 pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Designation (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Designation / Role <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="e.g. Founder, CEO, Director"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full rounded-xl border border-[var(--border)] bg-muted/30 pl-9 pr-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-3 border-t border-[var(--border)] mt-1">
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-white hover:bg-blue-600 disabled:opacity-50 transition-all shadow-md shadow-blue-600/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-3.5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Confirm Registration'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
