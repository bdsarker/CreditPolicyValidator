/*
VARIABLES


cons = Consumer Type      applicant.consumerType

sht1 = Short Term Inquiry Under 12 Months for Buyer   riskviewApplicant.shortTermInquiry
sht2 = Short Term Inquiry Under 12 Months for Cobuyer riskviewCoapplicant.shortTermInquiry

van = Average Vantage Score                                     creditApplicant.vantageScore
repo = Number of Auto Repossessions (For Buyer and Cobuyer)     creditApplicant.autoRepoSelfNum
choff = Number of Auto Charge Offs (For Buyer and Cobuyer)      creditApplicant.autoCoffNum

cla = Collateral Class      // collateralClass(make, model)

dwn = Offered Total Down Payment          dealOffered.totalDownPayment
dwper = Offered Down Payment Percentage   dealOffered.totalDownPercentage

reqdwn = Requested Total Down Payment           dealRequested.totalDownPayment
reqdwper = Requested Down Payment Percentage    dealRequested.totalDownPercentage

grd = Static V6 Grade               zest.staticGrade
sfv = Zest V5 Average Score         zest.applicationV5Score
zscr = Zest V6 Static Average Score zest.applicationV6StaticScore
sub = Static V6 Subgrade            zest.staticSubgrade
zestfive = V5 Grade                 zest.v5Grade

*/
function getCreditTier(
  consumerType,
  staticGrade,
  staticSubgrade,
  zestv5Grade,
  ShortTermInquiryBuyer,
  ShortTermInquiryCoBuyer,
  vantageScore,
  AutoRepossessionsNum,
  AutoChargeOffNum,
  CollateralClass,
  reqDownPayPer,
  zestV5AvgScore,
  zestV6StaticAvgScore,
  age,
  mileage
) {
  var output = "";
  var result = "default";

  if (consumerType === "CONVENTIONAL") {
    if (staticGrade === "A" && staticSubgrade === 1 && zestv5Grade == 1) {
      output = "PLATINUM";
    } else if (
      (staticGrade === "A" && staticSubgrade == 1 && zestv5Grade > 1) ||
      (staticGrade === "A" && staticSubgrade === 2 && zestv5Grade === 1) ||
      (staticGrade === "A" && staticSubgrade === 3 && zestv5Grade === 1)
    ) {
      output = "GOLD";
    } else if (
      (staticGrade === "A" && staticSubgrade === 2 && zestv5Grade > 1) ||
      (staticGrade === "A" && staticSubgrade === 3 && zestv5Grade > 1) ||
      (staticGrade === "B" && zestv5Grade === 1)
    ) {
      output = "SILVER";
    } else if (staticGrade === "B" && zestv5Grade > 1) {
      output = "BRONZE";
    }
  } else {
    if (staticGrade === "A" && staticSubgrade < 3) {
      output = "PLATINUM";
    } else if (
      (staticGrade === "A" && staticSubgrade === 3) ||
      (staticGrade === "B" && staticSubgrade === 1)
    ) {
      output = "GOLD";
    } else if (staticGrade === "B" && staticSubgrade > 1) {
      output = "SILVER";
    } else if (
      staticGrade === "C" &&
      ((age < 4 && mileage < 5000) || CollateralClass === 1 || CollateralClass === 8)
    ) {
      output = "BRONZE";
    }
  }
  result = output;

  if (
    output === "PLATINUM" &&
    consumerType === "CONVENTIONAL" &&
    zestV5AvgScore < 0.84 &&
    staticGrade === "A" &&
    staticSubgrade === 2
  )
    result = "GOLD";

  if (output === "PLATINUM" && (CollateralClass === 6 || CollateralClass === 9))
    result = "GOLD";
  if (
    output === "PLATINUM" &&
    staticGrade === "A" &&
    staticSubgrade === 2 &&
    (AutoChargeOffNum > 0 || AutoRepossessionsNum > 0)
  )
    result = "GOLD";
  if (output === "PLATINUM" && vantageScore > 0 && vantageScore < 500)
    result = "GOLD";
  if (output === "PLATINUM" && zestV6StaticAvgScore < 0.9275) result = "GOLD";
  if (
    output === "PLATINUM" &&
    (ShortTermInquiryBuyer === 1 || ShortTermInquiryCoBuyer === 1)
  )
    result = "GOLD";
  if (
    output === "PLATINUM" &&
    staticGrade === "A" &&
    staticSubgrade === 2 &&
    reqDownPayPer < 0.2
  )
    result = "GOLD";
  if (
    output === "GOLD" &&
    (ShortTermInquiryBuyer === 1 || ShortTermInquiryCoBuyer === 1)
  )
    result = "SILVER";
  if (
    output === "SILVER" &&
    (ShortTermInquiryBuyer === 1 || ShortTermInquiryCoBuyer === 1)
  )
    result = "BRONZE";

  return result;
}
module.exports = { getCreditTier };
