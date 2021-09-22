import { isPlainObject, notNil } from '../base'
import { DeepMerge } from '../types'

export function isObject(item: any): item is Object {
  return isPlainObject(item) || Array.isArray(item)
}

/**
 * 可以用来map和filter，甚至是转换key
 * @param obj
 * @param fn
 */
export function objectMap<K extends string, V, NK = K, NV = V>(obj: Record<K, V>, fn: (key: K, value: V) => [NK, NV] | undefined): Record<K, V> {
  return Object.fromEntries(
    Object.entries(obj)
      .map(([k, v]) => fn(k as K, v as V))
      .filter(notNil),
  )
}

export function deepMerge<T extends object = object, S extends object = T>(target: T, ...sources: S[]): DeepMerge<T, S> {
  if (!sources.length) return target as any

  const source = sources.shift()
  if (source === undefined)
    return target as any

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      // @ts-expect-error
      if (isPlainObject(source[key])) {
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
}

export function hasOwnProperty<T>(obj: T, v: PropertyKey) {
  if (obj == null) return false
  return Object.prototype.hasOwnProperty.call(obj, v)
}

export function getSingleInstance<T = any>(fn: (...p: any[]) => T) {
  let instance: T
  return (...args: any[]) => instance || (instance = fn(args))
}

export * from './clone'
