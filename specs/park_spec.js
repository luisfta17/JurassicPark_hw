const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park1;
  let dinosaur;
  let dinosaur2;
  beforeEach(function () {
    park1 = new Park("Acarigua", 15);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('rex', 'carnivore', 100);
  })

  it('should have a name', function () {
    const actual = park1.name;
    assert.strictEqual(actual, "Acarigua");
  });

  it('should have a ticket price', function(){
    const actual = park1.price;
    assert.strictEqual(actual, 15);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park1.dinos.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park1.addDino(dinosaur);
    const actual = park1.dinos.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park1.addDino(dinosaur);
    park1.removeDino(dinosaur);
    const actual = park1.dinos.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park1.addDino(dinosaur);
    park1.addDino(dinosaur2);
    const actual = park1.findMostPopularDino().guestsAttractedPerDay;
    assert.strictEqual(actual, 100);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park1.addDino(dinosaur);
    park1.addDino(dinosaur2);
    const actual = park1.findDinoByType("rex");
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park1.addDino(dinosaur);
    park1.addDino(dinosaur2);
    park1.removeDinoByType("rex");
    const actual = park1.dinos;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

});
