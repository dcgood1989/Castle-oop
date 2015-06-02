module.exports = {

  first: function(array) {
    return array[0]
  },

  last: function(array) {
    return array.slice(-1)[0]
  },

  empty: function(array) {
    if (array.length === 0) {
      return true;
    }
    else {
      return false;
    }
  },

  first_n: function(array, n) {
    var results = [];
    if (array.length === 0) {
      return results;
    }
    else if (array.length < n) {
      return array;
    }
    else {
      return array.slice(0, n);
    }
  },

  last_n: function(array, n) {
    var results = [];
    if (array.length === 0) {
      return results;
    }
    else if (array.length < n) {
      return array;
    }
    else {
      return array.slice(n - 1)
    }
  },

  drop: function(array, n) {
    var results = [];
    if (array.length >= n) {
      return array.slice(n)
    }
    else if (array.length < n) {
      return results
    }
  },

  union: function(array1, array2) {
    var x = array1.concat(array2);
    return x
  },


  intersection: function(array1, array2) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          return result.push(array1[i]);
          }
        }
      }
    }

  //   var intersection = [];
  //   for (i in array1) {
  //     for (j in array2) {
  //       if (array1[i] == array2[j]) return intersection.push(array1[i]);
  //     }
  //   }
  // }
}
