/*

VARIABLES

app = Application Number
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
function getMaxPayment(
    dealerType,
    creditTier,
    creditSubTier,
    offeredDownpaymentPercent,
    reqDownpaymentPercent,
    vehicleClass,
    vehicleType,
    dealerState,
    mileage,
    age,
    offeredCashDownpayment,
    reqTotalDownppayment,
    offeredTotalDownppayment
) {
    var output = 0;
  const tierValues = {
    PLATINUM:
      dealerType === "Franchise" ? { A: 850, default: 750 } : { A: 600, default: 550 },
    GOLD:
      dealerType === "Franchise" ? { A: 600, default: 525 } : { A: 525, default: 500 },
    SILVER:
      dealerType === "Franchise" ? { A: 500, default: 500 } : { A: 500, default: 475 },
    BRONZE: { A: 475, default: 475 },
  };

  if (creditTier in tierValues) {
    output = creditSubTier === "A" ? tierValues[creditTier].A : tierValues[creditTier].default;
  } else {
    output = 1;
  }
  var MaxPayment = output;

  if (
    dealerType === "Franchise" &&
    creditTier === "PLATINUM" &&
    creditSubTier === "A" &&
    ((offeredDownpaymentPercent > 20 && reqDownpaymentPercent > 20) || reqTotalDownppayment >= 6500 || offeredTotalDownppayment >= 6500) &&
    (vehicleClass === 1 || vehicleClass === 8) &&
    mileage < 75000 &&
    age < 5 &&
    (vehicleType === "FULL-SIZE TRUCK" ||
      vehicleType === "MID-SIZE TRUCK" ||
      vehicleType === "FULL-SIZE SUV") &&
    dealerState !== "CA"
  )
    MaxPayment = 900;
  if (
    dealerType === "Franchise" &&
    creditTier === "GOLD" &&
    creditSubTier === "A" &&
    (vehicleType === "FULL-SIZE TRUCK" || vehicleType === "MID-SIZE TRUCK")
  )
    MaxPayment = 750;

  if (
    dealerType === "Franchise" &&
    creditTier === "SILVER" &&
    (creditSubTier === "A") && (vehicleType === "FULL-SIZE TRUCK" || vehicleType === "MID-SIZE TRUCK")
  )
    MaxPayment = 625;

  if (
    dealerType === "Franchise" &&
    creditTier === "BRONZE" &&
    (creditSubTier === "A") && (vehicleType === "FULL-SIZE TRUCK" || vehicleType === "MID-SIZE TRUCK")
  )
    MaxPayment = 500;
  return MaxPayment;
}

module.exports = { getMaxPayment };