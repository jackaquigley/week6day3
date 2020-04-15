const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
 return this.journeys.map((journey) => {
   return journey.startLocation;
 })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => { return journey.endLocation;
 })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter((journey) => {
  return journey.transport === transport;
});
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
return this.journeys.filter((journey) => {
  if (journey.distance > minDistance) {
    return journey.distance
  };
});
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
 return this.journeys.reduce((total, journey) => {
   return total += journey.distance;
 }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {

  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  return this.journeys.filter((journey) => {

    const listOfTransports = journeys.getJourneysByTransport 

  if listOfTransports(unique) {
    return journey.transport
  }
})
}

module.exports = Traveller;
