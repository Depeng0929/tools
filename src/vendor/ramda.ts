import * as R from 'ramda'
import { isUndefined } from '../base'

export function findValueByKey(keyName = 'key', valueName = 'value') {
  return R.curry(
    (keyValue: unknown, list: any[]) => {
      const item = list.find(i => i[keyName] === keyValue)
      if (!isUndefined(item))
        return item[valueName]
    },
  )
}
