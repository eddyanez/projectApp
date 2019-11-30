const sum = require ('../sum')
const assert = require('assert')

describe('sum', () => {
  it('Suma de números positivos', () => {
    assert.equal(sum(3,5), 8)
  })
  it('Suma de números negativos', () => {
    assert.equal(sum(3, -5), -2)
  })
  it('Suma de números decimales', () => {
    assert.equal(sum(3.5,7.1), 10.6)
  })
})
