/*
VARIABLES

ty = Dealer Type
cla = Collateral Class
*/

function getMaxVehicleAge(dealerType, collateralClass) {
  var output = 0;

  if (dealerType === "Independent") {
    if (collateralClass === 6 || collateralClass === 7 || collateralClass === 9) {
      output = 6;
    } else {
      output = 8;
    }
  } else {
    if (collateralClass === 6 || collateralClass === 7 || collateralClass === 9) {
      output = 6;
    } else {
      output = 11;
    }
  }
    return output;
}

module.exports = {getMaxVehicleAge};

