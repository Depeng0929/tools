import { clone, equals, pipe, find, propEq, prop, map, pick, isEmpty as RisEmpty } from 'rambda'
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
  // @ts-ignorer
  return (key: T[keyof T], list: T[]): T[keyof T] | undefined => pipe(
    // @ts-ignore
    find(propEq(keyName, key)),
    // @ts-ignore
    prop(valueName),
  )(list)
}

export function isEmpty(val: unknown) {
  return RisEmpty(val)
}

export function select<T extends object, U extends keyof T>(keys: Array<U>, arr: T[]) {
  return map(pick(keys), arr)
}
