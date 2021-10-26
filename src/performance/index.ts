import { debug } from '../function/index'

export function debugFirstPaint() {
  let t = 0
  window.onload = function() {
    t = +new Date() - performance.timing.navigationStart
    debug(t)
  }
}
