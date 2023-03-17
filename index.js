// Code your solution in this file!
function distanceFromHqInBlocks(pickUpPoint) {
  if (pickUpPoint >= 42) {
    return pickUpPoint - 42;
  } else {
    return 42 - pickUpPoint;
  }
}

function calculatesFarePrice(pickUp, dropOff) {
  let numberOfFeet = distanceTravelledInFeet(pickUp, dropOff);
  if (numberOfFeet > 0 && numberOfFeet <= 400) {
    return 0;
  } else if (numberOfFeet > 400 && numberOfFeet <= 2000) {
    let newDistanceInFeet = numberOfFeet - 400;
    return newDistanceInFeet * 0.02;
  } else if (numberOfFeet > 2000 && numberOfFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

function distanceTravelledInFeet(startPoint, destination) {
  let numberOfBlocks = destination - startPoint;
  if (numberOfBlocks >= 0) {
    return numberOfBlocks * 264;
  } else {
    numberOfBlocks = startPoint - destination;
    return numberOfBlocks * 264;
  }
}

function distanceFromHqInFeet(xCoordinate) {
  return distanceFromHqInBlocks(xCoordinate) * 264;
}
