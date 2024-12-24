/*
VARIABLES

con = Vehicle Condition (New/Used)
ty = Dealer Type
tier = Credit Tier
sbti = Credot Subtier
cla = Collateral Class
coll = Collateral Type
reqdwn = Requested Total Down Payment
*/

function  getMaxNetLTV(
    vehicleCondition,
    dealerType,
    creditTier,
    creditSubTier,
    CollateralClass,
    CollateralType,
    reqTotalDownPayment
) {
  var output = 0;

  if (vehicleCondition === "NEW") {
    if (creditTier === "PLATINUM") {
      output = 105;
    } else if (creditTier === "GOLD") {
      output = 100;
    } else if (creditTier === "SILVER") {
      output = 95;
    } else if (creditTier === "BRONZE") {
      output = 95;
    }
  } else {
    if (dealerType === "Franchise") {
      if (creditTier === "PLATINUM") {
        output = 115;
      } else if (creditTier === "GOLD") {
        output = 110;
      } else if (creditTier === "SILVER") {
        output = 105;
      } else if (creditTier === "BRONZE") {
        output = 100;
      }
    } else {
      if (creditTier === "PLATINUM") {
        output = 110;
      } else if (creditTier === "GOLD") {
        output = 105;
      } else if (creditTier === "SILVER") {
        output = 100;
      }
    }
  }

  var result = output;

  if (
    dealerType === "Franchise" &&
    reqTotalDownPayment >= 5000 &&
    reqTotalDownPayment <= 6499 &&
    vehicleCondition !== "NEW" &&
    output > 105
  )
    result = 105;
  if (
    dealerType === "Franchise" &&
    reqTotalDownPayment >= 6500 &&
    reqTotalDownPayment <= 7999 &&
    output > 100
  )
    result = 100;
  if (dealerType === "Franchise" && reqTotalDownPayment >= 8000 && output > 95) result = 95;
  if ((CollateralClass === 5 || CollateralClass === 6 || CollateralClass === 7 || CollateralClass === 9) && output > 100)
    result = 100;
  return result;
}

module.exports = { getMaxNetLTV };
