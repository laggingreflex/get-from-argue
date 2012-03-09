var argue = require('./index')
  , assert = require('assert')
  , attempted = 0
  , passed = 0;

function test(name, expected, args) {
  ++attempted;
  try {
    console.log(name);
    (function() {
      assert.strictEqual(argue(arguments), expected, name);
    }).apply(null, args);
    console.log('done\n');
    ++passed;
  } catch (e) {
    console.log('test "' + name + ' failed.\n');
  }
};

test('empty args', '', []);
test('testing 3 numbers', 'nnn', [1,2,3]);
test('testing every type', '-udarefnbs',
     [null, undefined, new Date, [], /a/, new Error, function(){}, 1, false, 'hai']);

console.log("Passed " + passed + "/" + attempted + " tests.");
