/*
VARIABLES

app = Application Type
prg = Credit Program (SAFCOMP/SAFCO)*
ty = Application Type
*/

function getMinIncome(prg, ty) {
  if (prg === "SAFCOMP") {
    output = 1720;
  } else {
    if (ty === "Individual") output = 1850;
    else if (ty === "Joint") output = 2500;
  }
}

var result = output;
