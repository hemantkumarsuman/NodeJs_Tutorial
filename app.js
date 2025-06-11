//COMMON JS PATTERN
require('./xyz.js')

const obj = require('./sum.js');

var name = 'Learn nodejs';
var a = 10;
var b = 20;

obj.sum(a,b);



//ES6 PATTERN
// import { sum } from "./sum.js";
// var a = 10;
// var b = 20;
// sum(a,b);



//Every program has startup file.for us startup file is app.js
//But when we execute app.js, xyz.js file does not execute 
// To make it possible we use 'require' keyword -> like 1st line of code

//Defination => In Node.js, require is a built-in function used to import modules, JSON, or other files into your code.