import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  })

  const percent = useTransform(progress, (v) => `${Math.round(v * 100)}%`)

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[60]">
      <div className="relative grid h-16 w-16 place-items-center rounded-full bg-white/90 shadow-lg ring-1 ring-slate-200 backdrop-blur">
        <svg className="absolute inset-0 h-16 w-16 -rotate-90">
          <circle cx="32" cy="32" r="26" fill="none" stroke="rgb(226 232 240)" strokeWidth="4" />
          <motion.circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke="rgb(14 165 233)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{
              pathLength: progress,
            }}
          />
        </svg>
        <motion.span className="text-xs font-semibold text-slate-700">{percent}</motion.span>
      </div>
    </div>
  )
}
