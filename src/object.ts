import { notNil, isObject } from './is'
import { DeepMerge } from './types'

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
  return Object.fromEntries(
    Object.entries(obj)
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
