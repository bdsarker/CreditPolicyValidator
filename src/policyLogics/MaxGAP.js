/*
VARIABLES

app = Application Number
stt = Dealer State
ltv = Contract Net LTV
ty = Dealer Type
chn = Dealer Channel
*/

function getMaxGap(
    dealerState,
    reqNetLtv,
    dealerType,
    dealerChannel) {

  var output = 0;
  
  if (dealerState === "SC") {
    if (reqNetLtv <= 0.80) output = 0;
    else if (reqNetLtv > 0.80) {
      if (dealerType === "Franchise" || dealerChannel === "VPS") {
        output = 1200;
      } else {
        output = 899;
      }
    }
  } else if (dealerState !== "SC") {
    if (reqNetLtv <= 0.70) output = 0;
    else if (reqNetLtv > 0.70) {
      if (dealerType === "Franchise" || dealerChannel === "VPS") {
        output = 1200;
      } else {
        output = 899;
      }
    }
  }
  return output;
}

module.exports = { getMaxGap };
