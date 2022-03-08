import { describe, expect, it } from 'vitest'

describe('index', () => {
  it('a', () => {
    // @ts-ignore
    expect('a' === 'b').toBeFalsy()
  })
})
