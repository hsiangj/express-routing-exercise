const { findMean, findMedian, findMode} = require("./helper");

describe('findMean', function(){
  test('find mean of an array of numbers', function(){
    expect(findMean([1,2,3,4])).toEqual(2.5)
  })
  test('find mean of an array with negative numbers', function(){
    expect(findMean([1,-2,3,4])).toEqual(1.5)
  })
  test('find mean of an empty array', function(){
    expect(findMean([])).toEqual(0)
  })
})

describe('findMedian', function(){
  test('find median of an even set', function(){
    expect(findMedian([1,2,3,4])).toEqual(2.5)
  })
  test('find median of an odd set', function(){
    expect(findMedian([1,2,3,4,5])).toEqual(3)
  })
})

describe('findMode', function(){
  test('find mode', function(){
    expect(findMode([1,2,3,3,2,2,1])).toEqual(2)
  })
})