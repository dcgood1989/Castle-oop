function Bicycle(wheelSize, color) {
  this.wheelSize = wheelSize;
  this.color = color;
}

Bicycle.prototype.toString = function () {
  return 'This sweet ' + this.color + ' bicycle has an awesome ' + this.wheelSize + ' wheelset.';
};

Bicycle.prototype.takeForRide = function () {
  return 'Currently riding a shiny ' + this.color + ' bike down the sidewalk!';
};

Bicycle.prototype.validateWheelSize = function(wheelSize) {
  if (this.validWheelSizes.indexOf(wheelSize) == -1) throw "Wheelsize for bikes must be one of " + this.validWheelSizes.join(', ')
}

var bicycleProto = new Bicycle('26"', 'orange');

// Implement a RoadBike using prototypal inheritance of the Bicycle constructor.
// Use the Bicycle constructor ro create a protptype object to use for all RoadBikes.

function RoadBike(wheelSize, color) {
  this.validWheelSizes = ['700C'];
  // Acts similar to validate :foo, inslusion_in: [1, 2, 3]
  this.validateWheelSize(wheelSize);
  this.wheelSize = wheelSize;

  this.color = color;
}

RoadBike.prototype = new Bicycle('26"', 'orange');

// Implement a MountainBike using prototypal inheritance of an instance of the Bicycle constructor
// MountainBikes have a frontSuspension property
function MountainBike(wheelSize, color, frontSuspension) {
  this.validWheelSizes = ['26"', '27.5"', '29"'];
  this.validateWheelSize(wheelSize);  
  this.color = color;
  this.frontSuspension = frontSuspension;
}
MountainBike.prototype = bicycleProto;
