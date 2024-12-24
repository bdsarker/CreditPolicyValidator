/*
VARIABLES

ty = Dealer Type
tier = Credit Tier
sbti = Credit Subtier
dwn = Total Down Payment

*/

function  getMaxamountFinanced(
    dealerType,
    creditTier,
    creditSbti,
    totalDownPayment) {

  var output = 1;

  if (dealerType === "Franchise") {
    if (creditTier === "PLATINUM") {
      if (creditSbti === "A") {
        output = 32000;
      } else {
        output = 28000;
      }
    } else if (creditTier === "GOLD") {
      if (creditSbti === "A") {
        output = 25000;
      } else {
        output = 22000;
      }
    } else if (creditTier === "SILVER") {
      if (creditSbti === "A") {
        output = 20000;
      } else {
        output = 18000;
      }
    } else if (creditTier === "BRONZE") {
      output = 16000;
    } else {
      output = 1;
    }
  } else {
    if (creditTier === "PLATINUM") {
      if (creditSbti === "A") {
        output = 24000;
      } else {
        output = 22000;
      }
    } else if (creditTier === "GOLD") {
      if (creditSbti === "A") {
        output = 21000;
      } else {
        output = 19000;
      }
    } else if (creditTier === "SILVER") {
      if (creditSbti === "A") {
        output = 18000;
      } else {
        output = 16000;
      }
    } else {
      output = 1;
    }
  }


  var MaxAmountFinanced = output;

  if (
      dealerType === "Franchise" &&
      creditTier === "PLATINUM" &&
      creditSbti === "A" &&
      totalDownPayment > 9000
  )
    MaxAmountFinanced = 35000;

  return MaxAmountFinanced;
}
module.exports = { getMaxamountFinanced };