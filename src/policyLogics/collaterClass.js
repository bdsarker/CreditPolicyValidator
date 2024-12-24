const fs = require("fs");
const path = "../static/collateralClass.csv";

function readCsvSync(fileName) {
  const collateralData = [];
  const fileData = fs.readFileSync(fileName, "utf-8"); // Read file synchronously

  fileData.split("\n").forEach((line, index) => {
    if (index === 0) return; // Skip header row

    const [make, model, collateralClass] = line.split(","); // Split each row by comma
    if (make && model && collateralClass) {
      collateralData.push({
        make: make.trim(),
        model: model.trim(),
        class: collateralClass.trim(),
      });
    }
  });

  return collateralData;
}

function collateralClass(make, model) {
  const collateralData = readCsvSync(path); // Read CSV synchronously

  //console.log(make.toLowerCase());
  //console.log(make.toLowerCase().indexOf("volksw"));

  const result = collateralData.find(
    (item) =>
      make.toLowerCase().indexOf(item.make.toLowerCase()) > -1 &&
      model.toLowerCase().indexOf(item.model.toLowerCase()) > -1
  );

  if (result) {
    return result.class; // Return the collateral class if found
  } else {
    return ""; // Return empty string if not found
  }
}

module.exports = { collateralClass };
