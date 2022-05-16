import { clone, equals, pipe, find, propEq, prop, map, pick as Rpick, isEmpty as RisEmpty } from 'rambda'
import { isNumberLike } from '../is'
import { numberLikeEqual } from './math'

/**
 * deepclone
 *
 * @see https://ramda.cn/docs/#clone
 * @category Object
 * @param val - Target object
 *
 */
export function deepClone<T>(val: T): T {
  return clone(val)
}

/**
 * equal
 *
 * @category Logic
 * @see https://ramda.cn/docs/#equals
 * @param a - The first input number
 * @param b - The second input number
 * @returns boolean
 * @example
 * ```
 * const isEqual = equal(1, '1')  // true
 * ```
 */
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

/**
 * Empty Array, Empty Object, Empty String, Not includes null
 *
 * @see https://ramda.cn/docs/#isEmpty
 * @category Logic
 * @param val - val
 */
export function isEmpty(val: unknown) {
  return RisEmpty(val)
}

/**
 * Like sql select
 *
 * @category Array
 * @param keys string keys Array
 * @param arr - object array
 * @returns new array filter keys
 * @example
 * ```
 * const abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 }
 * const fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 }
 * const kids = [abby, fred]
 *
 * const arr = select(['age', 'name'], kids)
 * ```
 */
export function select<T extends object, U extends keyof T>(keys: Array<U>, arr: T[]) {
  return map(Rpick(keys), arr)
}

/**
 * 返回对象的部分拷贝，其中仅包含指定键对应的属性。如果某个键不存在，则忽略该属性。
 *
 * @see https://ramda.cn/docs/#pick
 * @category Object
 * @param keys - object keys array
 * @param object - object
 * @returns The object filter keys
 * @example
 * ```
 * pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 * ```
 */
export const pick = Rpick
