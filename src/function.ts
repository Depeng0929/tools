import { isObject, isString } from './is'

/**
 * Pass the value through the callback, and return the value
 *
 * @example
 * ```
 * function createUser(name: string): User {
 *   return tap(new User, user => {
 *     user.name = name
 *   })
 * }
 * ```
 */
export function tap<T>(value: T, callback: (value: T) => void): T {
  callback(value)
  return value
}

/**
  * assert(boolean, message)
  * @param condition {boolean}
  * @param message {string} error message
  */
export const assert = (condition: boolean, message = 'assert error') => {
  if (condition) return true
  else
    throw new Error(message)
}

/**
  * like console.log
  */
export function debug(val: unknown) {
  if (Array.isArray(val))
    console.table(val)

  else if (isObject(val))
    console.dir(val)

  else if (isString(val))
    console.log(`%c ${val}`, 'color: green; font-weight: normal')

  else
    console.trace(val)
}
