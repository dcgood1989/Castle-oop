function Auto(make) {
  this.make = make;
}
Auto.prototype.go = function() {
  console.log("driving some shit")
};

var car = new Auto("ford");
car.go = function() {
  console.log("driving some other shit")
};
