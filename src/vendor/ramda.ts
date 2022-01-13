import { curry } from 'ramda'
import { isUndefined } from '../base'

export function findValueByKey(keyName = 'key', valueName = 'value') {
  return curry(
    (keyValue: unknown, list: any[]) => {
      const item = list.find(i => i[keyName] === keyValue)
      if (!isUndefined(item))
        return item[valueName]
    },
  )
}
