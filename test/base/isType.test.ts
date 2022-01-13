import { isDate, isFunction, isNull, isNil, isNumber, isPlainObject, isRegExp, isString, isUndefined } from '../../src'

describe('isType', () => {
  it('isPlainObject', () => {
    expect(isPlainObject({})).toBeTruthy()
    expect(isPlainObject(null)).toBeFalsy()
    expect(isPlainObject(undefined)).toBeFalsy()
    expect(isPlainObject('')).toBeFalsy()
  })

  it('isRegExp', () => {
    expect(isRegExp('')).toBeFalsy()
    expect(isRegExp(/a/)).toBeTruthy()
  })

  it('isDate', () => {
    expect(isDate(new Date())).toBeTruthy()
  })

  it('isNumber', () => {
    expect(isNumber('23')).toBeTruthy()
    expect(isNumber('32')).toBeTruthy()
    expect(isNumber('3.200')).toBeTruthy()
    expect(isNumber(NaN)).toBeFalsy()
  })

  it('isString', () => {
    expect(isString('23k')).toBeTruthy()
    expect(isString('23')).toBeFalsy()
  })

  it('isNil', () => {
    expect(isNil(null)).toBeTruthy()
    expect(isNil(undefined)).toBeTruthy()
  })

  it('isUndefined', () => {
    expect(isUndefined(undefined)).toBeTruthy()
    expect(isUndefined(null)).toBeFalsy()
  })

  it('isNull', () => {
    expect(isNull(undefined)).toBeFalsy()
    expect(isNull(null)).toBeTruthy()
  })

  it('isFunction', () => {
    expect(isFunction(() => {})).toBeTruthy()
  })
})
