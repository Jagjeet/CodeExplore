  //Write your own replacement for filter and map in Javascript
  export function myMap(myarray, myfunction) {
    let newarray = [];
  
    myarray.forEach(function (val) {
      newarray.push(myfunction(val));
    });
  
    return newarray;
  } //mymap

  export function myFilter(myarray, myfunction) {
    let newarray = [];
  
    myarray.forEach(function (val) {
      if (myfunction(val) === true) {
        newarray.push(val);
      }
    });
  
    return newarray;
  }
  
  export function myReduce(myarray, myfunction, initval) {
    let totalVal = initval;
  
    myarray.forEach(function (val) {
      totalVal = myfunction.call(this, totalVal, val);
    });
  
    return totalVal;
  } //myReduce


  
  //Use reduce to implement map/filter/reject

//   Write two functions, every and some, that behave like these methods, except that they take the array as their first argument rather than being a method.
//https://github.com/johnstonbl01/eloquentjs-exercises/tree/master/ch05
// // Your code here.

// console.log(every([NaN, NaN, NaN], isNaN));
// // → true
// console.log(every([NaN, NaN, 4], isNaN));
// // → false
// console.log(some([NaN, 3, 4], isNaN));
// // → true
// console.log(some([2, 3, 4], isNaN));
// → false