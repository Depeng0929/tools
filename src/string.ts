/**
 * Ensure prefix of a string
 *
 */
export function ensurePrefix(prefix: string, str: string) {
  if (!str.startsWith(prefix))
    return prefix + str
  return str
}

/**
 * Ensure suffix of a string
 *
 */
export function ensureSuffix(suffix: string, str: string) {
  if (!str.endsWith(suffix))
    return str + suffix
  return str
}

// port from nanoid
// https://github.com/ai/nanoid
const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
/**
 * Generate a random string
 * @category String
 */
export function randomStr(size = 16, dict = urlAlphabet) {
  let id = ''
  let i = size
  const len = dict.length
  while (i--)
    id += dict[(Math.random() * len) | 0]
  return id
}

// 大驼峰
export function pascalCase(str: string) {
  return capitalize(camelCase(str))
}

// 小驼峰
export function camelCase(str: string) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}

// 短横线
export function kebabCase(key: string) {
  const result = key.replace(/([A-Z])/g, ' $1').trim()
  return result.split(' ').join('-').toLowerCase()
}

// 首字母大写
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
