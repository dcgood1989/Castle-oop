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
    else if (array.length === n) {
      return array;
    (array.length === n)
      return ;
    }
    else if (array.length !== n && array.length !== 0) {
      return array.slice(0, array.length + (1 - n));

    }
  }
}
