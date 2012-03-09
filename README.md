## Basic Usage

Argue determines the argument signature received by a function.

```javascript

var argue = require('argue');

function foo() {
  var sig = argue(arguments);
  switch(sig) {
    case 'sbnf':
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

`Date`   : `'d'`

`Array`  : `'a'`

`RegExp` : `'r'`

`Error`  : `'e'`

`String` : `'s'`

`Boolean`: `'b'`

`Number` : `'n'`

`Object` : `'o'`

`Function`: `'f'`

`null`   : `'-'`

`undefined` : `'u'`

