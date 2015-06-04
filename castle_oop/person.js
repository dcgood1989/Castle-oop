function Person(name, title, evil, enemyOfKing) {
  this.name = name;
  this.title = title;
  this.evil = evil;
  this.enemyOfKing = enemyOfKing;

  var that = this;

  return {
    getName: function() {
      return that.name;
    },
    setTitle: function(newTitle) {
      that.title = newTitle;
    },
    getTitle: function() {
      return that.title;
    },
    setEvil: function(isEvil) {
      that.evil = isEvil;
    },
    getEvil: function() {
      return that.evil;
    },
    setEnemyOfKing: function(isEnemy) {
      that.enemyOfKing = isEnemy;
    },
    getEnemyOfKing: function() {
      return that.enemyOfKing;
    }
  };
}

// Node's approach to handling modules
module.exports = Person;
