import { isUndefined, notNil } from './isType'

export function processIsNode() {
  return isUndefined(window) && notNil(global)
}

export function processIsBrowser() {
  return notNil(window)
}
