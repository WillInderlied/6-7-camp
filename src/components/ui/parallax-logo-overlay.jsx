import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ParallaxLogoOverlay() {
  const { scrollY } = useScroll()
  const [logoSrc, setLogoSrc] = useState('/camp-logo.png')

  // Hero-parallax inspired behavior: logo subtly zooms out and blurs on scroll.
  const y = useTransform(scrollY, [0, 900], [0, 120])
  const scale = useTransform(scrollY, [0, 900], [1.08, 0.88])
  const blur = useTransform(scrollY, [0, 900], [0.45, 8])
  const opacity = useTransform(scrollY, [0, 350, 900], [0.36, 0.24, 0.08])
  const filter = useMotionTemplate`blur(${blur}px) saturate(1.2) drop-shadow(0 0 28px rgba(56,189,248,0.35))`

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = '/camp-logo.png'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = frame.data

      // Remove near-black pixels with a soft alpha ramp to keep anti-aliased
      // edges smooth instead of jagged after keying out the background.
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i]
        const g = pixels[i + 1]
        const b = pixels[i + 2]
        const brightness = (r + g + b) / 3
        const pixelIndex = i / 4
        const x = pixelIndex % canvas.width
        const y = Math.floor(pixelIndex / canvas.width)

        // Remove the bottom-right generator seal area entirely.
        if (x > canvas.width * 0.82 && y > canvas.height * 0.82) {
          pixels[i + 3] = 0
          continue
        }

        const lowCut = 22
        const highCut = 86
        let alphaFactor = 1

        if (brightness <= lowCut) {
          alphaFactor = 0
        } else if (brightness < highCut) {
          alphaFactor = (brightness - lowCut) / (highCut - lowCut)
        }

        pixels[i + 3] = Math.round(pixels[i + 3] * alphaFactor)
        if (pixels[i + 3] === 0) continue

        // Slightly boost visible logo colors after keying out black.
        pixels[i] = Math.min(255, r * 1.05)
        pixels[i + 1] = Math.min(255, g * 1.08)
        pixels[i + 2] = Math.min(255, b * 1.15)
      }

      // Smooth alpha across the interior and edges to reduce visible pixel steps
      // when the logo is scaled large in the hero.
      const w = canvas.width
      const h = canvas.height
      const alpha = new Uint8ClampedArray(w * h)
      for (let p = 0, a = 0; p < pixels.length; p += 4, a++) {
        alpha[a] = pixels[p + 3]
      }

      const alphaSmoothed = new Uint8ClampedArray(alpha)
      const idx = (x, y) => y * w + x
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const a00 = alpha[idx(x - 1, y - 1)]
          const a01 = alpha[idx(x, y - 1)]
          const a02 = alpha[idx(x + 1, y - 1)]
          const a10 = alpha[idx(x - 1, y)]
          const a11 = alpha[idx(x, y)]
          const a12 = alpha[idx(x + 1, y)]
          const a20 = alpha[idx(x - 1, y + 1)]
          const a21 = alpha[idx(x, y + 1)]
          const a22 = alpha[idx(x + 1, y + 1)]
          const blurred =
            (a00 + 2 * a01 + a02 + 2 * a10 + 4 * a11 + 2 * a12 + a20 + 2 * a21 + a22) / 16
          alphaSmoothed[idx(x, y)] = Math.round(blurred)
        }
      }

      for (let p = 0, a = 0; p < pixels.length; p += 4, a++) {
        pixels[p + 3] = alphaSmoothed[a]
      }

      ctx.putImageData(frame, 0, 0)
      setLogoSrc(canvas.toDataURL('image/png'))
    }
    img.onerror = () => {
      // Fallback so the mark still renders even if processing fails.
      setLogoSrc('/camp-logo.png')
    }
  }, [])

  return (
    <motion.div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center" style={{ y }} aria-hidden>
      <motion.img
        src={logoSrc}
        alt=""
        className="max-w-none select-none object-contain"
        style={{ scale, opacity, filter, width: 'calc(100% - 2in)', imageRendering: 'auto' }}
        draggable={false}
      />
    </motion.div>
  )
}
