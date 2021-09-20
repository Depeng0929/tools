/**
 *  时间切片,generator实现
 * @param fn generator function
 */
export function timeSliceByGenerator(fn: GeneratorFunction) {
  let iterator: Generator | null = null
  if (typeof fn === 'function') iterator = fn()
  if (!iterator || typeof iterator.next !== 'function')
    throw new Error('The params must be generator function')

  return function next() {
    const start = +new Date()
    let res = null

    do
      res = iterator!.next()
    while (!res.done && +new Date() - start < 25)
    if (res.done) return

    setTimeout(next)
  }
}

export function timeSlice(fn: () => any) {
  const step = () => {
    fn()
  }
  window.requestIdleCallback(step)
}

/**
 * 延迟渲染
 * @param fn 返回一个自增的数字 () => { ++i }
 * @param count 分批渲染次数
 */
export function deferRender(fn: () => number, count: number) {
  const step = () => {
    window.requestAnimationFrame(() => {
      const r = fn()
      if (r < count)
        step()
    })
  }
  return step()
}
