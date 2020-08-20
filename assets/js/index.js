"use strict";

//Task 1

function vowelsOnly(str = "Z") {
  str = str.toLowerCase();
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str.charAt(i)) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        counter++;
        break;
    }
  }
  return counter;
}

//Task 2

function fizzBuzz(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

//Task 3

function avg() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

//Task 4

function addNum(n) {
  return function addition(m) {
    return n + m;
  };
}
const test = addNum(5);

// Task 5

function operation(num1, num2, fn) {
  fn(num1, num2);
}

function division(value1, value2) {
  console.log("another function");
  console.log(value1 / value2);
}

operation(10, 2, division);

//Task 6

const obj = {
  method1() {
    return this;
  },

  method2() {
    return this;
  },

  method3() {
    return "method3";
  },
};
