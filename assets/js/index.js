"use strict";

//More JS!

//Task 1 && 2

function ArrayMethods() {
  this.push = function (...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length++] = args[i];
    }
    return this.length;
  };

  this.pop = function () {
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];

    delete this[lastIndex];

    --this.length;

    return lastItem;
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  this.concat = function (array) {
    let result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }

    return result;
  };

  this.flat = function (depth = 1) {
    if (depth < 0) {
      console.error("depth must be a positive value");
      return;
    }

    let newArr = new MyArray();

    if (depth === 0) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        const buffer = this[i].flat(depth - 1);

        newArr = newArr.concat(buffer);
      } else if (this[i] !== undefined) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  };
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length++;
  }
}

MyArray.prototype = new ArrayMethods();

// Task 3

function logParenthesis(level) {
  let parenthesisArray = [];
  logPar(level);

  function logPar(number) {
    if (number > 0) {
      parenthesisArray = [...parenthesisArray, "("];
      logPar(number - 1);
      parenthesisArray = [...parenthesisArray, ")"];
    }
  }
  return parenthesisArray.join("");
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

function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return string.split("").filter((letter) => vowels.includes(letter)).length;
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

function avg(...args) {
  return args.reduce((sum, value) => sum + value) / args.length;
}

//Task 4

function addNum(initialValue) {
  let accumulator = initialValue;
  return function addition(number) {
    return (accumulator += number);
  };
}

// Task 5

function operation(num1, num2, fn) {
  return fn(num1, num2);
}

function division(value1, value2) {
  return value1 / value2;
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
