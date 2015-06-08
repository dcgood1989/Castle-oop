module.exports = {
  person: function() {
    var person = {
      firstName : "John",
      lastName: "Mayer"
    }
    return person;
  },

  sweetnessProperty: function(obj) {
    if (obj.hasOwnProperty('sweetness')) {
      return obj.sweetness
    } else {
      return undefined
    }
  },

  savorynessProperty: function(obj) {
    if (obj.hasOwnProperty('savory-ness')) {
      return obj['savory-ness']
    } else {
      return undefined
    }
  },

  keys: function(obj) {
    return Object.keys(obj)
  },

  sortedKeys: function(obj) {
    var x = Object.keys(obj);
    return x.sort()
  },

  reverseSortedKeys: function(obj) {
    var x = Object.keys(obj);
    return x.sort().reverse()
  }
}
