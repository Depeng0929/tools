import dayjs from 'dayjs'

export function formateTime(time: number | Date, format = 'YYYY-MM-DD HH:mm'): string {
  return dayjs(time).format(format)
}
