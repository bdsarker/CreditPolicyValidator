/*
VARIABLES

app = Application Number
ty = Dealer Type
tier = Credit Tier
*/

if (app >= 1) {
  if (ty == "Franchise") {
    if (tier == "PLATINUM") {
      output = 60;
    } else if (tier == "GOLD") {
      output = 60;
    } else if (tier == "SILVER") {
      output = 55;
    } else if (tier == "BRONZE") {
      output = 55;
    }
  } else {
    output = 55;
  }
}

var dti = output;
