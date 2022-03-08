import { clone, equals } from 'rambda'
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
