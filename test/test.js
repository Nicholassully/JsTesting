const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect(1).to.equal(1)
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});