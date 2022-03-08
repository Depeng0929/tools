import { add } from './vendor/math'
import type { numberLike } from './index'

export function sum(...args: numberLike[]) {
  return args.reduce((a, b) => add(a, b), 0)
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export * from './vendor/math'
