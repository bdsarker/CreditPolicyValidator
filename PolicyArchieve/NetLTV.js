/*
VARIABLES

app = Application Number
con = Vehicle Condition (New/Used)
ty = Dealer Type
tier = Credit Tier
sbti = Credot Subtier
cla = Collateral Class
coll = Collateral Type
reqdwn = Requested Total Down Payment
*/

if (app >= 1) {
  if (con == "NEW") {
    if (tier == "PLATINUM") {
      output = 105;
    } else if (tier == "GOLD") {
      output = 100;
    } else if (tier == "SILVER") {
      output = 95;
    } else if (tier == "BRONZE") {
      output = 95;
    }
  } else {
    if (ty == "Franchise") {
      if (tier == "PLATINUM") {
        output = 115;
      } else if (tier == "GOLD") {
        output = 110;
      } else if (tier == "SILVER") {
        output = 105;
      } else if (tier == "BRONZE") {
        output = 100;
      }
    } else {
      if (tier == "PLATINUM") {
        output = 110;
      } else if (tier == "GOLD") {
        output = 105;
      } else if (tier == "SILVER") {
        output = 100;
      }
    }
  }
} else {
  output = 1;
}

var result = output;

if (
  app >= 1 &&
  ty == "Franchise" &&
  reqdwn >= 5000 &&
  reqdwn <= 6499 &&
  con != "NEW" &&
  output > 105
)
  result = 105;
if (
  app >= 1 &&
  ty == "Franchise" &&
  reqdwn >= 6500 &&
  reqdwn <= 7999 &&
  output > 100
)
  result = 100;
if (app >= 1 && ty == "Franchise" && reqdwn >= 8000 && output > 95) result = 95;
if (app >= 1 && (cla == 5 || cla == 6 || cla == 7 || cla == 9) && output > 100)
  result = 100;
