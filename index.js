#!/usr/bin/env node

// import dependencies
const complex = require('complex.js');
const Decimal = require('decimal.js');
const escapeLatex = require('escape-latex');
const Fraction = require('fraction.js');
const naturalSort = require('javascript-natural-sort');
const mathjs = require('mathjs');
const regeneratorRuntime = require('regenerator-runtime');
const seedrandom = require('seedrandom');
const Emitter = require('tiny-emitter');
const typedFunction = require('typed-function');

// define findMax function using divide and conquer approach
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftMax = findMax(left);
  const rightMax = findMax(right);

  return Math.max(leftMax, rightMax);
}

// define function to add two complex numbers using complex.js
function addComplex(a, b) {
  const c1 = complex(a);
  const c2 = complex(b);
  return c1.add(c2).toString();
}

// define function to add two decimal numbers using decimal.js
function addDecimal(a, b) {
  const d1 = new Decimal(a);
  const d2 = new Decimal(b);
  return d1.add(d2).toString();
}

// define function to escape LaTeX string using escape-latex
function escapeLaTeX(str) {
  return escapeLatex(str);
}

// define function to add two fractions using fraction.js
function addFraction(a, b) {
    const f1 = new Fraction(a);
    const f2 = new Fraction(b);
    return f1.add(f2).toFraction(true);
}

// define function to sort array using javascript-natural-sort
function naturalSortArray(arr) {
    return naturalSort(arr);
  }
  
  // define function to evaluate mathematical expression using mathjs
  function evaluateExpression(expression) {
    return mathjs.evaluate(expression);
  }
  
  // define function to generate random number using seedrandom
  function generateRandomNumber(seed) {
    seedrandom(seed, { global: true });
    return Math.random();
  }
  
  // define function to create typed function using typed-function
  function createTypedFunction(args, body) {
    return typedFunction(args, body);
  }
  
  // define help function
  function help() {
    console.log(`
    Available commands:
    findMax: Finds the maximum value in a list of numbers.
    Usage: rxy findMax [numbers]

    addComplex: Adds two complex numbers.
    Usage: rxy addComplex [complex number 1] [complex number 2]
    
    addDecimal: Adds two decimal numbers.
    Usage: rxy addDecimal [decimal number 1] [decimal number 2]
    
    escapeLaTeX: Escapes a LaTeX string.
    Usage: rxy escapeLaTeX [LaTeX string]
    
    addFraction: Adds two fractions.
    Usage: rxy addFraction [fraction 1] [fraction 2]
    
    naturalSortArray: Sorts an array using natural sort.
    Usage: rxy naturalSortArray [array]
    
    evaluateExpression: Evaluates a mathematical expression.
    Usage: rxy evaluateExpression [expression]
    
    generateRandomNumber: Generates a random number with a given seed.
    Usage: rxy generateRandomNumber [seed]
    
    createTypedFunction: Creates a typed function.
    Usage: rxy createTypedFunction [arguments] [function body]
    `);
  }
  
// parse arguments
const [,, ...args] = process.argv;

// handle command
if (args.length === 0 || args[0] === 'help' || args[0] === '-help') {
  help();
} else if (args[0] === 'findMax') {
  console.log(findMax(args.slice(1).map(Number)));
} else if (args[0] === 'addComplex') {
  console.log(addComplex(args[1], args[2]));
} else if (args[0] === 'addDecimal') {
  console.log(addDecimal(args[1], args[2]));
} else if (args[0] === 'escapeLaTeX') {
  console.log(escapeLaTeX(args[1]));
} else if (args[0] === 'addFraction') {
  console.log(addFraction(args[1], args[2]));
} else if (args[0] === 'naturalSortArray') {
  console.log(naturalSortArray(args.slice(1)));
} else if (args[0] === 'evaluateExpression') {
  console.log(evaluateExpression(args[1]));
} else if (args[0] === 'generateRandomNumber') {
  console.log(generateRandomNumber(args[1]));
} else if (args[0] === 'createTypedFunction') {
  console.log(createTypedFunction(args[1], args[2]));
} else {
  console.log(`Invalid command. Type "rxy help" or "rxy -help" for a list of available commands.`);
}

module.exports = {
    findMax,
    addComplex,
    addDecimal,
    escapeLaTeX,
    addFraction,
    naturalSortArray,
    evaluateExpression,
    generateRandomNumber,
    createTypedFunction
  };
  
  
