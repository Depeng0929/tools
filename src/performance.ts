import { debug } from './function'
import { isBrowser } from './is'

export function debugFirstPaint() {
  if (!isBrowser)
    return false

  let t = 0
  window.onload = function() {
    t = +new Date() - performance.timing.navigationStart
    debug(t)
  }
}
