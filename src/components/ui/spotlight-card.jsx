import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

export default function SpotlightCard({
  children,
  className = '',
  glowColor = '14, 165, 233',
  borderColor = 'rgb(226, 232, 240)',
  radius = '1.25rem',
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const spotlightStyle = useMemo(
    () => ({
      background: `radial-gradient(260px circle at ${mouse.x}px ${mouse.y}px, rgba(${glowColor}, 0.25), transparent 65%)`,
      opacity: active ? 1 : 0,
      borderRadius: radius,
    }),
    [mouse, glowColor, active, radius]
  )

  const borderStyle = useMemo(
    () => ({
      borderRadius: radius,
      borderColor,
    }),
    [radius, borderColor]
  )

  return (
    <div
      className={cn('group relative overflow-hidden border bg-white/90 shadow-sm transition duration-300', className)}
      style={borderStyle}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 transition-opacity duration-300" style={spotlightStyle} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
