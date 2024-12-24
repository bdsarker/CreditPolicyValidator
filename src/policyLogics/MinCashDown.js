/*
VARIABLES

app = Application Number
ty = Dealer Type
tier = Credit Tier
dwn = Requested Total Down Payment

*/

function minCashDownpayment(dealerType, creditTier, reqTotalDownPayment) {
  var  output = 0;
  if (dealerType === "Franchise") {
    if (creditTier === "PLATINUM") {
      output = 0;
    } else if (
      (creditTier === "GOLD" || creditTier === "SILVER" || creditTier === "BRONZE") &&
      reqTotalDownPayment >= 5000
    ) {
      output = 0;
    }
  } else {
    output = 1000;
  }
    return output;
}

module.exports = {minCashDownpayment};