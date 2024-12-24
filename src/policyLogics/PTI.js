/*
VARIABLES

app = Application Number
ty = Dealer Type
tier = Credit Tier
*/

if (app >= 1) {
  if (ty == "Franchise") {
    if (tier == "PLATINUM") {
      output = 18;
    } else if (tier == "GOLD") {
      output = 16;
    } else if (tier == "SILVER" || tier == "BRONZE") {
      output = 15;
    }
  } else {
    if (tier == "PLATINUM") {
      output = 16;
    } else if (tier == "GOLD") {
      output = 15;
    } else if (tier == "SILVER") {
      output = 14;
    } else {
      output = 14;
    }
  }
} else {
  output = 14;
}

var PTI = output;
