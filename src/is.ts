type typeList = 'String' | 'Number' | 'Boolean' |
'Undefined' | 'Null' | 'Object' |
'Function' | 'Array' | 'Date' |
'RegExp' | 'Map' | 'Set' | 'Symbol' | 'Window'

const toTypeString = (p: unknown) => Object.prototype.toString.call(p)

function isType(type: typeList) {
  return (p: unknown) => {
    return toTypeString(p) === `[object ${type}]`
  }
}

const isStringNumber = (p: string | number) => {
  return /^\d+(\.\d+)?$/.test(`${p}`)
}

export const isRegExp = isType('RegExp')
export const isFunction = isType('Function')

/**
 * 是否是string,注意'1'是number而不是string
 */
export const isString = (p: unknown): p is string => {
  return isType('String')(p) && !isStringNumber(p as string)
}

/**
 * 是否是number, '1'是number而不是string
 */
export const isNumberLike = (p: unknown): p is number => {
  if (Number.isNaN(p))
    return false

  return isType('Number')(p) || isStringNumber(p as string)
}

/**
 * is plainObject,不包括Null
 */
export const isNumber = (p: unknown): p is number => isType('Number')(p)
export const isObject = (p: unknown): p is Object => isType('Object')(p)
export const isDate = (p: unknown): p is Date => isType('Date')(p)
export const isSymbol = (p: unknown): p is symbol => isType('Symbol')(p)
export const isSet = (p: unknown) => isType('Set')(p)
export const isMap = (p: unknown) => isType('Map')(p)
export const isNull = (p: unknown): p is null => isType('Null')(p)
export const isUndefined = (p: unknown): p is undefined => isType('Undefined')(p)

/**
 * 检测是否为null或undefined
 */
export const isNil = (p: unknown) => isNull(p) || isUndefined(p)
/**
 * 不是null或undefined
 */
export function notNil<T>(v: T | null | undefined): v is NonNullable<T> {
  return !isNil(v)
}

export const isBrowser = typeof window !== 'undefined'
