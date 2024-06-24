// Assignment of module 10

/* 
1. Write a function named ‘calculateSum’ 
that takes two arguments and returns their sum. */


function calculateSum (num1,num2) {
    return num1 + num2
}
const result = calculateSum(3, 8);

console.log(result);


/*
2. Write a function named ‘isEven’ that 
takes one argument and returns true if 
the number is even, and false otherwise.*/

function isEven(num) {
    if(num % 2 == 0) {
        return true
    } else {
        return false
    }
} 

console.log(isEven(18));

/*
3. Write a function named ‘findMax’ that 
takes an array of numbers and returns 
the largest number in the array.*/

let arrNumbers = [8, 32, 16, 4, 9, 11, 5];

let myArrayMax = findMax(arrNumbers)

function findMax(arr){
    return Math.max.apply(null, arr)
}

console.log(myArrayMax);


/*
4. Write a function named ‘reverseString’ 
that takes a string and returns 
the string reversed.*/

function reverseString (myString){
   return myString.split('').reverse().join('');
}
const newString = reverseString("OSTAD")
console.log(newString);


/*
5. Write a function named ‘filterOddNumbers’ 
that takes an array of numbers and returns 
a new array containing only the odd numbers. */

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

 function filterOddNumbers(numbers) {
    return numbers.filter(function(number) {
      if (number % 2 !== 0) {
        return true; 
      } else if (number % 2 === 0) {
        return false; 
      }
    });
  }
   
  const oddNumbers = filterOddNumbers(numbersArray);
  console.log(oddNumbers); 
   

/*
6. Write a function named ‘sumArray’ that 
takes an array of numbers and returns 
the sum of all elements. */

let myNumbers = [1, 3, 5, 7, 9];

function sumArray(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sumArray(myNumbers)); 


/*
7. Write a function named ‘sortArray’ 
that takes an array of numbers and returns 
a new array sorted in ascending order. */

let numberArr = [2, 5, 7, 14, 3, 9];

let sortArray = function(a,b) {
    return a - b
}

console.log(numberArr.sort(sortArray));


/*
8. Write a function named ‘capitalizeFirstLetter’ 
that takes a string and returns the same string 
with the first letter capitalized. 
Ex-  console.log(capitalizeFirstLetter("hello"));  
// Output:  "Hello"    */

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const firstLetter = capitalizeFirstLetter("hello javascript")

console.log(firstLetter);


