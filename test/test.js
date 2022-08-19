const assert = require('assert');
describe('Array', () => {
  describe('#indexOf()', () => {
    it('指定された値が見つからない場合は -1 を返します。', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});