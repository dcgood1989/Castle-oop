1. Pick a fruit out of the basket that says apples and oranges. Whatever fruit you pick means that basket is that fruit. Say it was an orange, then thats the orange basket. Once you know that, the bin that says just apples are apples and oranges, and the third box has both.

 2. Ask either robot "What door would your robot friend pick to not die?" Each answer will come back as incorrect so you choose the opposite door. This works because if you ask the robot that tells the truth that question he will say what the other robot would say meaning hed be lying. If you ask the robot that lies the same question he will answer as the other robot but lie about the door being safe so you always do the opposite of what either one says.

3.
function groupBy(array, groupingFn) {
  result = {}
  var key;
  for (i = 0; i < array.length; i++) {
    key = groupingFN(array[i]);
    if (!groupings[key]) {groupings[key] = [];}
      groupings[key].push(array[i]);
    }
    groupings[key] = [];
  }
  return groupings;
}
console.log(groupBy([1, 2, 3, 4, 5, 6], function(i) {return 1%3;}));

4.
var one = function(array, condition){
  var counter = 0;

  for (var i = 0; i<array.length; i++) {
    if (condition(array[i])) {
      counter++;
      if counter > 1 return false;
    }
  }
  return counter === 1;
};

console.log(one[1, 3, 5, 6], isEven));
