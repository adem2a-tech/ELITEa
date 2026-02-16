"use client"

import { useEffect, useState, type RefObject } from "react"

interface UseInViewOptions {
  threshold?: number
  once?: boolean
}

export function useInView(
  ref: RefObject<Element | null>,
  options: UseInViewOptions = {}
) {
  const { threshold = 0.1, once = true } = options
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold, once])

  return isInView
}
