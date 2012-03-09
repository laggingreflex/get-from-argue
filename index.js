function argue(arguments, specific) {
  var sig = [];
  specific = (typeof specific === "undefined" ? true : specific);
  if (specific) {
    for (var i = 0, l = arguments.length; i < l; ++i) {
      if (arguments[i] === null) {
        sig.push('-');
      } else if (arguments[i] === undefined) {
        sig.push('u');
      } else if (arguments[i] instanceof Date) {
        sig.push('d');
      } else if (arguments[i] instanceof Array) {
        sig.push('a');
      } else if (arguments[i] instanceof RegExp) {
        sig.push('r');
      } else if (arguments[i] instanceof Error) {
        sig.push('e');
      } else {
        sig.push((typeof arguments[i]).slice(0,1));
      }
    }
  } else {
    for (var i = 0, l = arguments.length; i < l; ++i) {
      sig.push((typeof arguments[i]).slice(0,1));
    }
  }
  return sig.join("");
};

module.exports = getSignature;
