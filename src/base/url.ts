export function getHost() {
  return `${window.location.protocol}//${window.location.host}${window.location.pathname}`
}

export function getUrlParams() {
  const search = decodeURIComponent(window.location.href.split('?')[1])
    .replace(/\+/g, ' ')

  if (!search)
    return {}

  const obj: any = {}
  const searchArr = search.split('&')
  searchArr.forEach((v) => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
