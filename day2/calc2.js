//module.exports 방법

var calc = {};
calc.add = function(a, b) {
    return a+b;
}
module.exports = calc;