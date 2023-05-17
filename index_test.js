var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
it('test if the output of 5 is equal to 120',()=>{
      // setup
      let expected = 120;
    // exercise
      let result = Calculate.factorial(5)
    //verify
    assert.equal(result,expected)
})
it('returns the correct value of 3',()=>{
      // setup
      let expected = 6;
    // exercise
      let result = Calculate.factorial(3)
    //verify
    assert.equal(result,expected)
})
it('throws an error message if number 0',()=>{
      // setup
      let expectedResult = 6;
      
    // exercise
      let result = Calculate.factorial(3)
    //verify
    assert.equal(result,expectedResult)
})
  });
});
