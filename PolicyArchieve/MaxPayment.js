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
if (app >= 1) {
  const tierValues = {
    PLATINUM:
      ty === "Franchise" ? { A: 850, default: 750 } : { A: 600, default: 550 },
    GOLD:
      ty === "Franchise" ? { A: 600, default: 525 } : { A: 525, default: 500 },
    SILVER:
      ty === "Franchise" ? { A: 500, default: 500 } : { A: 500, default: 475 },
    BRONZE: { A: 475, default: 475 },
  };

  if (tier in tierValues) {
    output = sbti === "A" ? tierValues[tier].A : tierValues[tier].default;
  } else {
    output = 1;
  }
}

var MaxPayment = output;

if (
  app >= 1 &&
  ty == "Franchise" &&
  tier == "PLATINUM" &&
  sbti == "A" &&
  ((dper > 20 && reqdper > 20) || reqTtl >= 6500 || dwn >= 6500) &&
  (cla == 1 || cla == 8) &&
  mil < 75000 &&
  age < 5 &&
  (col == "FULL-SIZE TRUCK" ||
    col == "MID-SIZE TRUCK" ||
    col == "FULL-SIZE SUV") &&
  stt != "CA"
)
  result = 900;
if (
  app >= 1 &&
  ty == "Franchise" &&
  tier == "GOLD" &&
  sbti == "A" &&
  (col == "FULL-SIZE TRUCK" || col == "MID-SIZE TRUCK")
)
  result = 750;
if (
  app >= 1 &&
  ty == "Franchise" &&
  tier == "SILVER" &&
  (sbti == "A") & (col == "FULL-SIZE TRUCK" || col == "MID-SIZE TRUCK")
)
  result = 625;
if (
  app >= 1 &&
  ty == "Franchise" &&
  tier == "BRONZE" &&
  (sbti == "A") & (col == "FULL-SIZE TRUCK" || col == "MID-SIZE TRUCK")
)
  result = 500;
