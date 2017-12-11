describe('type', function () {

  it('type(1) to equal "number"', function () {
    expect(feu.type(1)).to.equal('number')
  })

  it('type("1") to equal "string"', function () {
    expect(feu.type('1')).to.equal('string')
  })

  it('type(true) to equal "boolean"', function () {
    expect(feu.type(true)).to.equal('boolean')
  })

  it('type({}) to equal "object"', function () {
    expect(feu.type({})).to.equal('object')
  })

  it('type(null) to equal "null"', function () {
    expect(feu.type(null)).to.equal('null')
  })

  it('type(undefined) to equal "undefined"', function () {
    expect(feu.type(undefined)).to.equal('undefined')
  })

  it('type(Symbol("test")) to equal "symbol"', function () {
    expect(feu.type(Symbol("test"))).to.equal('symbol')
  })

  it('type([]) to equal "array"', function () {
    expect(feu.type([])).to.equal('array')
  })


  it('type(function(){}) to equal "function"', function () {
    expect(feu.type(function () { })).to.equal('function')
  })

  it('type(new Date) to equal "date"', function () {
    expect(feu.type(new Date)).to.equal('date')
  })

})