import dayjs from 'dayjs/esm/index.js'

export function formateTime(time: number | Date, format = 'YYYY-MM-DD HH:mm'): string {
  return dayjs(time).format(format)
}
