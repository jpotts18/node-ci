var expect = require('chai').expect
var math = require('../simpleMath')

// http://blog.cleancoder.com/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html

describe('add()', function () {
  it('should add two numbers', function () {
    // 1. ARRANGE
    var x = 5
    var y = 1
    var sum1 = x + y
    // 2. ACT
    var sum2 = math.add(x, y)
    // 3. ASSERT
    expect(sum2).to.be.equal(sum1)
  })
})

describe('subtract()', function () {
  it('should subtract two numbers', function () {
    // 1. ARRANGE
    var x = 5
    var y = 1
    var expected = x - y
    // 2. ACT
    var tested = math.subtract(x, y)
    // 3. ASSERT
    expect(tested).to.be.equal(expected)
  })
})
