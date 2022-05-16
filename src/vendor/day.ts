import dayjs from 'dayjs'

/**
 * formate time by dayjs
 *
 * @see https://dayjs.fenxianglu.cn/category/display.html#%E6%A0%BC%E5%BC%8F%E5%8C%96
 * @param time - string | number | Date | dayjs.Dayjs | null | undefined
 * @param format - YYYY-MM-DD HH:mm:ss
 */
export function formateTime(time: dayjs.ConfigType, format = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(time).format(format)
}
