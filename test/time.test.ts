import { describe, expect, it } from 'vitest'
import { formateTime } from '../src/index'

describe('time', () => {
  it('formateTime', () => {
    expect(formateTime('2020-12-22 03:04:05', 'YYYY-MM-DD')).toBe('2020-12-22')
  })
})
