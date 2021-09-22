/**
 * console.log
 * @param val {unknow} val need console.log
 */
import * as timers from 'timers'
import { Fn } from '../types'

export function debug(val: unknown) {
  // eslint-disable-next-line no-console
  console.log.call(val, `timeStamp is ${window.performance.now()}`)
  return val
}

export function tap<T>(callback: (...p: any[]) => T) {
  const val = callback()
  debug(val)
  return val
}

/**
 * assert
 * @param condition {boolean}
 * @param message {string} error message
 */
export const assert = (condition: boolean, message = 'assert error') => {
  if (condition) { return true }
  else {
    console.error(message)
    throw new Error(message)
  }
}

export function debonce(fn: Fn, delay = 500) {
  let timer: NodeJS.Timeout

  return (...args: any[]) => {
    if (timer)
      clearTimeout(timer)

    timer = setTimeout(() => fn(args), delay)
  }
}

export function throttle(fn: Fn, interval = 500) {
  let timer: NodeJS.Timer | null
  let firstTime = true

  return (...args: any[]) => {
    if (firstTime) {
      // @ts-ignore
      fn.apply(this, args)
      return firstTime = false
    }

    if (timer)
      return false

    timer = setTimeout(() => {
      clearTimeout(timer!)
      timer = null
      // @ts-ignore
      fn.apply(this, args)
    }, interval)
  }
}