const assert  = require('assert');
const dataModule = require('../Modules/dataModule');
const jQuery = require('jQuery');
// assert(true);
// assert(false);

// //Test Runner Example
describe('Array', () => { //Standard Template
    describe('#indexOf()', () => {
      it('should return -1 when the value is not present', () => {
        // assert.strictEqual(1, [1,2,3].indexOf(2)); //Value is present
        assert.strictEqual(-1, [1,2,3].indexOf(0)); //Value is not present
      });
      it('should return a 1 when the value is present', () => {
        assert.strictEqual(1, [1,2,3].indexOf(2)); //Value is present
      })
    });
  });


// //DataModule for Todos
describe('DataModule', () => {
    it('should return data', () => {
      return dataModule.getTodos().then((todo) => {
        // console.log(todo);
        assert(todo);
      })
    });
    it('should return a specific post as JSON', () => {
      let postData = dataModule.getPost(50).then((specificPost)=>{
        let parsedValue = JSON.parse(specificPost);
        assert.strictEqual(50, parsedValue.id);
      });  
      
    });
    it('should get all posts by user');
    it('should get all users as an array of objects', () => {
      return dataModule.getUsers();  //Returns a Promise
        
    });
    it('should get all posts');
});