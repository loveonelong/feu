/**
 * @desc cookie相关工具
 */
const cookie = {

  /**
   * @desc 设置cookie
   * @param {String} key - 标识
   * @param {String} value - 值
   * @param {Number} expires - 有效时长,单位ms
   */
  set: (key, value, expires) => {
    let date = new Date()
    date.setTime(date.getTime() + expires)
    let expiresString = 'expires=' + date.toGMTString()
    document.cookie = key + '=' + value + '; ' + expiresString
  },

  /**
   * @desc 获取cookie
   * @param {String} key - 标识
   * @return {String} 获取的cookie值，没有获取到时为空字符串''
   */
  get: (key) => {
    if (!document.cookie) return ''
    let cookieArray = document.cookie.split(';')
    let mKey = key + '='
    let cookieValue = cookieArray.find(cookieItem => cookieItem.trim().indexOf(mKey) === 0)
    return cookieValue ? cookieItem.substring(mKey.length, cookieItem.length) : ''
  },

  /**
   * @desc 删除cookie
   * @param {String} key - 标识
   */
  delete: (key) => {
    cookie.set(key, '', -1000)
  }
}

/**
 * @desc export
 */
module.exports = cookie