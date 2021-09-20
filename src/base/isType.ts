function isType(type: string) {
  return (p: unknown) => {
    return toTypeString(p) === `[object ${type}]`
  }

  function toTypeString(p: unknown) {
    return Object.prototype.toString.call(p)
  }
}

export const isRegExp = isType('RegExp')
export const isFunction = isType('Function')

const isStringNumber = (p: string | number) => {
  return /^\d+(\.\d+)?$/.test(`${p}`)
}
export const isString = (p: unknown): p is string => {
  return isType('String')(p) && !isStringNumber(p as string)
}

export const isNumber = (p: unknown): p is number => {
  if (Number.isNaN(p))
    return false

  return isType('Number')(p) || isStringNumber(p as string)
}

export function isPlainObject(p: unknown): p is Object {
  return isType('Object')(p)
}

export function isDate(p: unknown): p is Date {
  return isType('Date')(p)
}

export function isSymbol(p: unknown): p is symbol {
  return isType('Symbol')(p)
}

export function isNull(p: unknown): p is null {
  return isType('Null')(p)
}

export function isUndefined(p: unknown): p is undefined {
  return isType('Undefined')(p)
}

export function isNil(p: unknown) {
  return isNull(p) || isUndefined(p)
}

export function notNil<T>(v: T | null | undefined): v is NonNullable<T> {
  return !isNil(v)
}

export function isSet(p: unknown) {
  return isType('Set')(p)
}
export function isMap(p: unknown) {
  return isType('Map')(p)
}
