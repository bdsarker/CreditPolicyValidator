/*
VARIABLES

app = Application Number
tier = Credit Tier
tot = Requested Total Down (Cash + Trade)
age = Vehicle Age
mil = Vehicle Mileage
cla = Collateral Class
cons = Consumer Type
grd = Zest Static V6 Grade
sub = Zest Static V6 Subgrade
zestfive = Zest V5 Grade
van = Average Vantage Score
class1Orclass8 = cla == 1 OR cla == 8;
dwn = Requested Down Payment %
dwnRec = Offered Down Payment %
reqCash = Requested Cash Down
recCash = Recommended Cash Down
colty = Collateral Type
truckorsuv = Collateral Type == "FULL-SIZE TRUCK" OR Collateral Type == "MID-SIZE TRUCK" OR Collateral Type == "FULL-SIZE SUV";
reqTtl = Requested Total Down Payment
recTtl = Offered Total Down Payment
*/

const {collateralType} = require("./collaterType");

function getCreditSubtire(creditTier,
                          age,
                          mileage,
                          consumerType,
                          staticGrade,
                          staticSubgrade,
                          class1Orclass8,
                          reqTotalDownPercentage,
                          offeredTotalDownPercentage,
                          collateralType,
                          reqTotalDownPayment,
                          offertotalDownPayment) {

var CreditSubtier = "";

var truckorsuv =
    collateralType === "FULL-SIZE TRUCK" ||
    collateralType === "MID-SIZE TRUCK" || collateralType
    === "FULL-SIZE SUV";

  if (creditTier === "PLATINUM") {
    if (
        reqTotalDownPercentage >= 0.20 &&
        offeredTotalDownPercentage >= 0.20 &&
        reqTotalDownPayment >= 5000 &&
        offertotalDownPayment >= 5000 &&
        age < 4 &&
        mileage < 50000
    ) {
      CreditSubtier = "A";
    } else if (
        reqTotalDownPercentage >= 0.20 &&
        offeredTotalDownPercentage >= 0.20 &&
        reqTotalDownPayment >= 5000 &&
        offertotalDownPayment >= 5000 &&
        class1Orclass8
    ) {
      CreditSubtier = "A";
    } else if (reqTotalDownPayment >= 10000 && offertotalDownPayment >= 10000) {
      CreditSubtier = "A";
    } else if (truckorsuv) {
      CreditSubtier = "A";
    } else {
      CreditSubtier = "B";
    }
  } else if (creditTier === "GOLD") {
    if (age < 4 && mileage < 50000) {
      CreditSubtier = "A";
    } else if (class1Orclass8) {
      CreditSubtier = "A";
    } else if (consumerType !== "CONVENTIONAL" && staticGrade === "A" && staticSubgrade <= 2) {
      CreditSubtier = "A";
    } else {
      CreditSubtier = "B";
    }
  } else if (creditTier === "SILVER") {
    if (age < 4 && mileage < 50000) {
      CreditSubtier = "A";
    } else if (class1Orclass8) {
      CreditSubtier = "A";
    } else {
      CreditSubtier = "B";
    }
  } else if (creditTier === "BRONZE") {
    if (age < 4 && mileage < 50000) {
      CreditSubtier = "A";
    } else if (class1Orclass8) {
      CreditSubtier = "A";
    } else {
      CreditSubtier = "B";
    }
  }

  return  CreditSubtier;
}

module.exports= { getCreditSubtire };