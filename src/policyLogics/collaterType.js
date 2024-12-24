const fs = require("fs");
const path = "../static/CollateralType.csv";

function readCsvSync(fileName) {
  const collateralData = [];
  const fileData = fs.readFileSync(fileName, "utf-8"); // Read file synchronously

  fileData.split("\n").forEach((line, index) => {
    if (index === 0) return; // Skip header row

    const [make, model, collateralType] = line.split(","); // Split each row by comma
    if (make && model && collateralType) {
      collateralData.push({
        make: make.trim(),
        model: model.trim(),
        type: collateralType.trim(),
      });
    }
  });

  return collateralData;
}

function collateralType(make, model) {
  const collateralData = readCsvSync(path); // Read CSV synchronously

  //console.log(make.toLowerCase());
  //console.log(make.toLowerCase().indexOf("volksw"));

  const result = collateralData.find(
    (item) =>
      make.toLowerCase().indexOf(item.make.toLowerCase()) > -1 &&
      model.toLowerCase().indexOf(item.model.toLowerCase()) > -1
  );

  if (result) {
    return result.type; // Return the collateral  type if found
  } else {
    return ""; // Return empty string if not found
  }
}

module.exports = { collateralType };