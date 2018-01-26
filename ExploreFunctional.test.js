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


//mymap tests
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

//myfilter tests
test('Verify: myfilter returns words with length > 6\
      \n    When: Passing a filter function testing for lengths >6\
      \n    Given: An array filled with words of varying lengths\n', () => {
      let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
      expect(ef.myFilter(words, (word) => word.length > 6)).toEqual(words.filter( (word) => word.length > 6));
  }
);

//myReduce tests
test('Verify: myReduce returns value of 6\
      \n    When: Passing a reduce function that adds the arguments of an array\
      \n    Given: An array filled with numbers 0 to 3\n', () => {
      let total = [0, 1, 2, 3]
      expect(ef.myReduce(total, mySum, 0)).toEqual(total.reduce(mySum, 0));
  }
);

let total = [0, 1, 2, 3].reduce(function (sum, value) {
  return sum + value;
}, 0);
