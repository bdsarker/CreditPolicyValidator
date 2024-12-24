/*
VARIABLES

app = Application Number
ty = Dealer Type
tier = Credit Tier
*/

function getDti(dealerType, creditTier)
{
  if (dealerType === "Franchise") {
    if (creditTier === "PLATINUM") {
      output = 60;
    } else if (creditTier === "GOLD") {
      output = 60;
    } else if (creditTier === "SILVER") {
      output = 55;
    } else if (creditTier === "BRONZE") {
      output = 55;
    }
  } else {
    output = 55;
  }
  return output;
}

module.exports={getDti};