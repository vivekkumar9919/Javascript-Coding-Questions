//! How to empty an array?

// *********************  Method 1 *********************//
// var arr=[1,2,3,4];
// arr.length=0;
// console.log(arr);

// *********************  Method 2 *********************//
// let myArray = [1, 2, 3, 4];
// myArray.splice(0, myArray.length);
// console.log(myArray); 


// *********************  Method 3 *********************//
// let myArray = [1, 2, 3, 4];
// myArray = [];
// console.log(myArray);





//! How do you add an element at the beginning of an array?

// let myArray = [2, 3, 4];
// myArray.unshift(1);

// console.log(myArray); 




//! How to remove an element from the end of the array?

// *********************  Method 1 *********************//
// let myArray = [1, 2, 3, 4];
// let removedElement = myArray.pop();
// console.log(myArray); 

// *********************  Method 2 *********************//
// let myArray = [1, 2, 3, 4];
// myArray.length=myArray.length-1;

// console.log(myArray);





//! How can you split a string into an Array?

// var str="vivek";
// var arr=str.split('');
// console.log(arr);



//! How can you Insert an element at a specific index in an Array?

// *********************  Method 1 *********************//

// let myArray = [1, 2, 3, 4];
// // Insert 5 at index 2
// myArray.splice(2, 0, 5);
// console.log(myArray); 

// *********************  Method 2 *********************//

// let myArray = [1, 2, 3, 4];
// let index = 2;
// let element = 5;

// // Insert 5 at index 2 using spread syntax
// let newArray = [...myArray.slice(0, index), element, ...myArray.slice(index)];
// console.log(newArray); 


// *********************  Method 4 *********************//

// let myArray = [1, 2, 3, 4];
// let index = 2;
// let element = 5;

// // Insert 5 at index 2 using apply() and splice()
// Array.prototype.splice.apply(myArray, [index, 0, element]);
// console.log(myArray); 





//! How can you Replace an element at a specific index in an Array?

// let myArray = [1, 2, 3, 4];
// let index = 2;
// let element = 5;
// myArray[index]=element;
// console.log(myArray);





//! How can you Delete an element at a specific index in an Array?

// *********************  Method 1 *********************//
// function deleteAtIndexUsingSplice(array, index) {
//     if (index >= 0 && index < array.length) {
//         array.splice(index, 1);
//     }
//     return array;
// }

// let myArray = [1, 2, 3, 4, 5];
// deleteAtIndexUsingSplice(myArray, 2); 
// console.log(myArray); 


// *********************  Method 2 *********************//

// function deleteAtIndexWithShift(array, index) {
//     if (index >= 0 && index < array.length) {
//         for (let i = index; i < array.length - 1; i++) {
//             array[i] = array[i + 1];
//         }
//         array.pop(); 
//     }
//     return array;
// }

// let myArray = [1, 2, 3, 4, 5];
// deleteAtIndexWithShift(myArray, 2); 
// console.log(myArray); 


// *********************  Method 3 *********************//

// function deleteAtIndexUsingSlice(array, index) {
//     if (index >= 0 && index < array.length) {
//         array = array.slice(0, index).concat(array.slice(index + 1));
//     }
//     return array;
// }

// let myArray = [1, 2, 3, 4, 5];
// myArray = deleteAtIndexUsingSlice(myArray, 2); 
// console.log(myArray); 


//! How can you delete a specific element?

// *********************  Method 1 *********************//

// function deleteElementUsingSplice(array, element) {
//     const index = array.indexOf(element);
//     if (index !== -1) {
//         array.splice(index, 1);
//     }
//     return array;
// }

// let myArray = [1, 2, 3, 4, 5];
// deleteElementUsingSplice(myArray, 3); 
// console.log(myArray); 

// *********************  Method 2 *********************//

// function deleteElementUsingFilter(array, element) {
//     return array.filter(item => item !== element);
// }

// let myArray = [1, 2, 3, 4, 5];
// myArray = deleteElementUsingFilter(myArray, 3); 
// console.log(myArray); 





//! How to check if a given number is an integer?

// *********************  Method 1 *********************//
// function isNum(num){
//     return num%1===0;
// }
// console.log(isNum("4"));

// *********************  Method 2 *********************//
// const number1 = 42;
// const number2 = 3.14;

// console.log(number1 === parseInt(number1, 10)); 
// console.log(number2 === parseInt(number2, 10));





//! How to Sort a Number Array?
// var arr=[1,11,3,4,12,15,0,2];
//*********************  Method 1 *********************//
// arr.sort((a,b)=>a-b);
// console.log(arr);

//********************* Method 2 *********************//
// function bubbleSort(arr) {
//     const n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//       let swapped = false;

//       for (let j = 0; j < n - i - 1; j++) {
//         // Compare adjacent elements
//         if (arr[j] > arr[j + 1]) {
//           // Swap the elements if they are in the wrong order
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//           swapped = true;
//         }
//       }

//       // If no two elements were swapped, the array is already sorted
//       if (!swapped) break;
//     }

//     return arr;
//   }

//   const arr = [1, 11, 3, 4, 12, 15, 0, 2];
//   const sortedArr = bubbleSort(arr);
//   console.log(sortedArr); 





//! How to find unique values in an array?

// *********************  Method 1 *********************//
// var arr=[1,2,3,2,1,4];
// var newmap=new Map();
// arr.forEach(element => {
//     if(newmap.has(element))
//     newmap.set(element,newmap.get(element)+1);
//     else 
//     newmap.set(element,1);
// });
// var ans=[];
// newmap.forEach((value,key)=>{
//     if(value==1)
//     ans.push(key);
// })
// console.log(ans);


// *********************  Method 2 *********************//
// let arr=[1,2,3,4,5,3,2];
// let unique=arr.filter((ele,index,arr)=>arr.indexOf(ele)==arr.lastIndexOf(ele)) ;
// console.log(unique); 


// *********************  Method 3 *********************//
// let arr=[1,2,3,4,5,3,2];
// let res=[];
// arr.forEach((ele)=>{
//     if(arr.indexOf(ele)==arr.lastIndexOf(ele))
//     res.push(ele);
// })
// console.log(res);





//!find duplicate elements of array

// *********************  Method 2 *********************//
// let arr=[1,2,3,4,5,3,2];
// let duplicate=arr.filter((ele,index,arr)=>arr.indexOf(ele)!=index) ;
// console.log(duplicate); 

// *********************  Method 2 *********************//
// let arr=[1,2,3,4,5,3,2];
// let res=[];
// arr.forEach((ele)=>{
//     if(arr.indexOf(ele)!=arr.lastIndexOf(ele) && !res.includes(ele))
//     res.push(ele);
// })
// console.log(res);





//! How to find the count of duplicates in an array?

// *********************  Method 1 *********************//

// function countDuplicate(arr) {
//     var newmap = new Map();
//     arr.forEach(element => {
//         if (newmap.has(element))
//         newmap.set(element, newmap.get(element) + 1);
//         else
//         newmap.set(element, 1);
//     });
//     var ans = {};
//     newmap.forEach((value, key) => {
//         if (value > 1)
//         ans[key] = value;
//     });
//     return ans;
// }

// var arr = [1, 2, 3, 2, 1, 4, 6, , 1, 6,];
// console.log(countDuplicate(arr));




//! Find maximum value in a numbered array?

// *********************  Method 1 *********************//
// var arr = [1, 2, 32, 4, 78, 9];
// var res = -1;
// function maxEle(arr) {
//     arr.forEach((ele) => {
//         if (ele > res) res = ele;
//     })
//     return res;
// };
// console.log(maxEle(arr));


// *********************  Method 2 *********************//

// var arr = [1, 2, 32, 4, 78, 9];
// var res= arr.reduce((max,curr)=>{
//     if(max<curr) max=curr;
//     return max;
// },0)
// console.log(res)





//! Find minimum value in a numbered array?

// *********************  Method 1 *********************//
// var arr = [10, 2, 32, 4, 78, 9];
// var res = Infinity;
// function minEle(arr) {
//     arr.forEach((ele) => {
//         if (ele < res) res = ele;
//     })
//     return res;
// };
// console.log(minEle(arr));


// *********************  Method 2 *********************//

// var arr = [1, 2, 32, 4, 78, 9];
// var res= arr.reduce((min,curr)=>{
//     if(min>curr) min=curr;
//     return min;
// },Infinity)
// console.log(res)





//! How to find unique values from an Array in sorted order?

// *********************  Method 1 *********************//

// function uniqueEle(arr){
//     var res=[];
//     arr.forEach((ele)=>{
//         if(!res.includes(ele)) {
//             res.push(ele);
//         }
//     });
//     return res;
// }
// var arr=[1,1,2,3,3,3,4,4,5,6];
// console.log(uniqueEle(arr));


// *********************  Method 2 *********************//

// var arr=[1,1,2,3,3,3,4,4,5,6];
// var uniqueEle = new Set(arr);
// uniqueEle= [...uniqueEle]
// console.log(uniqueEle);


// *********************  Method 3 *********************//

// function findUniqueSorted(arr) {
//     const n = arr.length;
//     const uniqueArr = [];
  
//     let left = 0;
//     let right = 0;
  
//     while (right < n) {
//       if (arr[left] === arr[right]) {
//         right++; // Move the right pointer to find the next unique element
//       } else {
//         // Add the element at left to the uniqueArr and move the pointers
//         uniqueArr.push(arr[left]);
//         left = right;
//       }
//     }
  
//     // Add the last element (or the only element if it's the only one in the array)
//     uniqueArr.push(arr[left]);
  
//     return uniqueArr;
//   }
  

//   const inputArray = [1, 2, 2, 3, 5, 5, 8, 9];
//   const uniqueSortedArray = findUniqueSorted(inputArray);
//   console.log(uniqueSortedArray); 






    

//! How can you uppercase the first character in a string array?

// function FirstUppercase(str){
//     return str.slice(0,1).toUpperCase()+str.slice(1);
// }

// console.log(FirstUppercase("vivek"));





//! Find the average of the numbers in the numbered array?

// *********************  Method 1 *********************//

// function averageNumber(arr){
//     const sum=arr.reduce((sum,curr)=>{{
//         sum+=curr;
//         return sum;
//     }},0)
//     return sum/arr.length;
// }

// var arr=[1,2,3,4,5];
// console.log(averageNumber(arr));


// *********************  Method 2 *********************//

// function averageNumber(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }

// var arr=[1,2,3,4,5];
// console.log(averageNumber(arr));





//! Given two strings, how can you check if the strings are anagram for each other?

// *********************  Method 1 *********************//
// function isAnagram(str1,str2){
//     var a=str1.split('').sort().join('');
//     var b=str2.split('').sort().join('');
//     return a==b;
// }
// console.log(isAnagram("vivek","vvikg"));





//! Given an  strings, reverse the sentence?

// *********************  Method 1 *********************//

// function reverseWord(str){
//     var arrString=str.split(" ");
//     var res="";
//     for(let i=arrString.length-1;i>=0;i--){
//         res+=arrString[i]+" ";
//     }
//     return res;
// }
// var str="this is vivek kumar"
// console.log(reverseWord(str));


// *********************  Method 2 *********************//

// function reverseWord(str){
//     var arrString=str.split(" ");
//     var res=arrString.reverse().join(" "); 
//     return res;
// }
// var str="this is vivek kumar"
// console.log(reverseWord(str));





//! Given an  strings, reverse each word in the sentence?

// *********************  Method 1 *********************//

// function reverseWord(str){
//     var arrString=str.split(" ");
//     var res="";
//     arrString.forEach(ele => {
//         res+=ele.split('').reverse().join('')+"*";
//     });

//     return res;
// }
// var str="this is vivek kumar"
// console.log(reverseWord(str));





//! How can you combine two Arrays into a third Array using spread operator?

// function combineArray(arr1,arr2){
//     var newArray=[...arr1,...arr2];
//     return newArray;
// }
// var arr1=[1,2,3];
// var arr2=[3,4,5,5]
// console.log(combineArray(arr1,arr2));





//! Write a function to check if a given string is Palindrome or not?

// function isPalindrome(str){
//     var revStr=str.split('').reverse().join('');
//     return str===revStr;
// }
// console.log(isPalindrome("aaba"));




//! Write a function to check if a given number is Palindrome or not?

// function isPalindrome(num){
//     var rev=0;
//     var n=num;
//     while(n>0){
//        rev=rev*10+n%10;
//        n=Math.floor(n/10);
//     }
//     return rev===num;
// }

// console.log(isPalindrome(11111));





//! Filter the given object based on certain conditions and return the corresponding object?

// const inputObject = {
//     key1: 10,
//     key2: 25,
//     key3: 5,
//     key4: 15
//   };
  
// const condition = 10;

// const filteredObject = Object.keys(inputObject).reduce((result, key) => {
//   if (inputObject[key] > condition) {
//     result[key] = inputObject[key];
//   }
//   return result;
// }, {});

// console.log(filteredObject);





//! How to check if an object is present in an Array or not?

// const array = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
//   ];
  
//   const objectToFind = { id: 2, name: 'Bob' };
  
//   // Shallow Comparison using Array.prototype.includes()
//   const isPresentShallowIncludes = array.includes(objectToFind);
//   console.log("Using includes():", isPresentShallowIncludes);  // Returns false
  
//   // Shallow Comparison using Array.prototype.indexOf()
//   const index = array.indexOf(objectToFind);
//   const isPresentShallowIndexOf = index !== -1;
//   console.log("Using indexOf():", isPresentShallowIndexOf);  // Returns false
  
//   // Deep Comparison using Array.prototype.find()
//   const foundObject = array.find(obj => obj.id === objectToFind.id && obj.name === objectToFind.name);
//   const isPresentDeepFind = !!foundObject;
//   console.log("Using find():", isPresentDeepFind);  // Returns true





//! How do you write a function which can take (x) number of parameters?

// function sum(...numbers) {
//     return numbers.reduce((total, current) => total + current, 0);
// }

// console.log(sum(1, 2, 3));  
// console.log(sum(5, 10, 15, 20)); 





//! How do you create an Array out of a given sentence?

// function stringToArray(str){
//     let arr=str.split(" ");
//     return arr;
// }
// let str="this is vivek kumar";
// console.log(stringToArray(str));





//! How do you write an add() function using javascript currying concept?

// function add(x) {
//     return function(y) {
//         return x + y;
//     };
// }

// const addFive = add(5)(3);
// console.log(addFive);  
 





// !How can we generate a random alphanumeric string in JavaScript?

// function generateRandomAlphanumeric(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters.charAt(randomIndex);
//     }

//     return result;
// }

// const randomString = generateRandomAlphanumeric(10); 
// console.log(randomString);





//! How can we call a function which logs a message after every 5 seconds?

// function logMessage() {
//     console.log("Message logged every 5 seconds");
// }

// // Call logMessage() every 5 seconds
// const intervalId = setInterval(logMessage, 5000);

// // Stop the interval after a certain number of iterations (optional)
// const maxIterations = 5;
// let iterations = 0;

// function stopInterval() {
//     clearInterval(intervalId);
//     console.log("Interval stopped after", iterations, "iterations.");
// }

// setTimeout(stopInterval, maxIterations * 5000);





//! How can we delay calling a function after 5 seconds?

// function delayedFunction() {
//     console.log("Function called after 5 seconds");
// }
// // Call delayedFunction() after 5 seconds
// const delayDuration = 5000; 
// setTimeout(delayedFunction, delayDuration);





//! How do you check if a string starts with another string?

// *********************  Method 1 *********************//
// const mainString = "Hello, world!";
// const prefix = "Hello";

// if (mainString.startsWith(prefix)) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// *********************  Method 2 *********************//
// function customStartsWith(mainString, prefix) {
//     if (prefix.length > mainString.length) {
//         return false;
//     } 
//     for (let i = 0; i < prefix.length; i++) {
//         if (mainString[i] !== prefix[i]) {
//             return false;
//         }
//     } 
//     return true;
// }

// const mainString = "Hello world!";
// const prefix = "Hello";

// console.log(customStartsWith(mainString, prefix))





//! Implement a groupBy method in JavaScript?
// function groupBy(arr, property) {
//     return arr.reduce((result, obj) => {
//         const key = obj[property];
        
//         if (!result[key]) {
//             result[key] = [];
//         }
        
//         result[key].push(obj);
        
//         return result;
//     }, {});
// }

// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Carol", age: 25 },
//     { name: "David", age: 30 }
// ];

// const groupedByAge = groupBy(people, "age");
// console.log(groupedByAge);





//! Reverse the array and if string present the reverse the string

// function reverseString(str){
//     res.push(str.split("").reverse().join(""));
// }
// function reverseNum(num){
//     let rev=0;
//     while(num>0){
//         rev=rev*10+num%10;
//         num=Math.floor(num/10);
//     }
//     res.push(rev);
// }


// let res=[];
// let arr=[56,64,"vivek","kumar"]
// arr.reverse();
// for(let i=0;i<arr.length;i++){
//     if((typeof arr[i])=="string"){
//     reverseString(arr[i]);
//     }
//     else {
//         reverseNum(arr[i]);
//     }
// }

// console.log(res);




//! Write a function to convert a given sentence to camel case (capitalize each word except the first one and remove spaces)

// function ConvertTitle(str){
//     return str.slice(0,1).toUpperCase()+str.slice(1);
// }
// function final(str){
//     let arr=str.split(" ");
//     let resarr=[]
//     for(let i=0;i<arr.length;i++){
//         if(i===0 ) {
//             resarr.push(arr[i].toLowerCase());
//         }
//         else
//         resarr.push(ConvertTitle(arr[i]));
//     }
//     return resarr.join("");
// }
// var str="hello world how are you";
// console.log(final(str));

// data binding
// React.strict mode
// link and navlink






//! How do you remove extra  whitespaces from a given string?

// function removeExtraSpaces(str) {
//     let words = str.split(' ');
//     let cleanedWords = words.filter(word => word !== '');
//     return cleanedWords.join(' ');
// }

// let str = "  This    is   a   sample   string  with   extra   spaces.  ";
// let ans = removeExtraSpaces(str);
// console.log(ans);




// ! roti13 alogrithm (replace the current char from its 13th char in cyclic order)
// function roti13(str){
//     let res="";
//     for(let i=0;i<str.length;i++){
//         let asciiNum=str[i].charCodeAt();
//         let num=13;
//         if(asciiNum+13<=122){
//             res+=String.fromCharCode(asciiNum+13);
//         }
//         else {
//          let newAsciinum=13-(122-asciiNum);
//         //  97 is ascii value of 'a' to start counting from 'a' we can add them in 96
//          res+=String.fromCharCode(96+newAsciinum);
//         }
//     }
//     return res;
// }

// console.log(roti13("abc"));
// console.log(roti13("vivek"));






// !input
// const products = [
//     { name: "Laptop", qty: 1000, stock: 2 },
//     { name: "Mouse", qty: 20, stock: 5 },
//     { name: "CPU", qty: 50, stock: 1 },
//     { name: "CPU", qty: 50, stock: 1 },
//     { name: "Mouse", qty: 20, stock: 5 },
//   ];

//! output
//  {
//   "Total_cost": 2300,
//   "objects": {
//     "Laptop": 1,
//     "Mouse": 2,
//     "CPU": 2
//   }
// }  

// *********************  Method 1 *********************//

//   let Total_cost=0
//   let objects=new Map();
//   for(let i=0;i<products.length;i++){
//       Total_cost+=products[i].qty*products[i].stock;
//       if(objects.has(products[i].name)){
//           objects.set(products[i].name,objects.get(products[i].name)+1);
//       }
//       else{
//           objects.set(products[i].name,1);
//       }
//   }
//   let temp={};
//   objects.forEach((key,value)=>{
//       temp[value]=key;
//   })
// //   console.log(temp);
// //   console.log(Total_cost);
//   let ans={};
//   ans['Total_cost']=Total_cost;
//   ans['objects']=temp;
//   console.log(ans);

// *********************  Method 2 *********************//

// var totalCost=0;
// var res={};
// for(let i=0;i<products.length;i++){
//     const {name,qty,stock}=products[i];
//     totalCost=totalCost+qty*stock;
//     if(!res[name]){
//         res[name]=1;
//     }
//     else {
//         res[name]++;
//     }
// }
// let ans={};
// ans["Total_cost"]=totalCost;
// ans["objects"]=res;
// console.log(ans);




// !how to check given value is object or not 
function isPlainObject(value) {
    return typeof value === "object" && value !== null && value.constructor === Object;
  }
  
  
  
  var obj = {"x": 5, "y": 42};
  console.log(isPlainObject(obj)); // Outputs: true
  
  
  var array = [1, 2, 3];
  console.log(isPlainObject(array)); // Outputs: false
  
  
  // How to define a class with properties and methods in JavaScript?
  // How to implement class inheritance in JavaScript?
  // How do you clone an Object?
  // Convert the given number into the exact decimal points to the right side?
  // Explain WeakSet in javascript with an example?
  // Explain WeakMap in javascript with an example?
  // Explain what is Object Destructuring with an example?
  // Given an array of strings, find the longest common prefix among them.
  
  // How can we parse a given JSON object?
  
  // How do I get query string values in javascript?
  // How to create and trigger events in javascript?
  // How to display the current date in javascript?
  // How do you compare time for two dates?
  
  // How do you assign default values to variables?
  // For a given function, count the number of parameters expected by a function?
  // Implement a method which generates 5 random numbers?
  // Implement a method which generates random numbers between 41 and 67 and sort them reverse?
  // How do you search a string for a pattern?
  // How to write an Object and implement multiple function chaining?
  // How do you determine whether an object is frozen or not?
  // How do you determine two values are the same or not using an object?
  // How do you copy properties from one object to another object?
  // How do you determine if an object is sealed or not?
  // How do you get an enumerable key and value pairs?
  // What is the main difference between Object.values and Object.entries method?
  // How can you get the list of keys of any object?
  // How do you encode an URL?
  // How do you define property on an Object constructor?
  // How can you call the constructor of a parent class?
  // How do you check whether an object can be extendable or not?
  // How do you prevent an object from extending?
  
  // What are default values in destructuring assignment?
  // How do you swap variables in destructuring assignment?
  
  // How to create a specific number of copies for a string?
  // What is the easiest way to convert an array to an object?
  
  
  
  // How to detect a mobile device with JavaScript?
  // How to fill static values in an array?
  // Why do we use The some() method in Arrays?
  // How to add 15 minutes to a JavaScript Date?
  
  
  // What is the difference between for..of and for..in?
  // How to set a property in localStorage?
  // State the difference between Apply and Call?
  
  // Explain Closure in JavaScript with an example?
  // How to calculate the length of an associative array using JavaScript?
  
  
  
  
  
  // How to find prime numbers in an Array?
  // How to generate fibonacci series in JavaScript?
  
  
  
  
  
  