import { SectionHead, Cta } from '@/components/site/ui'
import { VideoGrid } from '@/components/media/video-grid'
import { VIDEO_TESTIMONIALS } from '@/lib/data/video-testimonials'

export function VideoTestimonialsSection() {
  return (
    <section className="section border-b border-[var(--border)] bg-muted">
      <div className="shell flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="In their own words"
            title="Members, on camera, not on a testimonial slide"
            lede="Six promoters, six Circles, unscripted. Press play — every clip is the same person you'll read about in Stories & Insights."
          />
          <Cta href="/video-stories" variant="outline" size="sm" className="shrink-0">
            All video stories
          </Cta>
        </div>
        <VideoGrid items={VIDEO_TESTIMONIALS.slice(0, 6)} size="lg" columns={3} />
      </div>
    </section>
  )
}
