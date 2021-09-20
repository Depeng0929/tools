import { isMap, isRegExp, isSet, isSymbol } from '../base'
import { isObject } from './index'

function cloneSymbol(v: unknown) {
  return Object(Symbol.prototype.valueOf.call(v))
}

function cloneRegExp(v: any) {
  const reFlags = /\w*$/
  const result = new v.constructor(v.source, reFlags.exec(v))
  result.lastIndex = v.lastIndex
  return result
}

function cloneOtherType(v: any) {
  if (isRegExp(v))
    return cloneRegExp(v)

  else if (isSymbol(v))
    return cloneSymbol(v)
  else
    return v
}

export function deepClone<T extends object>(target: T, map: WeakMap<T, T> = new WeakMap()): T {
  if (isObject(target)) {
    let clone: any = Array.isArray(target) ? [] : {}

    // 解决循环引用
    if (map.get(target))
      return map.get(target)!

    map.set(target, clone)

    // set
    if (isSet(target)) {
      clone = new Set() as Set<any>
      (target as Set<any>).forEach((value) => {
        clone.add(deepClone(value, map))
      })
      return clone
    }

    // map
    if (isMap(target)) {
      clone = new Map() as Map<any, any>
      (target as Map<any, any>).forEach((value, key) => {
        clone.set(key, deepClone(value, map))
      })
      return clone
    }

    // object or array
    Object.keys(target).forEach((key) => {
      // @ts-expect-error
      clone[key] = deepClone(target[key], map)
    })

    return clone
  }
  else {
    return cloneOtherType(target)
  }
}
