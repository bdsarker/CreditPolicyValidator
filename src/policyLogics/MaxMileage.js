/*
VARIABLES

app = Application Number
ty = Dealer Type
cla = Collateral Class
*/

function  getMaxMileage(dealerType, collateralClass) {
  var output = 0;
  if (dealerType == "Independent") {
    if (collateralClass == 6 || collateralClass == 7 || collateralClass == 9) {
      output = 70000;
    } else if (collateralClass == 10) {
      output = 1;
    } else {
      output = 100000;
    }
  } else {
    if (collateralClass == 6 || collateralClass == 7 || collateralClass == 9) {
      output = 70000;
    } else if (collateralClass == 10) {
      output = 1;
    } else {
      output = 150000;
    }
  }
  return output;
}

module.exports = { getMaxMileage };