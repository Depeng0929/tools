import Big from 'big.js'
import type { numberLike } from '../index'

export function add(a: numberLike, b: numberLike) {
  return Big(a).plus(b).toNumber()
}

export function subtract(a: numberLike, b: numberLike) {
  return Big(a).minus(b).toNumber()
}

export function multiply(a: numberLike, b: numberLike) {
  return Big(a).times(b).toNumber()
}

export function divide(a: numberLike, b: numberLike) {
  return Big(a).div(b).toNumber()
}

export function numberLikeEqual(a: numberLike, b: numberLike) {
  return Big(a).eq(Big(b))
}
