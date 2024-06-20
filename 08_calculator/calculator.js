const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(a) {
  return a.reduce((total, currentItem) => {
    return total*currentItem;
  }, 1);
};

const power = function(a, b) {
	let ans = 1;
  for(i=0; i<b; i++){
    ans = ans*a;
  }
  return ans
};

const factorial = function(a) {
	if (a == 0){
    return 1;
  }
  else if (a == 1){
    return 1;
  }
  else {
    return a*factorial(a-1);
  }
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
