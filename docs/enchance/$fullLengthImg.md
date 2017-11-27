# $fullLengthImg

- Desc

  完整的显示一张图片(居中)
  * 不超出el大小，按原比例
  * 超出el大小时，缩放

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
    feu.$fullLengthImg(foo, 'http://foo.com/bar.jpg', (el,imgObj)=>{
      // do...
    })
  ```
