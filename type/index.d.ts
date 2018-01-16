declare module "feu" {
  export namespace cookie {
    /**
     * @desc 设置cookie
     * @param {string} key - 标识
     * @param {string} value - 值
     * @param {number} expires - 有效时长,单位天
     * @returns {void}
     */
    function set(key: string, value: string, expires: number): void

    /**
     * @desc 获取cookie
     * @param {string} key - 标识
     * @return {string} [没有获取到|key的类型不为string]返回空字符串
     * 
     */
    function get(key: string): string

    /**
     * @desc 删除cookie
     * @param {string} key - 标识
     * @returns {void}
     */
    function del(key: string): void

  }

  /**
   * @desc 判断数据类型
   * @param {any} any 
   * @returns {string} 数据类型,小写
   */
  export function type(any: any): string

}