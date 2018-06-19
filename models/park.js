const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.dinos = [];
}

Park.prototype.addDino = function (dino) {
this.dinos.push(dino);
};

Park.prototype.removeDino = function (dino) {
  var index = this.dinos.indexOf(dino);
  if (index !== -1) this.dinos.splice(index, 1);
};

Park.prototype.findMostPopularDino = function () {
  var total = 0;
  var mostPopular;
  for (dinosaur of this.dinos) {
    if(dinosaur.guestsAttractedPerDay > total){
      total = dinosaur.guestsAttractedPerDay;
      mostPopular = dinosaur;
    }
  }
  return mostPopular;
};

Park.prototype.findDinoByType = function (type) {
  var arrayofDinos = []
  for (dinosaur of this.dinos) {
    if(dinosaur.species === type){
      arrayofDinos.push(dinosaur);
    }
  }
  return arrayofDinos;
};

Park.prototype.removeDinoByType = function (type) {
  for (dinosaur of this.dinos) {
    if(dinosaur.species === type){
      this.removeDino(dinosaur);
    }
  }
};

module.exports = Park;
