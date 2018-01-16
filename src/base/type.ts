/**
 * 判断数据类型
 * @param {any} any 
 * @returns {string} 数据类型,小写
 */
const type = (any: any): string => Object.prototype.toString.call(any).slice(8, -1).toLowerCase()

export default type