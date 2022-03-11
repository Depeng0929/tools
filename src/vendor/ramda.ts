// @ts-nocheck
import { clone, equals, pipe, find, propEq, prop, curry } from 'rambda'
import { isNumberLike } from '../is'
import { numberLikeEqual } from './math'

export function deepClone<T>(val: T): T {
  return clone(val)
}

export function equal(a: unknown, b: unknown) {
  if (isNumberLike(a) && isNumberLike(b))
    return numberLikeEqual(a, b)

  return equals(a, b)
}

export function findValueByKey<T extends object>(keyName: keyof T, valueName: keyof T) {
  return (key: T[keyof T], list: T[]): T[keyof T] | undefined => pipe(
    find(propEq(keyName, key)),
    prop(valueName),
  )(list)
}
