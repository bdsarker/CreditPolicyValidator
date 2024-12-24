/*
VARIABLES

app = Application Number
ty = Dealer Type
cla = Collateral Class
*/

if (app >= 1) {
  if (ty == "Independent") {
    if (cla == 6 || cla == 7 || cla == 9) {
      output = 70000;
    } else if (cla == 10) {
      output = 1;
    } else {
      output = 100000;
    }
  } else {
    if (cla == 6 || cla == 7 || cla == 9) {
      output = 70000;
    } else if (cla == 10) {
      output = 1;
    } else {
      output = 150000;
    }
  }
}

var result = output;
