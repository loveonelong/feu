/**
 * @desc  js数据类型的判断
 * @param {any} any 
 * @returns {string} obj的数据类型,小写
 */
const type = (any: any): string => Object.prototype.toString.call(any).slice(8, -1).toLowerCase()

export default type