// Runtime: O(n)
function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    // n steps
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}


function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}


function findSock(object) {
  if (object.sock) return "sock";
}

  hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true
  }


if (require.main === module) {

  
}

module.exports = hasTargetSum;