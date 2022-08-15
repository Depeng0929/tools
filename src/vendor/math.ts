import NP from 'number-precision'
import type { numberLike } from '../index'

export function add(...nums: numberLike[]) {
  return NP.plus(...nums)
}

export function subtract(...nums: numberLike[]) {
  return NP.minus(...nums)
}

export function multiply(...nums: numberLike[]) {
  return NP.times(...nums)
}

export function divide(...nums: numberLike[]) {
  return NP.divide(...nums)
}

export function numberLikeEqual(a: numberLike, b: numberLike) {
  return NP.strip(a) === NP.strip(b)
}

export function toFixed(num: numberLike, bit: number) {
  return NP.round(num, bit)
}
