import { describe, expect, it } from 'vitest'

describe('index', () => {
  it('a', () => {
    // @ts-expect-error
    expect('a' === 'b').toBeFalsy()
  })
})
