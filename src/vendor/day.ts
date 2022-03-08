import dayjs from 'dayjs'

export function formateTime(time: dayjs.ConfigType, format = 'YYYY-MM-DD HH:mm:ss'): string {
  return dayjs(time).format(format)
}
