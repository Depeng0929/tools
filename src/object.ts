import { isObject, notNil } from './is'
import type { DeepMerge } from './types'
import { entries, fromEntries } from './vendor'

/**
 * Map key/value pairs for an object, and construct a new one
 *
 *
 * Transform:
 * @example
 * ```
 * objectMap({ a: 1, b: 2 }, (k, v) => [k.toString().toUpperCase(), v.toString()])
 * // { A: '1', B: '2' }
 * ```
 *
 * Swap key/value:
 * @example
 * ```
 * objectMap({ a: 1, b: 2 }, (k, v) => [v, k])
 * // { 1: 'a', 2: 'b' }
 * ```
 *
 * Filter keys:
 * @example
 * ```
 * objectMap({ a: 1, b: 2 }, (k, v) => k === 'a' ? undefined : [k, v])
 * // { b: 2 }
 * ```
 */
export function objectMap<K extends string, V, NK = K, NV = V>(obj: Record<K, V>, fn: (key: K, value: V) => [NK, NV] | undefined): Record<K, V> {
  return fromEntries(
    entries(obj)
      .map(([k, v]) => fn(k as K, v as V))
      .filter(notNil),
  )
}

/**
 * Strict typed `Object.keys`
 *
 * @category Object
 */
export function objectKeys<T extends object>(obj: T) {
  return Object.keys(obj) as Array<keyof T>
}
export function deepMerge<T extends object = object, S extends object = T>(target: T, ...sources: S[]): DeepMerge<T, S> {
  if (!sources.length)
    return target as any

  const source = sources.shift()
  if (source === undefined)
    return target as any

  if (isMergableObject(target) && isMergableObject(source)) {
    objectKeys(source).forEach((key) => {
      if (isMergableObject(source[key])) {
        // @ts-expect-error
        if (!target[key])
          // @ts-expect-error
          target[key] = {}

        // @ts-expect-error
        deepMerge(target[key], source[key])
      }
      else {
        // @ts-expect-error
        target[key] = source[key]
      }
    })
  }

  return deepMerge(target, ...sources)

  function isMergableObject(item: any): item is Object {
    return isObject(item) && !Array.isArray(item)
  }
}

type RenameByT<T, U> = {
  [K in keyof U as K extends keyof T
    ? T[K] extends string
      ? T[K]
      : never
    : K]: K extends keyof U ? U[K] : never;
}

/**
 * 重命名对象的属性名字
 * @param keysMap {string: string} 映射数组
 * @param obj {object} obj
 * @returns obj
 *
 * @example
 * ```
 *    renameKeys({ name: 'name1', age: 'age1'} as const, {name: 'kdp', age: 12} as const)
 * ```
 */
export const renameKeys
   = <K extends Record<keyof V, string>, V extends object>(keysMap: K, obj: V) =>
     (
       Object.entries(obj).reduce(
         // @ts-expect-error
         (a, [k, v]) => k in keysMap ? { ...a, [keysMap[k]]: v } : { ...a, [k]: v },
         {},
       ) as RenameByT<K, V>
     )
