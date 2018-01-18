/**
 * cookie 工具类
 */
class __Cookie {

  /**
   * Creates an instance of Cookie.
   * @memberof __Cookie
   */
  constructor() { }

  /**
   * 设置cookie
   * @param {string} key - 标识
   * @param {string} value - 值
   * @param {number} expires - 有效时长,单位天
   */
  set(key: string, value: string, expires: number): void {
    if (typeof key !== 'string') return
    if (typeof expires != 'number') return
    let date = new Date()
    date.setDate(date.getDate() + expires)
    let expiresString = 'expires=' + date.toUTCString()
    document.cookie = key + '=' + value + '; ' + expiresString
  }

  /**
   * 获取cookie
   * @param {string} key - 标识
   * @return {string} [没有获取到|key的类型不为string]返回空字符串
   */
  get(key: string): string {

    if (typeof key !== 'string') return '' // key的类型不为string，返回空字符串

    let cookie = document.cookie
    if (!cookie) return '' // cookie不存在或者为空字符串，返回空字符串
    let cookieArray = cookie.split(';')
    let mKey = key + '='
    let value = cookieArray.find(value => value.trim().indexOf(mKey) === 0)
    return value ? value.substring(mKey.length, value.length) : ''
  }

  /**
   * 删除cookie
   * @param {string} key - 标识
   */
  del(key: string): void {
    this.set(key, '', -1)
  }
}

const cookie = new __Cookie()

export default cookie
