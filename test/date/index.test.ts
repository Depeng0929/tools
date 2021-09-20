import { formatTime } from '../../src'

describe('date', () => {
  it('formatTime', () => {
    expect(formatTime(new Date('2021-09-18'), 'yyyy/MM/dd')).toBe('2021/09/18')
  })
})
