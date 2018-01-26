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
  
  //Write your own replacement for reduce
  export function myReduce(myarray, myfunction, initval) {
    let totalVal = initval;
  
    myarray.forEach(function (val) {
      totalVal = myfunction.call(this, totalVal, val);
    });
  
    return totalVal;
  } //myReduce

  export function myReject(myarray, myfunction) {
    let newarray = [];

    myarray.forEach(function (val) {
      if (!myfunction(val)) {
        newarray.push(val);
      }
    });

    return newarray;
  } //myReject


  // Write two functions, every and some, that behave like these methods, 
  // except that they take the array as their first argument rather than being a method.
  // https://github.com/johnstonbl01/eloquentjs-exercises/tree/master/ch05
  export function myEvery(myArray, testFun) {
    let retVal = true; 
    myArray.forEach( function (val) {
      if (false === testFun(val)) {
        retVal = false;
      }
    }); 
    return retVal; 
  } //myEvery

  export function mySome(myArray, testFun) {
    let retVal = false; 
    myArray.forEach( function (val) {
      if (true === testFun(val)) {
        retVal = true;
      }
    }); 
    return retVal; 
  } //mySome

  //Use reduce to implement map/filter/reject
  export function reduceMap(myArray, myFunction) {
    function mapToFunction(prevVal, val) {
      prevVal.push(myFunction(val));
      return prevVal;
    }
    return myArray.reduce(mapToFunction, []); 
  } //reduceMap

  export function reduceFilter(myArray, myFunction) {
    function mapToFunction(prevVal, val) {
      if (myFunction(val) === true) {
        prevVal.push(val);
      }
      return prevVal;      
    }
    return myArray.reduce(mapToFunction, []); 
  } //reduceFilter


  export function reduceReject(myArray, myFunction) {
    function mapToFunction(prevVal, val) {
      if (myFunction(val) === false) {
        prevVal.push(val);
      }
      return prevVal;      
    }
    return myArray.reduce(mapToFunction, []); 
  } //reduceMap
