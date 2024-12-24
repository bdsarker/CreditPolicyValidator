const fs = require("fs");
const path = "../static/application.json";

function getVehicleData() {
  const data = fs.readFileSync(path, "utf-8"); // Read the file synchronously
  const jsonData = JSON.parse(data); // Parse the JSON data

  const make = jsonData.vehicle?.make; // Extract the make
  const model = jsonData.vehicle?.model; // Extract the model
  const age = jsonData.vehicle?.age; // Extract the year
  const mileage = jsonData.vehicle?.mileage; // Extract the milage
  const condition = jsonData.vehicle?.condition; // Extract the condition

  return { make, model, age, mileage,condition }; // Return the values
}

/*
for Credit Tier vaiables:
cons = Consumer Type      applicant.consumerType

sht1 = Short Term Inquiry Under 12 Months for Buyer   riskviewApplicant.shortTermInquiry
sht2 = Short Term Inquiry Under 12 Months for Cobuyer riskviewCoapplicant.shortTermInquiry

van = Average Vantage Score                                     creditApplicant.vantageScore
repo = Number of Auto Repossessions (For Buyer and Cobuyer)     creditApplicant.autoRepoSelfNum
choff = Number of Auto Charge Offs (For Buyer and Cobuyer)      creditApplicant.autoCoffNum

cla = Collateral Class      // collateralClass(make, model)

dwn = Offered Total Down Payment          dealOffered.totalDownPayment
dwper = Offered Down Payment Percentage   dealOffered.totalDownPercentage

reqdwn = Requested Total Down Payment           dealRequested.totalDownPayment
reqdwper = Requested Down Payment Percentage    dealRequested.totalDownPercentage

grd = Static V6 Grade               zest.staticGrade
sfv = Zest V5 Average Score         zest.applicationV5Score
zscr = Zest V6 Static Average Score zest.applicationV6StaticScore
sub = Static V6 Subgrade            zest.staticSubgrade
zestfive = V5 Grade                 zest.v5Grade

*/

function getApplicant() {
  const data = fs.readFileSync(path, "utf-8"); // Read the file synchronously
  const jsonData = JSON.parse(data); // Parse the JSON data

  const consumerType = jsonData.applicant?.consumerType;
  return { consumerType };
}

function getSourceDealer(){
    const data = fs.readFileSync(path, "utf-8"); // Read the file synchronously
    const jsonData = JSON.parse(data); // Parse the JSON data
    const sourceType = jsonData.source?.type;
    const territory = jsonData.source?.territory;
    const dealerChannel = jsonData.dealerChannel;
    const internalCode = jsonData.source?.internalCode;
    return {sourceType, territory, dealerChannel, internalCode};
}
function getvehicleValuation(){
    const data = fs.readFileSync(path, "utf-8"); // Read the file synchronously
    const jsonData = JSON.parse(data); // Parse the JSON data
    const valueRetail = jsonData.vehicleValuation?.valueRetail;
    const valueWholesale = jsonData.vehicleValuation?.valueWholesale;
    return {valueRetail, valueWholesale};
}

function getRiskviewApplicant() {
  const data = fs.readFileSync(path, "utf-8"); // Read the file synchronously
  const jsonData = JSON.parse(data); // Parse the JSON data
  const buyerShortTermInquiry =
    jsonData.riskviewApplicant?.shortTermInquiry || 0;

  const cobuyerShortTermInquiry =
    jsonData.riskviewCoapplicant?.shortTermInquiry || 0;

  return { buyerShortTermInquiry, cobuyerShortTermInquiry };
}

function getCreditApplicant() {
  const data = fs.readFileSync(path, "utf-8"); // Read the file synchronously
  const jsonData = JSON.parse(data); // Parse the JSON data
  const vantageScore = jsonData.creditApplicant?.vantageScore;
  const autoRepoSelfNum = jsonData.creditApplicant?.autoRepoSelfNum;
  const autoCoffNum = jsonData.creditApplicant?.autoCoffNum;
  return { vantageScore, autoRepoSelfNum, autoCoffNum };
}
function getdealOffered() {
  const data = fs.readFileSync(path, "utf-8"); // Read the file synchronously
  const jsonData = JSON.parse(data); // Parse the JSON data
  const downPaymentOffer = jsonData.dealOffered?.downPayment;
  const totalDownPaymentOffer = jsonData.dealOffered?.totalDownPayment;
  const totalDownPercentageOffer = jsonData.dealOffered?.totalDownPercentage;
  const offerNetLtv = jsonData.dealOffered?.netLtv;
  const  dealOffered=jsonData.dealOffered;
  return {downPaymentOffer, totalDownPaymentOffer, totalDownPercentageOffer,offerNetLtv,dealOffered };
}

function getdealRequested() {
  const data = fs.readFileSync(path, "utf-8"); // Read the file synchronously
  const jsonData = JSON.parse(data); // Parse the JSON data
  const downPaymentReq = jsonData.dealRequested?.downPayment;
  const totalDownPaymentReq = jsonData.dealRequested?.totalDownPayment;
  const totalDownPercentageReq = jsonData.dealRequested?.totalDownPercentage;
  const reqNetLtv = jsonData.dealRequested?.netLtv;
  const dealRequested=jsonData.dealRequested;
  return { downPaymentReq,totalDownPaymentReq, totalDownPercentageReq ,reqNetLtv,dealRequested};
}

function getZestData() {
  const data = fs.readFileSync(path, "utf-8"); // Read the file synchronously
  const jsonData = JSON.parse(data); // Parse the JSON data

  const staticGrade = jsonData.zest?.staticGrade;
  const applicationV5Score = jsonData.zest?.applicationV5Score;
  const applicationV6StaticScore = jsonData.zest?.applicationV6StaticScore;
  const staticSubgrade = jsonData.zest?.staticSubgrade;
  const v5Grade = jsonData.zest?.v5Grade;

  return {
    staticGrade,
    applicationV5Score,
    applicationV6StaticScore,
    staticSubgrade,
    v5Grade,
  };
}

module.exports = {
  getVehicleData,
  getApplicant,
  getRiskviewApplicant,
  getCreditApplicant,
  getdealOffered,
  getdealRequested,
  getZestData,
  getSourceDealer,
  getvehicleValuation
};
