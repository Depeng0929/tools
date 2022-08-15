/**
 * formate time by dayjs
 *
 * @see https://dayjs.fenxianglu.cn/category/display.html#%E6%A0%BC%E5%BC%8F%E5%8C%96
 * @param time - string | number | Date | dayjs.Dayjs | null | undefined
 * @param format - YYYY-MM-DD HH:mm:ss
 */
export function formateTime(time: string | number | Date, format = 'YYYY-MM-DD HH:mm:ss'): string {
  var date: Date = time ? new Date(time) : new Date();
  var o = {
    "M+": date.getMonth() + 1, //月份
    "D+": date.getDate(), //日
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds() //秒
  } as any
  if (/(Y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
}
