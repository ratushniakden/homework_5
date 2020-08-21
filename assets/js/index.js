"use strict";

//More JS!

//Task 1 && 2
//MDN
function customFlat(array) {
  var newArray = [];
  (function flat(array) {
    array.forEach(function (el) {
      if (Array.isArray(el)) flat(el);
      else newArray.push(el);
    });
  })(array);
  return newArray;
}

//Task 3
let array = [];
let s1 = "";
let s2 = "";
array[0] = "";

function logParenthis(n) {
  if (n <= 0) {
    console.log(array[0]);
  } else {
    s1 += "(";
    s2 += ")";
    array[0] = s1.concat(s2);
    logParenthis(n - 1);
  }
}

//Task 4

const user = {
  name: "Alex",
  dateOfBirth: new Date("1995-12-17T03:15:00"),
  hoursPerMonth: 240,
  ratePerHour: 17,

  get age() {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear();
  },
  get salary() {
    return this.hoursPerMonth * this.ratePerHour;
  },
};

//Tasks from practice

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
