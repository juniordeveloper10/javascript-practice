// Q1 
/*
Write a javascript function named is_integer
which checks if the passed argument is an integer. 
You can use any mathematical operator or functions defined in the Math object.
*/

/* rounds a number down to the nearest integer  */

// function is_integer(integer)
// {
//     integer = Math.floor(2.4); // 2
//     integer = Math.floor(1.999999); //1
//     // integer = Math.floor(10.5); // 10
//     console.log(integer);
// }
// is_integer();

/* rounds a number down to the largest integer  */

// function is_integer (integer)
// {
//     integer = Math.ceil(0.00000001); //1
//     integer = Math.ceil(2.4); //3
//     integer = Math.ceil(10.5); //11
//     console.log(integer);
// }
// is_integer()

/* get a random number n where 0 <= n < 1 */

// function is_integer (integer)
// {
//     integer = Math.random(); // 0.3594237846698176
//     console.log(integer);
// }
// is_integer();

// Returns a random integer from 0 to 12
// function is_integer (integer)
// {
//     integer = Math.floor(Math.random() * 12 ) ;
//     console.log(integer);
// }
// is_integer();

/* rounds to the nearest integer  */

// function is_integer (integer)
// {
//     integer = Math.round(0.2); //0
//     integer = Math.round(10.5); // 11
//     integer = Math.round(1.9); //2
//     console.log(integer);
// }
// is_integer();

/*  get the integer part of a number rmove the decimals does not round the number */

// function is_integer (integer)
// {
//     integer = Math.trunc(1.0001); // 1
//     integer = Math.trunc(10.4444); // 10
//     integer = Math.trunc(0.999999); // 0
//     console.log(integer);
// }
// is_integer();

/* get the sign of a number {Returns if x is negative, null or positive (-1, 0, 1)} */

// function is_integer (integer)
// {
//     integer = Math.sign(-4.5); // 1
//     integer = Math.sign(0); // 10
//     integer = Math.sign(10); // 0
//     console.log(integer);
// }
// is_integer();

/*get the value of a num1 to the power of a num2{Returns the value of x to the power of y}*/

// function is_integer (integer)
// {
//     integer = Math.pow(2,3); // 8
//     integer = Math.pow(1,10); // 1
//     integer = Math.pow(10,3); // 1000
//     console.log(integer);
// }
// is_integer();

/*  get  the square root of a number */

// function is_integer (integer)
// {
//     integer = Math.sqrt(25); // 8
//     integer = Math.sqrt(9); // 1
//     integer = Math.sqrt(16); // 1000
//     console.log(integer);
// }
// is_integer();

/*  get  the smallest num of the given numbers */

// function is_integer (integer)
// {
//     integer = Math.min(2,4,5,6,7); // 
//     integer = Math.min(12,11,13,15,20); // 
//     integer = Math.min(20,21,22,23,24); // 
//     console.log(integer);
// }
// is_integer();

/*  get  the largest num of the given numbers */

// function is_integer (integer)
// {
    // integer = Math.max(2,4,5,6,7); // 
    // integer = Math.max(12,11,13,15,20); // 
    // integer = Math.max(20,21,22,23,24); // 
//     console.log(integer);
// }
// is_integer();


/* PI */
// const Pi = Math.PI
// const CalculateAreaOfACircle = radius => Math.round(Pi* (radius ** 2));
// console.log(Pi) // 3.141592653589793
// console.log(CalculateAreaOfACircle(4)) //  50

// Q2
/*
Using the forEach function defined for an array, 
find the sum of the array of numbers. [function add_all(arr) {...}]
*/

function add_all(arr1)
{
    var arr1 = [12,2,3,4];
    arr1.forEach(item => {
    console.log(item);
    });
}
add_all();