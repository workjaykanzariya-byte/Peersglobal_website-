import type { Metadata } from 'next'
import { Mail, MapPin, Phone, MessageSquare, Clock } from 'lucide-react'
import { ContactForm } from '@/components/site/contact-form'
import { SITE } from '@/lib/data/site'

export const metadata: Metadata = {
  title: 'Contact & Support | Peers Global',
  description:
    'Get in touch with Peers Global for membership enquiries, leadership applications, sponsorship, media, support, or investor relations.',
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>
}) {
  const { intent } = await searchParams

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* High-Contrast Luxury Hero Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-[#0b1b3a] text-white pt-16 pb-16 border-b border-[var(--border)] shadow-xl">
        <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 size-80 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

        <div className="shell relative z-10 flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-[#0b1b3a] bg-[#D4AF37] self-start shadow-md">
            <MessageSquare className="size-3.5" />
            DIRECT CONTACT & SUPPORT
          </div>

          <h1 className="display text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-snug tracking-tight drop-shadow-sm">
            Talk to Us.
          </h1>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">
            Every enquiry is answered by a real person within 2 working days. For urgent support or category availability, contact our team directly.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Details Section */}
      <section className="section py-16 border-b border-[var(--border)]">
        <div className="shell grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <ContactForm defaultIntent={intent} />
          
          <div className="flex flex-col gap-6">
            <div className="surface p-7 border border-[var(--border)] bg-card rounded-3xl shadow-sm flex flex-col gap-6">
              <h2 className="display text-xl font-bold text-foreground">Direct Contact Channels</h2>
              
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-mono font-bold text-muted-foreground uppercase">Phone Support (9 AM – 7 PM IST)</p>
                    <div className="flex flex-col">
                      {SITE.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-mono font-bold text-muted-foreground uppercase">Email Support</p>
                    <a href={`mailto:${SITE.email}`} className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                      {SITE.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-mono font-bold text-muted-foreground uppercase">Registered Headquarters</p>
                    <p className="text-sm font-bold text-foreground">{SITE.city}</p>
                    <p className="text-xs text-muted-foreground font-mono">CIN: {SITE.cin}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="surface p-7 border border-[var(--border)] bg-muted/40 rounded-3xl shadow-sm flex flex-col gap-4">
              <h3 className="display text-base font-bold text-foreground flex items-center gap-2">
                <Clock className="size-4 text-emerald-500" /> Guaranteed Response SLA
              </h3>
              <ul className="flex flex-col gap-2.5 text-xs">
                {[
                  { type: 'Membership Enquiries', time: '2 working days' },
                  { type: 'Leadership / CF Application', time: '3–5 working days' },
                  { type: 'Technical & Platform Support', time: '1 working day' },
                  { type: 'Media & Press Inquiries', time: '1–2 working days' },
                  { type: 'Investor Relations', time: '3 working days' },
                ].map((r) => (
                  <li key={r.type} className="flex items-center justify-between gap-4 py-1 border-b border-[var(--border)]/60 last:border-0">
                    <span className="text-muted-foreground">{r.type}</span>
                    <span className="font-mono font-bold text-foreground shrink-0">{r.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
