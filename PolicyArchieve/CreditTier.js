/*
VARIABLES

cons = Consumer Type      applicant.consumerType
grd = Static V6 Grade     zest.staticGrade
sub = Static V6 Subgrade  zest.staticSubgrade
zestfive = V5 Grade       zest.v5Grade  
sht1 = Short Term Inquiry Under 12 Months for Buyer   riskviewApplicant.shortTermInquiry
sht2 = Short Term Inquiry Under 12 Months for Cobuyer riskviewCoApplicant.shortTermInquiry [if] 
van = Average Vantage Score                           creditApplicant.vantageScore
repo = Number of Auto Repossessions (For Buyer and Cobuyer)   creditApplicant.autoRepoSelfNum
choff = Number of Auto Charge Offs (For Buyer and Cobuyer)    
cla = Collateral Class                
dwn = Offered Total Down Payment
dwper = Offered Down Payment Percentage
reqdwn = Requested Total Down Payment 
reqdwper = Requested Down Payment Percentage
sfv = Zest V5 Average Score
zscr = Zest V6 Static Average Score

*/

if (cons == "CONVENTIONAL") {
  if (grd == "A" && sub == 1 && zestfive == 1) {
    output = "PLATINUM";
  } else if (
    (grd == "A" && sub == 1 && zestfive > 1) ||
    (grd == "A" && sub == 2 && zestfive == 1) ||
    (grd == "A" && sub == 3 && zestfive == 1)
  ) {
    output = "GOLD";
  } else if (
    (grd == "A" && sub == 2 && zestfive > 1) ||
    (grd == "A" && sub == 3 && zestfive > 1) ||
    (grd == "B" && zestfive == 1)
  ) {
    output = "SILVER";
  } else if (grd == "B" && zestfive > 1) {
    output = "BRONZE";
  }
} else {
  if (grd == "A" && sub < 3) {
    output = "PLATINUM";
  } else if ((grd == "A" && sub == 3) || (grd == "B" && sub == 1)) {
    output = "GOLD";
  } else if (grd == "B" && sub > 1) {
    output = "SILVER";
  } else if (
    grd == "C" &&
    ((age < 4 && mil < 5000) || cla == 1 || cla == 8)
  ) {
    output = "BRONZE";
  }
}


var result = output;

if (
  app >= 1 &&
  output == "PLATINUM" &&
  cons == "CONVENTIONAL" &&
  sfv < 0.84 &&
  grd == "A" &&
  sub == 2
)
  result = "GOLD";
if (app >= 1 && output == "PLATINUM" && (cla == 6 || cla == 9)) result = "GOLD";
if (
  app >= 1 &&
  output == "PLATINUM" &&
  grd == "A" &&
  sub == 2 &&
  (choff > 0 || repo > 0)
)
  result = "GOLD";
if (app >= 1 && output == "PLATINUM" && van > 0 && van < 500) result = "GOLD";
if (app >= 1 && output == "PLATINUM" && zscr < 0.9275) result = "GOLD";
if (app >= 1 && output == "PLATINUM" && (sht1 == 1 || sht2 == 1))
  result = "GOLD";
if (app >= 1 && output == "PLATINUM" && grd == "A" && sub == 2 && reqdwper < 20)
  result = "GOLD";
if (app >= 1 && output == "GOLD" && (sht1 == 1 || sht2 == 1)) result = "SILVER";
if (app >= 1 && output == "SILVER" && (sht1 == 1 || sht2 == 1))
  result = "BRONZE";
