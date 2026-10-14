import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="Peers Global — Home" className={cn('flex items-center', className)}>
      {onDark ? (
        /* Same Full Brand Logo for Dark Footer Background */
        <div className="relative h-10 w-40 sm:h-12 sm:w-48 lg:h-14 lg:w-56 shrink-0 transition-all">
          <Image
            src="/images/logo-full.png"
            alt="PeersGlobal — Community of Collaboration"
            fill
            className="object-contain object-left brightness-0 invert"
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 256px"
            priority
          />
        </div>
      ) : (
        /* Full Brand Logo for Light Header Navbar */
        <div className="relative h-9 w-36 sm:h-11 sm:w-44 md:h-13 md:w-52 lg:h-16 lg:w-64 shrink-0 transition-all">
          <Image
            src="/images/logo-full.png"
            alt="PeersGlobal — Community of Collaboration"
            fill
            className="object-contain object-left"
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 210px, 256px"
            priority
          />
        </div>
      )}
    </Link>
  )
}
