
/* Exercise 1: Basic Function Syntax
Write a function named 'sayHello' that takes a name as a parameter and logs "Hello, [name]!" to the console. */


function sayHello(name) {
    console.log(`Hello, ${name}`)
}
sayHello("Nasya")



/* Exercise 2: Function Expressions
Convert the following function declaration into a function expression and assign it to a variable named 'calculateArea'.
function calculateArea(width, height) {
  return width * height;
} */


function calculateArea(width, height) {
    return width * height;
}

let calculateArea = function(width, height);
return width * height;



/* Exercise 3: Arrow Functions
Rewrite the function from Exercise 2 as an arrow function with the same functionality. */


let calculateArea = (width, height) => {
return width * height
}



/* Exercise 4: Default Parameters
Write a function named 'greet' that takes two parameters: a name and a greeting, with "Hello" as the default greeting. The function should log the greeting and name to the console. */


function greet(name, greeting = "Hello") {
    name = "Nasya"
    return `${greeting}, ${name}`
}
console.log(greet())



/* Exercise 5: Rest Parameters
Write a function named 'sum' that uses rest parameters to take any number of arguments, calculate the sum, and return it. */


function sum(...numbers) {
    numbers = [1,2,3,4,5,1000]
    return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum(...numbers))



/* Exercise 6: Higher-Order Functions
Write a higher-order function named 'repeatOperation' that takes a function and a number as arguments. It should call the passed function the number of times indicated by the number argument. */


let repeatOperation = (division, 5){
    return division(5)
}



/* Exercise 7: Returning Functions
Write a function named 'multiplier' that takes a number as an argument and returns a function. The returned function should take another number as an argument and return the product of the two numbers. */


function multiplier(){
    
    function multiplier2() {
        return 10 * 2
    }

    return multiplier2()
}

console.log(multiplier(2))



/* Exercise 8: Closures
Create a function named 'counter' that has no arguments. It should return another function that, when invoked, returns an incremented number starting from 1. Each call should increase the count without using global variables. */


var counter = (function(n) {
  return function() {
    n += 1;
    return n;
  }
}(0))

console.log(counter())
console.log(counter())
console.log(counter())



/* Exercise 9: IIFE
Create an IIFE that logs "IIFE executed!" to the console immediately upon execution. */


(function () {
    let name = "IIFE"
    console.log(name, "executed!")
})()



/* Exercise 10: Async/Await
Write an async function named 'fetchData' that uses 'fetch' to retrieve data from 'https://jsonplaceholder.typicode.com/posts/1'. The function then logs the JSON response to the console. Handle the potential error with a try-catch block. */

async function fetchData('https://jsonplaceholder.typicode.com/posts/1') {
    try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let data = await response.json()
    console.log(response.json)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}