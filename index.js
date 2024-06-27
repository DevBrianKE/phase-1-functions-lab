function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}
  
function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}
  
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}
  
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0; 
} else if (distance > 400 && distance <= 2000) {
    const chargeableDistance = distance - 400;
    const fare = chargeableDistance * 0.02; // 2 cents per foot
    return fare;
} else if (distance > 2000 && distance <= 2500) {
    return 25; 
} else if (distance > 2500) {
    return 'cannot travel that far';
    }
  }
  
  