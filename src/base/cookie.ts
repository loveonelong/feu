/**
 * cookie 工具类
 * 参考自MDN: https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie#%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%A1%86%E6%9E%B6%EF%BC%9A%E4%B8%80%E4%B8%AA%E5%AE%8C%E6%95%B4%E6%94%AF%E6%8C%81unicode%E7%9A%84cookie%E8%AF%BB%E5%8F%96%E5%86%99%E5%85%A5%E5%99%A8
 */
class __Cookie {

  /**
   * 设置cookie
   * 
   * @param {string} key 
   * @param {string} value 
   * @param {AnyJSON} [options={}] 
   * @returns {boolean} 
   * @memberof __Cookie
   */
  set(key: string, value: string, options: AnyJSON = {}): boolean {
    if (typeof key !== 'string' || key === '' || /^(?:expires|max\-age|path|domain|secure)$/i.test(key) || typeof value !== 'string') return false
    if (typeof options !== 'object' || Object.prototype.toString.call(options).toLowerCase() !== '[object object]') return false

    //expries
    let sExpires = ''
    if (options.expires) { // undefined | null 没有constructor属性
      switch (options.expires.constructor) {
        case Number:
          sExpires = options.expires === Infinity ? ";expires=Fri, 31 Dec 9999 23:59:59 GMT" : ";max-age=" + options.expires;
          break;
        case String:
          sExpires = ";expires=" + options.expires;
          break;
        case Date:
          sExpires = ";expires=" + options.expires.toUTCString();
          break;
      }
    }
    let domain = typeof options.domain === 'string' ? options.domain : null
    let path = typeof options.path === 'string' ? options.path : null
    let secure = typeof options.secure === 'boolean' ? options.secure : null
    document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + sExpires + (domain === null ? "" : ";domain=" + domain) + (path === null ? "" : ";path=" + path) + (secure === null || secure === false ? "" : ";secure=true")
    return true
  }

  /**
   * 获取某个cookie
   * 
   * @param {string} key 
   * @returns {(string | null)}
   * @memberof __Cookie
   */
  get(key: string): string | null {
    if (typeof key !== 'string' || key === '' || document.cookie === '') return null
    let cookieArray = document.cookie.split(';')
    let mKey = encodeURIComponent(key) + '='
    let value = cookieArray.find(value => value.trim().indexOf(mKey) === 0)
    return value !== undefined ? value.substring(mKey.length, value.length) : null
  }

  /**
   * 检测cookie中是否存在某个key
   * 
   * @param {string} key 
   * @returns {boolean}
   * @memberof __Cookie
   */
  hasKey(key: string) {
    let cookie = document.cookie
    if (typeof key !== 'string' || key === '' || cookie === '') return false
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(cookie)
  }

  /**
   * 返回cookie中所有的key
   * 
   * @returns {Array<string>} 
   * @memberof __Cookie
   */
  keys(): Array<string> {
    let cookie = document.cookie
    if (cookie === '') return []
    let keys = cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/)
    return keys.map(value => decodeURIComponent(value))
  }

  /**
   * 删除某条cookie
   * 
   * @param {string} key 
   * @param {AnyJSON} [options={}] 
   * @returns {boolean} 
   * @memberof __Cookie
   */
  del(key: string, options: AnyJSON = {}): boolean {
    if (typeof key !== 'string' || key === '' || !this.hasKey(key)) return false
    if (typeof options !== 'object' || Object.prototype.toString.call(options).toLowerCase() !== '[object object]') return false
    let domain = typeof options.domain === 'string' ? options.domain : null
    let path = typeof options.path === 'string' ? options.path : null
    document.cookie = encodeURIComponent(key) + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain === null ? "" : ";domain=" + domain) + (path === null ? "" : ";path=" + path)
    return true
  }
}

const cookie = new __Cookie()

export default cookie
