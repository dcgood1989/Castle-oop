var Castle = require('./castle');
var Person = require('./person');

var evil = new Person("Andreas", "Executioner", true, false);
var smiler = new Person("Steve", "Smiler", false, false);

var people = [
  new Person("Dylan Haml", "Joker", false, true),
  new Person("Pamela", "Princess", false, false),
  new Person("Teddi", "Knight", false, true),
  smiler,
  evil
];

var castle = new Castle(people);

console.log("Expecting -1 for Evil person in Castle:")
console.log(castle.getPeople().indexOf(evil)); // -1

console.log("Expecting 3 for Smiler person in Castle:")
console.log(castle.getPeople().indexOf(smiler)); // 3

console.log("The headCount for the castle should be: 4")
console.log(castle.headCount()); // 4

// let's make Steve Evil:
smiler.setEvil(true);

castle.purgeEvilInsiders();

console.log("Expecting -1 for Smiler person in Castle:")
console.log(castle.getPeople().indexOf(smiler)); // -1

console.log("The headCount for the castle should be: 3")
console.log(castle.headCount()); // 3

var peter = new Person("Peter Cardi", "Magician", false, false);
castle.people = [peter];

console.log(castle.getPeople()); // No Peter to be found
console.log(castle.people.map(function(person) { return person.getName(); })); // Won't get people in castle, will get Peter
