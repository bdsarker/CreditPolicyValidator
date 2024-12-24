/*
VARIABLES

app = Application Number
col = Collateral Class
ty = Collateral Type
age = Vehicle Age
mil = Vehicle Mileage
*/

function getMaxTerm(
    collateralClass,
    collateralType,
    age,
    mileage,
    creditTier,
    vehicleValue
) {

  var output = 0;

  if (
      collateralClass === 8 ||
      collateralType === "FULL-SIZE SUV" ||
      collateralType === "FULL-SIZE TRUCK" ||
      collateralType === "MID-SIZE TRUCK"
  ) {
    if (age <= 7 && mileage <= 125000) {
      output = "72";
    } else if (age > 7 && mileage <= 100000) {
      output = "66";
    } else if (
        (age > 7 && mileage > 100000 && mileage <= 125000) ||
        (mileage > 125000 && mileage <= 150000)
    ) {
      output = "60";
    }
  } else if (collateralClass === 1) {
    if ((age <= 6 && mileage <= 50000) || (age <= 5 && mileage <= 75000)) {
      output = "72";
    } else if (
        (age > 6 && age < 9 && mileage <= 50000) ||
        (age > 5 && age < 8 && mileage <= 75000) ||
        (age < 6 && mileage <= 100000)
    ) {
      output = "66";
    } else if (
        (age > 8 && mileage <= 50000) ||
        (age > 7 && mileage <= 75000) ||
        (age > 5 && mileage <= 100000) ||
        (mileage > 100000 && mileage <= 150000)
    ) {
      output = "60";
    }
  } else {
    if ((age <= 6 && mileage <= 50000) || (age <= 6 && mileage <= 75000)) {
      output = "72";
    } else if (
        (age > 4 && age < 7 && mileage <= 50000) ||
        (age > 3 && age < 6 && mileage <= 75000)
    ) {
      output = "66";
    } else if (
        (age > 6 && age < 10 && mileage <= 50000) ||
        (age > 5 && age < 10 && mileage <= 75000) ||
        (age < 10 && mileage <= 100000)
    ) {
      output = "60";
    } else if (
        (age > 9 && mileage <= 50000) ||
        (age > 9 && mileage <= 75000) ||
        (age > 9 && mileage <= 100000) ||
        (mileage > 100000 && mileage <= 125000)
    ) {
      output = "54";
    } else if (mileage > 125000 && mileage <= 150000) {
      output = "48";
    }
  }
  var MaxTerm = output;

//STAGE TWO
  /*
  VARIABLES

  app = Application Number
  te = Term (From Stage One)
  tier = Credit Tier
  bb = Vehicle Value
  */

  if (output >= 66) {
    if ((creditTier === "PLATINUM" || creditTier === "GOLD" || creditTier === "SILVER") && vehicleValue < 12500) {
        output = 66;
    } else if (creditTier === "BRONZE" || creditTier === "INELIGIBLE") {
        output = 60;
    }
  }
  MaxTerm = output;

  return MaxTerm;
}

module.exports = {getMaxTerm};