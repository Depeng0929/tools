import { add } from './vendor/math'
import type { numberLike } from './index'

/**
 * @example
 * ```
 * sum([1, 2, 3])    // 6
 * ```
 */
export function sum(...args: numberLike[]) {
  return args.reduce((a, b) => add(a, b), 0)
}

/**
 * the Nearest number for first params between second and third
 */
export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export * from './vendor/math'
