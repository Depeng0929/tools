import type { ReturnType } from './types'

/**
 * Give a function, return a function.
 * you can clear this closure by closureFunction = null
 */
export function createSingle<T extends (...args: any[]) => any>(fn: T) {
  let result: ReturnType<T>

  return function (...args: Parameters<T>): ReturnType<T> {
    // @ts-ignore this?
    return result || (result = fn.apply(this, args))
  }
}
