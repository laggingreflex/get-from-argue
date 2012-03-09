## Basic Usage

Argue determines the argument signature received by a function.

```javascript

var argue = require('argue');

function foo() {
  var sig = argue(arguments);
  switch(sig) {
    case 'sbnf':
      var mystr = arguments[0];
      var mybool = arguments[1];
      var mynum = arguments[2];
      var myfunv = arguments[3];
      // we got a string, boolean, number, and function
      break;

    case 'nnnn':
      // we got four numbers
      break;

    case 'ord-':
      // we got an object, regexp, date, and null
      break;

    default:
      // you get the idea
  }
}

```

Argue returns the following characters for the following types:

`d` : `Date`   

`a` : `Array`  

`r` : `RegExp` 

`e` : `Error`  

`s` : `String` 

`b` : `Boolean`

`n` : `Number` 

`o` : `Object` 

`f` : `Function`

`-` : `null`   

`u` : `undefined` 

