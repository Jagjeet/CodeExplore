console.log('CLOSURES DONE RIGHT');

var arr = [];

function createClosure(n) {
  let j = 1000 + n; 
  return function () {
    setTimeout(function () { console.log("Blah " + n); }, 1000);
    return 'n = ' + n + 'j = ' + j;
  }
}

for (var index = 0; index < 10; index++) {
  arr[index] = createClosure(index);
}

for (var index in arr) {
  console.log(arr[index]());
}

arr.map( (val) => { console.log(val); return val; });