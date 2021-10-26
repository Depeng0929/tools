import * as math from 'mathjs'
import type { MathType } from 'mathjs'

type numberLike = string | number

function format(a: MathType) {
  return math.number(math.format(a))
}

export function add(a: numberLike, b: numberLike) {
  return format(math.add(math.bignumber(a), math.bignumber(b)))
}

export function subtract(a: numberLike, b: numberLike) {
  return format(math.subtract(math.bignumber(a), math.bignumber(b)))
}

export function multiply(a: numberLike, b: numberLike) {
  return format(math.multiply(math.bignumber(a), math.bignumber(b)))
}

export function divide(a: numberLike, b: numberLike) {
  return format(math.divide(math.bignumber(a), math.bignumber(b)))
}
