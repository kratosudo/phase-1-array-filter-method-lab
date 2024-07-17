// Code your solution here
// Function to find all drivers that match the passed in name
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names start with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// Function to check if the name matches in the data structure
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// Export functions for testing
module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};
