import type { Arrayable, Nullable } from './types'
/**
 * Genrate a range array of numbers. The `stop` is exclusive
 */
export function range(stop: number): number[]
export function range(start: number, stop: number, step?: number): number[]
export function range(...args: any): number[] {
  let start: number, stop: number, step: number

  if (args.length === 1) {
    start = 0
    step = 1;
    ([stop] = args)
  }
  else {
    ([start, stop, step = 1] = args)
  }

  const arr: number[] = []
  let current = start
  while (current < stop) {
    arr.push(current)
    current += step || 1
  }

  return arr
}

export function uniq<T>(array: readonly T[]): T[] {
  return Array.from(new Set(array))
}

export function toArray<T = unknown>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array || []
  if (Array.isArray(array))
    return array
  return [array]
}

/**
 * Get nth item of Array. Negative for backward
 */
export function at(array: readonly [], index: number): undefined
export function at<T>(array: readonly T[], index: number): T
export function at<T>(array: readonly T[] | [], index: number): T | undefined {
  const len = array.length
  if (!len) return undefined

  if (index < 0)
    index += len

  return array[index]
}

/**
 * Get last item of Array.
 */
export function last(array: readonly []): undefined
export function last<T>(array: readonly []): T
export function last<T>(array: readonly []): T | undefined {
  return at(array, -1)
}

/**
 * Get First item of Array
 */
export function head(array: readonly []): undefined
export function head<T>(array: readonly []): T
export function head<T>(array: readonly []): T | undefined {
  return at(array, 0)
}

export function remove<T>(array: T[], value: T) {
  if (!array.length) return false

  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}

export function move<T>(arr: T[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}
