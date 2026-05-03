"use client"

import useAnimatedCounter from "@/app/_hooks/use-animated-counter"

const AnimatedCounter = ({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) => {
  const { count, ref } = useAnimatedCounter(value, suffix, duration)

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
