describe('cookie test', function () {
  describe('feu.cookie', function () {
    it('set cookie without error, key is "test",value is "123456",expries is "100000"ms', function () {
      feu.cookie.set('test', '123456', 100000)
    })

    it('find cookie "test" to equal "123456"', function () {
      expect(feu.cookie.get('test')).to.equal('123456')
    })

    it('deleting cookie "test" without error,then find it to equal ""', function () {
      // delete
      feu.cookie.delete('test')

      expect(feu.cookie.get('test')).to.equal('')
    })
  })
})