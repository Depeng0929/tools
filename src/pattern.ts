import type { ReturnType } from './types'

type FnWithParams = (...args: any[]) => any
export function getSingle<T extends FnWithParams>(createInstance: T): (...args: Parameters<T>) => ReturnType<T> {
  let result: ReturnType<T>

  return (...args) => {
    if (result) { return result }
    else {
      // @ts-expect-error
      return result = result = createInstance.apply(this, args)
    }
  }
}
