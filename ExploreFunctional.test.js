import * as ef from './ExploreFunctional';

//helper test methods
function plus1(n) {
    //  console.log(n);
    return (+n + 1);
  }

function addHello(word) {
  return ("hello " + word); 
}

function mySum(sum, value) {
  return sum + value;
}


//myMap tests
test('Verify: Array items are increased by 1\
      \n    When: Mapping an add one function to an array\
      \n    Given: An array filled with numbers\n', () => {
    let abc = [1, 2, 3];
    expect(ef.myMap(abc, plus1)).toEqual([2,3,4]);
  }
);

test('Verify: Array items are appended with "hello "\
      \n    When: Mapping an add hello function to an array\
      \n    Given: An array filled with letters\n', () => {
    let abc = ["a", "b", "c"];
    expect(ef.myMap(abc, addHello)).toEqual(["hello a", "hello b", "hello c"]);
  }
);

//myFilter tests
test('Verify: myfilter returns words with length > 6\
      \n    When: Passing a filter function testing for lengths >6\
      \n    Given: An array filled with words of varying lengths\n', () => {
      let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
      expect(ef.myFilter(words, (word) => word.length > 6)).toEqual(words.filter( (word) => word.length > 6));
  }
);

//myReduce tests
test('Verify: myReduce returns value of build in reduce function\
      \n    When: Passing a reduce function that adds the arguments of an array\
      \n    Given: An array filled with numbers 0 to 3\n', () => {
      let total = [0, 1, 2, 3]
      expect(ef.myReduce(total, mySum, 0)).toEqual(total.reduce(mySum, 0));
  }
);

test('Verify: myReduce returns value of 6\
      \n    When: Passing a reduce function that adds the arguments of an array\
      \n    Given: An array filled with numbers 0 to 3\n', () => {
      let total = [0, 1, 2, 3]
      expect(ef.myReduce(total, mySum, 0)).toEqual(6);
  }
);

//myReject tests
test('Verify: myReject returns [1, 3, 5]\
      \n    When: Passing a function that tests for even numbers \
      \n    Given: An array filled with numbers 1 to 6\n', () => {
      let testArray = [ 1, 2, 3, 4, 5, 6]
      expect(ef.myReject(testArray, function(num){ return num % 2 == 0; })).toEqual([1, 3, 5]);
  }
);

//myEvery tests
test('Verify: myEvery returns true\
      \n    When: Passing an array filled with NaN \
      \n    Given: A value of isNaN\n', () => {
      let testArray = [ NaN, NaN, NaN ];
      expect(ef.myEvery(testArray, isNaN )).toEqual(true);
  }
);

test('Verify: myEvery returns false\
      \n    When: Passing an array filled with NaN and a number\
      \n    Given: A value of isNaN\n', () => {
      let testArray = [ NaN, NaN, 4 ];
      expect(ef.myEvery(testArray, isNaN )).toEqual(false);
  }
);

//mySome tests
test('Verify: mySome returns true\
      \n    When: Passing an array filled with a NaN and numbers\
      \n    Given: A value of isNaN\n', () => {
      let testArray = [ NaN, 3, 4 ];
      expect(ef.mySome(testArray, isNaN )).toEqual(true);
  }
);

test('Verify: mySome returns false\
      \n    When: Passing an array filled with numbers\
      \n    Given: A value of isNaN', () => {
      let testArray = [ 2, 3, 4 ];
      expect(ef.mySome(testArray, isNaN )).toEqual(false);
  }
);

// console.log(some([NaN, 3, 4], isNaN));
// // → true
// console.log(some([2, 3, 4], isNaN));
// → false