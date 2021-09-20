export const timeStamp = () => +new Date()

/**
 * yyyy-MM-dd hh:mm:ss
 * @param arg yyyy-MM-dd hh:mm:ss
 * @param fmt yyyy-MM-dd hh:mm:ss
 */
export function formatTime(
  arg: Date | string | number = timeStamp(),
  fmt = 'yyyy-MM-dd',
): string {
  const date = new Date(arg)
  const maps: any = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds(),
  }

  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))

  Object.keys(maps).forEach((k) => {
    if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (RegExp.$1.length === 1) ? maps[k] : ((`00${maps[k]}`).substr((`${maps[k]}`).length)),
      )
    }
  })

  return fmt
}
