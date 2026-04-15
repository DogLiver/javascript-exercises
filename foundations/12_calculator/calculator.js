const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum,t) => sum+t,0)
};

const multiply = function(array) {
  return array.reduce((mul,t) => mul*t,1)
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  let result = 1;
  while(num){
    result *= num;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
