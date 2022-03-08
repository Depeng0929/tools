import { describe, expect, it } from 'vitest'
import {
  isRegExp,
  isFunction,
  isString,
  isNumberLike,
  isObject,
  isDate,
  isSymbol,
  isSet,
  isMap,
  isNull,
  isUndefined,
  isNil,
  notNil,
  isBrowser,
} from '../src/index'

describe('is', () => {
  it('isRegExp', () => {
    expect(isRegExp(/\d/g)).toBeTruthy()
  })

  it('isFunction', () => {
    expect(isFunction(() => {})).toBeTruthy()
  })

  it('isString', () => {
    expect(isString('kkk')).toBeTruthy()
    expect(isString('1')).toBeFalsy()
  })

  it('isNumberLike', () => {
    expect(isNumberLike(12)).toBeTruthy()
    expect(isNumberLike('12')).toBeTruthy()
  })

  it('isObject', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject(null)).toBeFalsy()
    expect(isObject([])).toBeFalsy()
  })

  it('isDate', () => {
    expect(isDate(new Date())).toBeTruthy()
  })

  it('isSymbol', () => {
    expect(isSymbol(Symbol('test'))).toBeTruthy()
  })

  it('isSet', () => {
    expect(isSet(new Set())).toBeTruthy()
  })

  it('isMap', () => {
    expect(isMap(new Map())).toBeTruthy()
  })

  it('isNull', () => {
    expect(isNull(null)).toBeTruthy()
  })

  it('isUndefined', () => {
    expect(isUndefined(undefined)).toBeTruthy()
  })

  it('isNil', () => {
    expect(isNil(null)).toBeTruthy()
    expect(isNil(undefined)).toBeTruthy()
    expect(isNil(false)).toBeFalsy()
  })

  it('notNil', () => {
    expect(notNil(/\d/g)).toBeTruthy()
  })

  it('isBrowser', () => {
    expect(isBrowser).toBeFalsy()
  })
})
