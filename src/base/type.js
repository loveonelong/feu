/**
 * @desc  js数据类型的判断
 * @param {any} any 
 * @returns {String} obj的数据类型,小写
 */
const type = any => Object.prototype.toString.call(any).slice(8, -1).toLowerCase()

export default type