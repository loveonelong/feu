
interface Document {
  [k: string]: any
}

interface AnyJSON {
  [k: string]: any
}

declare module "feu" {
  export namespace cookie {

    /**
     * 设置cookie
     * 
  1  * @param {string} key 
     * @param {string} value 
     * @param {AnyJSON} [options={}] 
     * @returns {boolean} 
     */
    function set(key: string, value: string, options: AnyJSON): boolean

    /**
     * 获取某个cookie
     * 
     * @param {string} key 
     * @returns {(string | null)}
     * @memberof __Cookie
     */
    function get(key: string): string | null

    /**
     * 删除某条cookie
     * 
     * @param {string} key 
     * @param {AnyJSON} [options={}] 
     * @returns {boolean} 
     */
    function del(key: string, options: AnyJSON): boolean

    /**
     * 检测cookie中是否存在某个key
     * 
     * @param {string} key 
     * @returns {boolean}
     */
    function hasKey(key: string): boolean

    /**
     * 返回cookie中所有的key
     * 
     * @returns {Array<string>} 
     * @memberof __Cookie
     */
    function keys(): Array<string>
  }
  /**
   * @desc 判断数据类型
   * @param {any} any 
   * @returns {string} 数据类型,小写
   */
  export function type(any: any): string
}