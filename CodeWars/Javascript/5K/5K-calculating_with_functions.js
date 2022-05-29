/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/javascript
*/

function zero(fn) {
    const val = 0;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}
function one(fn) {
    const val = 1;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}
function two(fn) {
    const val = 2;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}
function three(fn) {
    const val = 3;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}
function four(fn) {
    const val = 4;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}
function five(fn) {
    const val = 5;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}
function six(fn) {
    const val = 6;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}
function seven(fn) {
    const val = 7;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}
function eight(fn) {
    const val = 8;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}
function nine(fn) {
    const val = 9;
    if(fn === undefined) {
        return val;
    } else {
        return compute(val, fn);
    }
}

function plus(fn) {
    return "+" + fn;
}
function minus(fn) {
    return "-" + fn;
}
function times(fn) {
    return "*" + fn;
}
function dividedBy(fn) {
    return "/" + fn;
}

function compute(valLeft, fn) {
    const operator = fn[0];
    const valRight = +fn.substring(1);
    switch(operator) {
        case '+':
            return valLeft + valRight;
            break;
        case '-':
            return valLeft - valRight;
            break;
        case '*':
            return valLeft * valRight;
            break;
        case '/':
            return Math.floor(valLeft / valRight);
            break;
    }
}

/* Top solutions analysis */
var n = function(digit) {
    return function(op) {
      return op ? op(digit) : digit;
    }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

// zero to nine are nested functions. If they're called with a function it will call it.