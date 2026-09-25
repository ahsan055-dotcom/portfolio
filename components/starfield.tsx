'use client'

import { useMemo } from 'react'

type Star = {
  top: string
  left: string
  size: number
  duration: number
  delay: number
}

export function Starfield({ count = 60 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    // Deterministic pseudo-random so server and client render identically.
    const out: Star[] = []
    let seed = 1337
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }
    for (let i = 0; i < count; i++) {
      out.push({
        top: `${rand() * 100}%`,
        left: `${rand() * 100}%`,
        size: rand() * 2 + 1,
        duration: rand() * 4 + 2,
        delay: rand() * 5,
      })
    }
    return out
  }, [count])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-foreground"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
