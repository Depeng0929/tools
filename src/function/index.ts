/**
 * console.log
 * @param val {unknow} val need console.log
 */
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

export function debonce() {}
