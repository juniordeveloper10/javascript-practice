/*

Write a javascript function named reverse which takes a string argument and returns the reversed string.
*/

// function reverse(_String) {
//     return _String.split("").reverse("").join(" | ");
// }
// console.log(reverse("some value "));

// Given a javascript array of objects having a radius property as shown [{radius: 5}, {radius: 9}, {radius: 2}], write a comparator function to sort it.


// function radiusCompare(a,b) {
//     if(a.radius < b.radius)
//     {
//         return -1;
//     }if(a.radius > b.radius)
//     {
//         return 1;
//     }
    
//         return 0;
//    }
//    var arr = [{radius: 5}, {radius: 9}, {radius: 2}];
//    arr.sort(radiusCompare);
//    console.log(arr);

   
function length_of_array(arr) {
   var count = 0;
    for(var i = 0 ; i < arr.length ; i++)
    {
        if(arr[i] !== undefined)
        {
            count++;
        }
    }
    return count;
}
console.log(length_of_array([1,2,4,5,undefined,7]));


