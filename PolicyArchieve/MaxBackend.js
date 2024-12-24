/*
VARIABLES

app = Application Number
val = Vehicle Value
ty = Dealer Type
tier = Credit Tier
sbti = Credit Subtier
recLTV = Offered Net LTV
reqLTV = Requested Net LTV
var coll = Collateral Type
var cla = Collateral Class
var unit = Unit Type

*/

if (app >= 1) {
  if (val < 12000) {
    output = 3000;
  } else {
    if (ty == "Franchise") {
      if (tier == "PLATINUM") {
        if (unit == "TRUCK" || unit == "PREMIUM SUV") {
          if (val > 20000 && val < 25000) {
            output = 5500;
          } else if (val > 25000 && val < 30000) {
            output = 6000;
          } else if (val > 30000 && val < 35000) {
            output = 6500;
          } else if (val > 35000 && val < 40000) {
            output = 7000;
          } else if (val >= 40000) {
            output = 7500;
          } else {
            output = 5000;
          }
        } else {
          if (val > 20000 && val < 25000 && recLTV < 100 && reqLTV < 100) {
            output = 5000;
          } else if (
            val > 25000 &&
            val < 30000 &&
            recLTV < 100 &&
            reqLTV < 100
          ) {
            output = 5500;
          } else if (
            val > 30000 &&
            val < 35000 &&
            recLTV < 100 &&
            reqLTV < 100
          ) {
            output = 6000;
          } else if (
            val > 35000 &&
            val < 40000 &&
            recLTV < 100 &&
            reqLTV < 100
          ) {
            output = 6500;
          } else if (val >= 40000 && recLTV < 100 && reqLTV < 100) {
            output = 7500;
          } else {
            output = 4500;
          }
        }
      } else if (tier == "GOLD") {
        if (unit == "TRUCK" || unit == "PREMIUM SUV") {
          if (val > 20000 && val < 25000) {
            if (sbti == "A") {
              output = 5000;
            } else if (sbti == "B") {
              output = 4500;
            }
          } else if (val >= 25000) {
            if (sbti == "A") {
              output = 5500;
            } else if (sbti == "B") {
              output = 5000;
            }
          } else {
            if (sbti == "A") {
              output = 5000;
            } else if (sbti == "B") {
              output = 4500;
            }
          }
        } else {
          if (val > 20000 && val < 25000) {
            if (sbti == "A") {
              output = 4500;
            } else if (sbti == "B") {
              output = 4000;
            }
          } else if (
            val >= 25000 &&
            val < 30000 &&
            recLTV < 100 &&
            reqLTV < 100
          ) {
            if (sbti == "A") {
              output = 5000;
            } else if (sbti == "B") {
              output = 4500;
            }
          } else if (
            val >= 30000 &&
            val < 35000 &&
            recLTV < 100 &&
            reqLTV < 100
          ) {
            if (sbti == "A") {
              output = 5000;
            } else if (sbti == "B") {
              output = 4500;
            }
          } else if (val >= 35000 && recLTV < 100 && reqLTV < 100) {
            if (sbti == "A") {
              output = 5000;
            } else if (sbti == "B") {
              output = 4500;
            }
          } else {
            output = 4000;
          }
        }
      } else if (tier == "SILVER") {
        if (unit == "TRUCK" || unit == "PREMIUM SUV") {
          output = 4000;
        } else {
          output = 3500;
        }
      } else if (tier == "BRONZE") {
        if (unit == "TRUCK" || unit == "PREMIUM SUV") {
          output = 3500;
        } else {
          output = 3000;
        }
      } else {
        output = 1;
      }
    } else {
      if (tier == "PLATINUM") {
        output = 3500;
      } else if (tier == "GOLD") {
        output = 3000;
      } else if (tier == "SILVER") {
        output = 2500;
      } else {
        output = 1;
      }
    }
  }
} else {
  output = 0;
}

var MaxBackend = output;
