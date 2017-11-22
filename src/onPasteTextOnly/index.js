/**
 * reference: //www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/
 */

/**
 * @desc 仅粘贴纯文本内容
 * @param {HtmlElement} el - 需要做改处理的dom元素
 */
const onPasteTextOnly = (el) => {
  
    try {
      /**
       * IE浏览器的contenteditable框有个问题，会自动添加链接，如果仅需要纯文本，可以使用document.execCommand("AutoUrlDetect", false, false)来进行处理。
       */
      document.execCommand("AutoUrlDetect", false, false);
    } catch (e) { }
  
    el.addEventListener('paste', function (e) {
      e.preventDefault() // 取消默认事件
      var text = null
  
      // 从剪贴板获取到纯文本内容
      if (window.clipboardData && clipboardData.setData) {
        // IE
        text = window.clipboardData.getData('text');
      } else {
        // other
        text = (e.originalEvent || e).clipboardData.getData('text/plain')
      }
  
      /**
       * 处理粘贴文本到相应的区域
       * 理想情况应该直接使用document.execCommand("insertText")命令插入内容。但是，但是，IE浏览器虽然运行这段代码没有出错，也是支持document.execCommand的，但是，却没有插入内容的表现。也不知道是不是我打开的方式不对，后来，我就寻求更传统的方法，创建文本选区与插入，正好，就IE支持document.body.createTextRange…
       * document.selectionIE浏览器一直是支持的，直到IE11浏览器，直接废弃了，好在window.getSelection还活着，于是，又一次分情况处理。
       */
      if (document.body.createTextRange) {
        if (document.selection) {
          textRange = document.selection.createRange();
        } else if (window.getSelection) {
          sel = window.getSelection();
          var range = sel.getRangeAt(0);
  
          // 创建临时元素，使得TextRange可以移动到正确的位置
          var tempEl = document.createElement("span");
          tempEl.innerHTML = "&#FEFF;";
          range.deleteContents();
          range.insertNode(tempEl);
          textRange = document.body.createTextRange();
          textRange.moveToElementText(tempEl);
          tempEl.parentNode.removeChild(tempEl);
        }
        textRange.text = text;
        textRange.collapse(false);
        textRange.select();
      } else {
        // Chrome之类浏览器
        document.execCommand("insertText", false, text);
      }
    })
  }

/**
 * @desc exports
 */
module.exports =  onPasteTextOnly