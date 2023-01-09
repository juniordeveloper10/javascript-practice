// if else statement

// function is_leap_year (year)
// {
//     if(year % 400 == 0)
//     {
//         return true
//     }else if((year % 4) && (year % 100 !=0))
//     {
//         return true;
//     }
//     else 
//     {
//         return false;
//     }
// }
// console.log( is_leap_year(2000) );
// statement true;
// console.log(is_leap_year(1990));
// statement false;

// switch statement 

// function day_of_week (day) 
// {
//     switch (day) {
//         case 1 : 
//         console.log("Monday");
//         break;
//         case 2 :
//         console.logn ("Tuesday");
//         break;
//         case 3 :
//         console.log("Wednesday");
//         break;
//         case 4 :
//         console.log("Thursday");
//         break;
//         case 5 :
//         console.log("Friday");
//         break;
//         case 6 :
//         console.log("Saturday");
//         break;
//         case 7 :
//         console.log("Sunday");
//         break;
//         default : "invalid Day Of Week!";
//     }
// }
// day_of_week(3);

// for inloop statement
// simple example
// for (i = 1 ; i <=10 ; i++)
// {
//     console.log(i)
// }


//Break And Continue

// for (i = 1 ; i <=10 ; i++)
// {
//     if(i == 8)
//     {
//         break;
//     }
//     console.log(i)
// }

// for (i = 1 ; i <=10 ; i++)
// {
//     if(i == 8)
//     {
//         continue;
//     }
//     console.log(i)
// }

// Object

// var car = new Object();
// car.colour = "red";
// car.model = "gallardo";
// for(var a in car) 
// {
//     console.log(a + " : " + car[a]);
// }
// var circle = {};
// circle.radius = 4;
// console.log(circle.radius);
// var book = {title : "The Smart Way To Learn JavaScript" , Author : "Mark Myers"};
// book.car = {colour : "red" , make : "gallardo" , manunfacture : "lamborghini"};
// for(var x in book )
// {
//     console.log(x);
// }
// for(var z in book.car) 
// {
//     console.log(z + " : " + book.car[z]);
// }

// JSON (Javascript object notation);

// var string_of_object = ' {"title": "car", "name": "tesla","price": "$10000" , "model" : "2021"}'
// musk = JSON.parse(string_of_object);
// for(var p in musk) 
// {
//     console.log(p + " : " + musk[p]);
// }


// Array 
 /*
var myArray = [];
myArray[0] = "zero" ; // sring
myArray[1] = true ; // bolean
myArray[2] = 4 ; // num;
myArray[3] = 12; 
myArray[4] = myArray[2] * myArray[3];
myArray[9] = {course : "javascript" , topic : "array"};
// myArray.length = 2;
myArray[10] = 11;
for( var i = 0 ; i < myArray.length ; i++)
{
    console.log(myArray[i]);    
}
for(var i in myArray)
{
    console.log(i)
}
console.log(myArray);
for(var i in myArray)
{
    if(myArray.)
    console.log(i)
}
*/


// Method In An Array
// concat / push and  pop (unshift nad shift) / join / slice / splice / sort
// concat
/*
let value1 = [1,2,3,4,5];
let value2 = [6,7,8,9,10];
var value3 = ["hello","how you doing"];
console.log(value1.concat(value2,value3));
*/
// join (convert array to string method)
/*
let value1 = [1,2,3,4,5];
let value2 = [6,7,8,9,10];
var value3 = ["hello","how you doing"];
var value4 =  value1.concat(value2,value3);
console.log(value4);
console.log(value4.join(" | "));
*/
//  push unshift (unshift added value first index push added value last index of array)
/*
let value1 = [1,2,3,4,5];
let value2 = [6,7,8,9,10];
var value3 = ["hello","how you doing"];
value3.push("JavaScript");
var value4 =  value1.concat(value2,value3);
value4.unshift(0);
console.log(value4);
*/

// pop shift (shift remove the first index array value pop remove last value index of array)

/*
let value1 = [1,2,3,4,5];
let value2 = [6,7,8,9,10];
var value3 = ["hello","how you doing"];
value3.pop();
var value4 =  value1.concat(value2,value3);
value4.unshift();
console.log(value4);
*/

// slice splice

// const value1 = [1,2,3,4,5,6];
// console.log(value1);
// var value2 = value1.slice(1);
// console.log(value2); 

// const value = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota"];
// value.splice(2,5 ,"rho", "sigma", "tau");
// console.log(value);

// Sorting Array

// var sortArray = [12,2,3,1,15,55];
// sortArray.sort();
// console.log(sortArray);
// function new_comparator(a,b)
// {
//     return a-b;
// }
// console.log(sortArray.sort(new_comparator));
// function new_comparator(a,b)
// {
//     return b-a;
// }
// console.log(sortArray.sort(new_comparator));

var x = [10,20,30,40,50];
x.unshift(60);
x.pop();
x.push(70);
console.log(x);