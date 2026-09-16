import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Peers Global — Home" className={cn('flex items-center', className)}>
      {onDark ? (
        /* Same Full Brand Logo for Dark Footer Background */
        <div className="relative h-14 w-56 sm:w-64 shrink-0">
          <Image
            src="/images/logo-full.png"
            alt="PeersGlobal — Community of Collaboration"
            fill
            className="object-contain object-left brightness-0 invert"
            sizes="256px"
            priority
          />
        </div>
      ) : (
        /* Full Brand Logo for Light Header Navbar */
        <div className="relative h-16 w-64 shrink-0">
          <Image
            src="/images/logo-full.png"
            alt="PeersGlobal — Community of Collaboration"
            fill
            className="object-contain object-left"
            sizes="256px"
            priority
          />
        </div>
      )}
    </Link>
  )
}
