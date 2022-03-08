import { describe, expect, it } from 'vitest'
import { ensurePrefix, ensureSuffix } from '../src/index'

describe('string', () => {
  it('ensurePrefix', () => {
    expect(ensurePrefix('http://', 'www.kongdp.top')).toBe('http://www.kongdp.top')
  })
  it('ensureSuffix', () => {
    expect(ensureSuffix('.jpg', 'a')).toBe('a.jpg')
  })
})
