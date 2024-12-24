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

if (app >= 1) {
  if (tier == "PLATINUM") {
    if (
      dwn >= 20 &&
      dwnRec >= 20 &&
      reqTtl >= 5000 &&
      recTtl >= 5000 &&
      age < 4 &&
      mil < 50000
    ) {
      output = "A";
    } else if (
      dwn >= 20 &&
      dwnRec >= 20 &&
      reqTtl >= 5000 &&
      recTtl >= 5000 &&
      class1Orclass8
    ) {
      output = "A";
    } else if (reqTtl >= 10000 && recTtl >= 10000) {
      output = "A";
    } else if (truckorsuv) {
      output = "A";
    } else {
      output = "B";
    }
  } else if (tier == "GOLD") {
    if (age < 4 && mil < 50000) {
      output = "A";
    } else if (class1Orclass8) {
      output = "A";
    } else if (cons != "CONVENTIONAL" && grd == "A" && sub <= 2) {
      output = "A";
    } else {
      output = "B";
    }
  } else if (tier == "SILVER") {
    if (age < 4 && mil < 50000) {
      output = "A";
    } else if (class1Orclass8) {
      output = "A";
    } else {
      output = "B";
    }
  } else if (tier == "BRONZE") {
    if (age < 4 && mil < 50000) {
      output = "A";
    } else if (class1Orclass8) {
      output = "A";
    } else {
      output = "B";
    }
  } else {
    output = "";
  }
}

var CreditSubtier = output;
