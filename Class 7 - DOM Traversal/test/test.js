var assert = require('assert');
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            // 
            // return 0;
            console.log(assert.equal([1,2,3].indexOf(4), 1));
        });
    });
});


describe('Destructuring arrays makes shorter code', () => {
    it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
      let [firstValue] = [1];
      assert.strictEqual(firstValue, 1);
    });
    it('get the last item from array', () => {
      let [x,y,lastValue] = [1, 2, 3];
      assert.strictEqual(lastValue, 3);
    });
    it('swap two variables, in one operation', () => {
      let [x, y] = ['ax', 'why'];
      [y, x] = [x, y];
      assert.deepEqual([x, y], ['why', 'ax']);
    });
    it('leading commas', () => {
      const all = ['ax', 'why', 'zet'];
      const [,,z] = all;
      assert.equal(z, 'zet');
    });
    it('extract from nested arrays', () => {
      const user = [['Some', 'One'], 23];
      const [[firstName, surname], age] = user;
      const expected = 'Some One = 23 years';
      assert.equal(`${firstName} ${surname} = ${age} years`, expected);
    });
    it('chained assignments', () => {
      let c, d;
      let a, b = [c, d] = [1, 2];
      assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
    });
    it('in for-of loop', () => {
      for (var [,a, b] of [[0, 1, 2]]) {}
      assert.deepEqual([a, b], [1, 2]);
    });
  });
  