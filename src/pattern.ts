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

/**
 * 创建一个对象池，create方法用于创建一个纯内部状态对象，必须使用额外方法赋予create的对象外部状态
 * @param fn return object or class
 * @returns create equal to fn excute, recover must excute in clear methods
 */
export function createPool<T extends (...args: any[]) => any>(fn: T) {
  let pool: Array<ReturnType<T>> = []

  return {
    create(...args: Parameters<T>): ReturnType<T> {
      return pool.length === 0 ? fn.apply(this, args) : pool.pop()!
    },
    recover(item: ReturnType<T>) {
      pool.push(item)
    },
    clear() {
      pool = []
    }
  }
}
