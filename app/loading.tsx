import { LogoAnimation } from '@/components/ui/logo-animation'

export default function RootLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 dark:bg-[#070D1D]/96 backdrop-blur-xl"
    >
      <div className="flex flex-col items-center gap-4">
        <LogoAnimation size="fullscreen" loop={true} autoplay={true} glow={true} />
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-slate-800 dark:text-slate-100">
            PEERS GLOBAL
          </span>
          <span className="text-[11px] text-slate-400">Loading...</span>
        </div>
      </div>
    </div>
  )
}
