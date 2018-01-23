describe('cookie test', function () {
  describe('feu.cookie', function () {
    it('set cookie without error, key is "test",value is "123456",expries is Infinity day', function () {
      feu.cookie.set('test', '123456', {
        expires: Infinity
      })
    })

    it('has key "test" to equal true', function () {
      expect(feu.cookie.hasKey('test')).to.equal(true)
    })

    it('cookis keys to equal ["test"]', function () {
      expect(feu.cookie.keys()[0]).to.equal("test")
    })

    it('find cookie "test" to equal "123456"', function () {
      expect(feu.cookie.get('test')).to.equal('123456')
    })

    it('deleting cookie "test" without error,then find it to equal null', function () {
      // delete
      expect(feu.cookie.del('test')).to.equal(true)
      expect(feu.cookie.del('test')).to.equal(false)
      expect(feu.cookie.get('test')).to.equal(null)
    })
  })
})
