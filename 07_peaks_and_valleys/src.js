/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return '/\\';
  },

  valley: function() {
    return '___';
  },

  peaks: function(numberOfPeaks) {
    var peak = '/\\';
    var result = [];
    for (var i = 1; i <= numberOfPeaks; i++) {
      result.push(peak);
    }
    return result.join('');
  },

  valleys: function(numberOfValleys) {
    var valley ='___';
    var result = [];
    for (var i = 1; i <= numberOfValleys; i++) {
      result.push(valley);
    }
    return result.join('');
  },

  peaksAndValleys: function(numberOfPeaks, numberOfValleys) {
    var result = [];
    for (var i = 1; i <= numberOfPeaks + numberOfValleys; i++) {
      if (i <= numberOfPeaks) {
        result.push('/\\');
      }
      else { result.push('___'); }
    }
    return result.join('');
  }

}
