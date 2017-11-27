/**
 * 
 * @desc 完整的显示一张图片(居中)
 * @param {HtmlElement} el 设置背景图片的dom元素
 * @param {String} src 图片地址
 * @param {Function} callback 图片onload加载成功时的回调
 */
const fullLengthImg = (el, src, callback) => {

  // 获取元素宽高
  let h = el.clientHeight
  let w = el.clientWidth

  // 创建img对象
  let mImage = new Image()
  mImage.src = src

  // onload事件触发
  mImage.onload = function () {
    let zoom = mImage.width / mImage.height > w / h ? mImage.width / w : mImage.height / h
    if (zoom > 1) {
      el.style.background = `url('${src}') no-repeat center / contain`
    } else {
      el.style.background = `url('${src}') no-repeat center/ auto`
    }

    // callback
    if (typeof callback === 'function') callback(el, mImage)
  }
}

module.exports = fullLengthImg