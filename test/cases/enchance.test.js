
describe('enchance test', function () {

  describe('$pasteTextOnly', function () {
    it('to be a function', function () {
      expect(feu.$pasteTextOnly).to.be.a('function')
    })
  })

  describe('$fullLengthImg', function () {
    it('can handle photos without error,and run callback without error', function (done) {

      // set timeout
      this.timeout(10000)

      // add imgbox
      var imgbox = document.createElement('div')
      imgbox.setAttribute('title', 'fullLengthImg')
      imgbox.style.width = '100px'
      imgbox.style.height = '100px'
      document.body.appendChild(imgbox)

      // case
      feu.$fullLengthImg(imgbox, 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511804878402&di=12b961e2ab123ee6244f71f9d3d18e0e&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb21bb051f819861855527cc049ed2e738bd4e659.jpg', function (el, imgObj) { // callback
        expect(imgObj).to.be.an.instanceof(Image)
        done() // mocha async done
      })

    })
  })

})
