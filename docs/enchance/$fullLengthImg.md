# $fullLengthImg

- Desc

  有时候在给定的盒子大小里希望看到一张完整的照片
  * 居中
  * 不超出盒子大小，按原比例
  * 超出盒子大小时，缩放，其中一边撑满盒子

- param

 - `el` {HtmlElement} 设置背景图片的dom元素

 - `src` {String} 图片地址

 - `callback` {Function} 图片onload加载成功时的回调
    * 回调函数参数，可选
      * `el` {HtmlElement} 设置背景图片的dom元素
      * `imgObj` {Image} 图片对象

- Usage
  ```javascript
    let foo = document.getElementById('#foo')
    feu.$fullLengthImg(foo, 'http://bar', (el, imgObj) => {
      // do...
      // el === foo , imgObj 为已经加载好的图片对象
    })
  ```
