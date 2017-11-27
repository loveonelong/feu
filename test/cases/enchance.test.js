
describe('Enchance test', function () {

  describe('pasteTextOnly', function () {
    it('shoud be a function', function () {
      (typeof feu.$pasteTextOnly === 'function').should.equal(true)
    })
  })

  describe('fullLengthImg', function () {
    it('can handle photos normally', function (done) {
      this.timeout(10000)
      var imgbox = document.createElement('div')
      imgbox.style.width = '100px'
      imgbox.style.height = '100px'
      document.body.appendChild(imgbox)
      feu.$fullLengthImg(imgbox, 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511804878402&di=12b961e2ab123ee6244f71f9d3d18e0e&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb21bb051f819861855527cc049ed2e738bd4e659.jpg', function (el, imgObj) {
        (imgObj instanceof Image).should.be.equal(true)
        done() // mocha async done
      })
    })
  })

})
