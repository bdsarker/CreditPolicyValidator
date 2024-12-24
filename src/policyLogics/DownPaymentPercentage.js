/*
VARIABLES

ty = Dealer Type      source.type
tier = Credit Tier
sbti = Credit Subtier
rnk = Dealer Rank
cla = Collateral Class
reqdwn = Requested Total Down Payment
dwn = Offered Total Down Payment
val = Collateral Value [what is this?]

*/

function  downPaymentPercent(
    dealerType,
    creditTier,
    collateralClass,
    totalDownPaymentReq,
    collateralValue) {

    var output = 20;

    if (dealerType === "Franchise") {
      if (creditTier === "PLATINUM") {
        output = 10;
      } else {
        output = 15;
      }
    } else {
      if (creditTier === "PLATINUM" || creditTier === "GOLD") {
        output = 15;
      } else {
        output = 20;
      }
    }

    var result = output;

    if (
      creditTier === "GOLD" &&
      ((totalDownPaymentReq >= 2000 && collateralValue < 20000) ||
          totalDownPaymentReq >= 3000)
    ) {
      result = 10;
    }
    if ((collateralClass === 5 || collateralClass === 6 || collateralClass === 7 || collateralClass === 9) && output < 20)
    result = 20;

    return result * 0.01;
}
module.exports = { downPaymentPercent };