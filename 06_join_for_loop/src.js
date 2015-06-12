/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
    result = [];
    for (i = 0; i < list.length; i++) {
      result.push(list[i]);
    }
    return result.join('');
  },

  joinWithForAndIndex: function(key, value) {
    result = [];
    for (i = 0; i < key.length; i++) {
      result.push(key[i]);
      result.push(i);
    }
    return result.join('');
  },

  joinWithoutOddCharacters: function(list) {
    result = [];
    for (var i = 0; i < list.length; i++) {
      if (i % 2 === 0) {
        result.push(list[i]);
      }
    }
      return result.join('')
  },

  joinWithForAndToken: function(list) {
    return list.join(' ').replace(/ /g, "*");
  },

  joinWithForAndAlternatingTokens: function(list, token1, token2) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
      if (i === list.length - 1) {
        result.push(list[i])
    } else if (i % 2 === 0){
      result.push(list[i] + token1);
    } else {
      result.push(list[i] + token2);
    }
  }
  return result.toString().replace(/,/g, "");
  },
}
