describe('Cookie test',function(){
  describe('set,find,delete',function(){
    it('set cookie key is "test",value is "123456",expries is "100000"ms',function(){
      feu.cookie.set('test','123456',100000)
    })
    it('find cookie "test" shoud equal "123456"',function(){
      feu.cookie.get('test').should.equal('123456')
    })
    it('delete cookie "test"',function(){
      feu.cookie.delete('test')
    })
    it('find cookie "test" shoud equal "" after delete it',function(){
      feu.cookie.get('test').should.equal('')
    })
  })
})