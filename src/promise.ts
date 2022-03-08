import { Fn } from './types'
/**
 * Promised `setTimeout`
 */
export function sleep(ms: number, callback?: Fn<any>) {
  return new Promise<void>(resolve =>
    setTimeout(async() => {
      await callback?.()
      resolve()
    }, ms),
  )
}
