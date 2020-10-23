const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const sampleFile = require('../src/sampleFile');


describe('sampleFile', function() {

  describe('sampleFunction)', function() {
    it('should return 1', function() {
      let actualSampleFile = new sampleFile();
      assert.equal(actualSampleFile.sampleFunction(), 1);
    });
  });

});