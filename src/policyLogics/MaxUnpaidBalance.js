/*
VARIABLES
ty = Dealer Type
tier = Credit Tier
sbti = Credit Subtier
dper = Offered Down Payment Percentage
reqdper = Requested Down Payment Percentage
cla = Vehicle Class
col = Vehicle Type
stt = Dealer State
mil = Vehicle Mileage
age = Vehicle Age
reqCash = Requested Cash Down
recCash = Offered Cash Down
reqTtl = Requested Total Down Payment
dwn = Offered Total Down Payment

*/

function  getMaxUnpaidBalance (
    dealerType,
    creditTier,
    creditSubtier,
    offeredDownpaymentPercent,
    requestedDownpaymentPercent,
    collateralType,
    dealerState,
    mileage,
    age,
    reqTotalDownPayment,
    offeredTotalDownPayment
) {
  if (dealerType === "Franchise") {
    if (creditTier === "PLATINUM") {
      if (creditSubtier === "A") {
        output = 35000;
      } else {
        output = 30000;
      }
    } else if (creditTier === "GOLD") {
      if (creditSubtier === "A") {
        output = 25000;
      } else {
        output = 21000;
      }
    } else if (creditTier === "SILVER") {
      if (creditSubtier === "A") {
        output = 21000;
      } else {
        output = 18000;
      }
    } else if (creditTier === "BRONZE") {
      if (creditSubtier === "A") {
        output = 18000;
      } else {
        output = 16000;
      }
    } else {
      output = 1;
    }
  } else {
    if (creditTier === "PLATINUM") {
      if (creditSubtier === "A") {
        output = 24000;
      } else {
        output = 22000;
      }
    } else if (creditTier === "GOLD") {
      if (creditSubtier === "A") {
        output = 22000;
      } else {
        output = 19000;
      }
    } else if (creditTier === "SILVER") {
      if (creditSubtier === "A") {
        output = 19000;
      } else {
        output = 16000;
      }
    } else {
      output = 1;
    }
  }
  var result = output;

  if (
      dealerType === "Franchise" &&
      creditTier === "PLATINUM" &&
      creditSubtier === "A" &&
      ((offeredDownpaymentPercent > 20 && requestedDownpaymentPercent > 20) || reqTotalDownPayment >= 6500 || offeredTotalDownPayment >= 6500) &&
      (cla === 1 || cla === 8) &&
      mileage < 75000 &&
      age < 5 &&
      (collateralType === "FULL-SIZE TRUCK" ||
          collateralType === "MID-SIZE TRUCK" ||
          collateralType === "FULL-SIZE SUV") &&
      dealerState != "CA"
  )
    result = 38000;
  if (
      dealerType === "Franchise" &&
      creditTier === "GOLD" &&
      creditSubtier === "A" &&
      (collateralType === "FULL-SIZE TRUCK" || collateralType === "MID-SIZE TRUCK")
  )
    result = 30000;
  if (
      dealerType === "Franchise" &&
      creditTier === "SILVER" &&
      (creditSubtier === "A") & (collateralType === "FULL-SIZE TRUCK" || collateralType === "MID-SIZE TRUCK")
  )
    result = 25000;
  if (
      dealerType === "Franchise" &&
      creditTier === "BRONZE" &&
      (creditSubtier === "A") & (collateralType === "FULL-SIZE TRUCK" || collateralType === "MID-SIZE TRUCK")
  )
    result = 20000;

    return result;
}

module.exports = {getMaxUnpaidBalance};