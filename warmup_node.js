function select(array, selectingFn) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (selectingFn(array[i]) === true) {
      results.push(array[i]);
    }
  }
  return results;
}
console.log(select([1, 2, 3, 4], function(n) { return n % 2 !== 0}));


function takeWhile(array, takingFn) {
  var results = [];
    for (i = 0; i < array.length; i++)
      if (takingFn(array[i]) === true) {
        results.push(array[i]);
      } else {
        break;
      }
  return results;
    }
console.log(takeWhile([1, 2, 3], function(n) {return n < 3}));

function rejectFn(array, rejectFn) {
  var results = [];
    for (var i = 0; i < array.length; i++)
      if (rejectFn(array[i]) === false) {
        results.push(array[i]);
      }
      return results;
    }
console.log(rejectFn([1, 2, 3, 4, 5], function(n) {return n < 3}));
