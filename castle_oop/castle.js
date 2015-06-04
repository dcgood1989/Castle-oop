function Castle(people) {
  this.people = people.filter(function(person) {
    return !person.getEvil();
  });

  var that = this;

  return {
    addPerson: function(person) {
      if (person.getEvil()) {
        return false;
      } else if (person.getEnemyOfKing()) {
        console.log("kill them!");
      } else {
        that.people.push(person);
        return true;
      }
    },
    removePerson: function(person) {
      var personIndex = that.people.indexOf(person);
      if (personIndex > -1) {
        that.people.splice(personIndex, 1);
        return true;
      } else {
        return false;
      }
    },
    getPeople: function () {
      return that.people.map(function(person) { return person.getName(); });
    },
    headCount: function() {
      return this.getPeople().length;
    },
    purgeEvilInsiders: function () {
      var thatHere = this;
      that.people.filter(function(person) {
        return person.getEvil();
      }).forEach(function(evilPerson) {
        thatHere.removePerson(evilPerson);
      });
    }
  }
}

module.exports = Castle;
