/*
VARIABLES

app = Application Number
val = Vehicle Value
ty/sourceType = Dealer Type
tier = Credit Tier
sbti = Credit Subtier
recLTV = Offered Net LTV
reqLTV = Requested Net LTV
var coll = Collateral Type
var cla = Collateral Class
var unit = Unit Type

*/

function getMaxBackend(
    vehicleValue,
    sourceType,
    creditTier,
    creditSubTier,
    offeredNetLTV,
    reqNetLtv,
    collateralClass,
    collateralType
) {
  var output = 0;

  if (vehicleValue < 12000) {
    output = 3000;
  } else {
    if (sourceType === "Franchise") {
      if (creditTier === "PLATINUM") {
        if (collateralType === "TRUCK" || collateralType === "PREMIUM SUV") {
          if (vehicleValue > 20000 && vehicleValue < 25000) {
            output = 5500;
          } else if (vehicleValue > 25000 && vehicleValue < 30000) {
            output = 6000;
          } else if (vehicleValue > 30000 && vehicleValue < 35000) {
            output = 6500;
          } else if (vehicleValue > 35000 && vehicleValue < 40000) {
            output = 7000;
          } else if (vehicleValue >= 40000) {
            output = 7500;
          } else {
            output = 5000;
          }
        } else {
          if (vehicleValue > 20000 && vehicleValue < 25000 && offeredNetLTV < 100 && reqNetLtv < 100) {
            output = 5000;
          } else if (
              vehicleValue > 25000 &&
              vehicleValue < 30000 &&
              offeredNetLTV < 100 &&
              reqNetLtv < 100
          ) {
            output = 5500;
          } else if (
              vehicleValue > 30000 &&
              vehicleValue < 35000 &&
              offeredNetLTV < 100 &&
              reqNetLtv < 100
          ) {
            output = 6000;
          } else if (
              vehicleValue > 35000 &&
              vehicleValue < 40000 &&
              offeredNetLTV < 100 &&
              reqNetLtv < 100
          ) {
            output = 6500;
          } else if (vehicleValue >= 40000 && offeredNetLTV < 100 && reqNetLtv < 100) {
            output = 7500;
          } else {
            output = 4500;
          }
        }
      } else if (creditTier === "GOLD") {
        if (collateralType === "TRUCK" || collateralType === "PREMIUM SUV") {
          if (vehicleValue > 20000 && vehicleValue < 25000) {
            if (creditSubTier === "A") {
              output = 5000;
            } else if (creditSubTier === "B") {
              output = 4500;
            }
          } else if (vehicleValue >= 25000) {
            if (creditSubTier === "A") {
              output = 5500;
            } else if (creditSubTier === "B") {
              output = 5000;
            }
          } else {
            if (creditSubTier === "A") {
              output = 5000;
            } else if (creditSubTier === "B") {
              output = 4500;
            }
          }
        } else {
          if (vehicleValue > 20000 && vehicleValue < 25000) {
            if (creditSubTier === "A") {
              output = 4500;
            } else if (creditSubTier === "B") {
              output = 4000;
            }
          } else if (
              vehicleValue >= 25000 &&
              vehicleValue < 30000 &&
              offeredNetLTV < 100 &&
              reqNetLtv < 100
          ) {
            if (creditSubTier === "A") {
              output = 5000;
            } else if (creditSubTier === "B") {
              output = 4500;
            }
          } else if (
              vehicleValue >= 30000 &&
              vehicleValue < 35000 &&
              offeredNetLTV < 100 &&
              reqNetLtv < 100
          ) {
            if (creditSubTier === "A") {
              output = 5000;
            } else if (creditSubTier === "B") {
              output = 4500;
            }
          } else if (vehicleValue >= 35000 && offeredNetLTV < 100 && reqNetLtv < 100) {
            if (creditSubTier === "A") {
              output = 5000;
            } else if (creditSubTier === "B") {
              output = 4500;
            }
          } else {
            output = 4000;
          }
        }
      } else if (creditTier === "SILVER") {
        if (collateralType === "TRUCK" || collateralType === "PREMIUM SUV") {
          output = 4000;
        } else {
          output = 3500;
        }
      } else if (creditTier === "BRONZE") {
        if (collateralType === "TRUCK" || collateralType === "PREMIUM SUV") {
          output = 3500;
        } else {
          output = 3000;
        }
      } else {
        output = 1;
      }
    } else {
      if (creditTier === "PLATINUM") {
        output = 3500;
      } else if (creditTier === "GOLD") {
        output = 3000;
      } else if (creditTier === "SILVER") {
        output = 2500;
      } else {
        output = 1;
      }
    }
  }
 return output;
}

module.exports = {getMaxBackend};