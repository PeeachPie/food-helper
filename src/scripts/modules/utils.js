const fs = require('fs');

function writeJSON(pathToJSON, object) {
  fs.writeFile(pathToJSON, JSON.stringify(object), (err) => {
    if (err) { throw err; }
  });
}
 
function addToJSON (pathToJSON, name, object) {
  const data = require(pathToJSON);
  const absolutePathToJSON = require.resolve(pathToJSON)

  data[name] = object;

  writeJSON(absolutePathToJSON, data)
}

module.exports = { addToJSON, writeJSON }