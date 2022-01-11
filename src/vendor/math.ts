import Big from 'big.js'

type numberLike = string | number

export function add(a: numberLike, b: numberLike) {
  return Big(a).plus(b).toString()
}

export function subtract(a: numberLike, b: numberLike) {
  return Big(a).minus(b).toString()
}

export function multiply(a: numberLike, b: numberLike) {
  return Big(a).times(b).toString()
}

export function divide(a: numberLike, b: numberLike) {
  return Big(a).div(b).toString()
}
