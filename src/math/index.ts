import { isNumber, isString } from '../base'

export function sum(...args: number[]) {
  return args.reduce((a, b) => a + b)
}

export function toFixed(val: string | number, digit = 2): number {
  if (!isNumber(val) && !isString(val)) return NaN

  return +Number.parseFloat(`${val}`).toFixed(digit)
}

/**
 * 进制转换
 * @param aNumber value
 * @param base target
 */
export function baseConvert(aNumber: number, base = 2) {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const inRange = base >= 2 && base <= 16
  if (!inRange) return ''

  let number = aNumber
  const stack = []
  let rem
  while (number > 0) {
    rem = Math.floor(number % base)
    stack.push(rem)
    number = Math.floor(number / base)
  }

  let result = ''
  while (stack.length !== 0)
    result += `${digits[stack.pop()!]}`

  return result
}
