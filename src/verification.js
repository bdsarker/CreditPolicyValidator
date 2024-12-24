

const {
  getVehicleData,
  getApplicant,
  getRiskviewApplicant,
  getCreditApplicant,
  getdealRequested,
  getdealOffered,
  getZestData,
    getSourceDealer,
  getvehicleValuation
} = require("./readApplication");


const { collateralClass } = require("./policyLogics/collaterClass");
const { collateralType } = require("./policyLogics/collaterType");
const { getCreditTier } = require("./policyLogics/CreditTier");
const {getCreditSubtire} = require("./policyLogics/CreditSubtier");
const {getMaxamountFinanced} = require("./policyLogics/MaxAmountFinanced");
const {getMaxBackend} = require("./policyLogics/MaxBackend");
const {getDti} = require("./policyLogics/DTI");
const {getMaxGap} = require("./policyLogics/MaxGap");
const {getMaxMileage} = require("./policyLogics/MaxMileage");
const {getMaxPayment} = require("./policyLogics/MaxPayment");
const {getMaxNetLTV} = require("./policyLogics/MaxNetLTV");
const {getMaxTerm} = require("./policyLogics/MaxTerm");
const {getMaxUnpaidBalance} = require("./policyLogics/MaxUnpaidBalance");
const {getMaxVehicleAge}= require("./policyLogics/GetMaxVehicleAge");
const {minCashDownpayment} = require("./policyLogics/MinCashDown");
const {readDealerInfo,getDealerInfo} = require("./readDealer");

// Get the values from the application
const { make, model, age, mileage,condition } = getVehicleData();
const { consumerType } = getApplicant();
const { buyerShortTermInquiry } = getRiskviewApplicant();
const { vantageScore, autoRepoSelfNum, autoCoffNum } = getCreditApplicant();
const { downPaymentOffer, totalDownPaymentOffer, totalDownPercentageOffer, offerNetLtv,dealOffered } = getdealOffered();
const { downPaymentReq, totalDownPaymentReq, totalDownPercentageReq,reqNetLtv,dealRequested } = getdealRequested();
const {
  staticGrade,
  applicationV5Score,
  applicationV6StaticScore,
  staticSubgrade,
  v5Grade,
} = getZestData();
const {sourceType,dealerChannel,internalCode} = getSourceDealer();
const {valueWholesale} = getvehicleValuation();

verification = async ()=> {
// Display the values
  console.log(
      `For ${make} ${model}, the collateral class is: ${collateralClass(
          make,
          model
      )}`
  );
  console.log(
      `For ${make} ${model}, the collateral type is: ${collateralType(
          make,
          model
      )}`
  );
  console.log(internalCode);
  const dealerInfo = readDealerInfo(internalCode);

  let infos = {};

  await dealerInfo
      .then(value => {
        infos = value;
      })
      .catch(error => {
        console.log(error);
      })

  console.log(infos);

  console.log(
      `Dealer Info:
       Dealer Name:   ${dealerInfo.name}
       Dealer State:  ${dealerInfo.addressState}`
  );

  console.log(
      `consumerType is: ${consumerType}, 
  v5Grade is: ${v5Grade},
  staticGrade is: ${staticGrade},
  staticSubgrade is: ${staticSubgrade},
  buyerShortTermInquiry is: ${buyerShortTermInquiry}, 
  vantageScore is: ${vantageScore}, 
  autoRepoSelfNum is: ${autoRepoSelfNum}, 
  autoCoffNum is: ${autoCoffNum}, 
  totalDownPercentageReq is: ${totalDownPercentageReq}, 
  applicationV5Score is: ${applicationV5Score}, 
  applicationV6StaticScore is: ${applicationV6StaticScore}`
  );

  const credTier = getCreditTier(
      consumerType,
      staticGrade,
      staticSubgrade,
      v5Grade,
      buyerShortTermInquiry,
      0,
      vantageScore,
      autoRepoSelfNum,
      autoCoffNum,
      collateralClass(make, model),
      totalDownPercentageReq,
      applicationV5Score,
      applicationV6StaticScore,
      age,
      mileage
  );
  console.log(`Credit Tier : ${credTier}`);
  const class1Orclass8 = (collateralClass(make, model) === 8 || collateralClass(make, model) === 10);

  const creditSubtier = getCreditSubtire(
      credTier,
      age,
      mileage,
      consumerType,
      staticGrade,
      staticSubgrade,
      class1Orclass8,
      totalDownPercentageReq,
      totalDownPercentageOffer,
      collateralType(make, model),
      totalDownPaymentReq,
      totalDownPaymentOffer);

  console.log(`Credit Subtier : ${creditSubtier}`);

  const maxAmountFinanced = getMaxamountFinanced(
      sourceType,
      credTier,
      creditSubtier,
      totalDownPaymentReq);
  console.log(`Max Amount Financed : ${maxAmountFinanced}`);

  const maxBackend = getMaxBackend(
      valueWholesale,
      sourceType,
      credTier,
      creditSubtier,
      offerNetLtv,
      reqNetLtv,
      collateralClass(make, model),
      collateralType(make, model)
  );
  console.log(`Max Backend : ${maxBackend}`);

  const dti = getDti(sourceType, credTier);
  console.log(`The Maximum DTI (Debt-to-Income Ratio): ${dti}`);

  const maxGap = getMaxGap(
      "TX",
      reqNetLtv,
      sourceType,
      dealerChannel);
  console.log(`The Maximum Gap: ${maxGap}`);

  const maxMileage = getMaxMileage(sourceType, collateralClass(make, model));
  console.log(`The Maximum Mileage: ${maxMileage}`);

  const maxPayment = getMaxPayment(
      sourceType,
      credTier,
      creditSubtier,
      totalDownPercentageOffer,
      totalDownPercentageReq,
      collateralClass(make, model),
      collateralType(make, model),
      "TX",
      mileage,
      age,
      downPaymentOffer,
      totalDownPaymentReq,
      totalDownPaymentOffer
  );

  console.log(`The Maximum Payment: ${maxPayment}`);

  const maxNetLTV = getMaxNetLTV(
      condition,
      sourceType,
      credTier,
      creditSubtier,
      collateralClass(make, model),
      collateralType(make, model),
      totalDownPaymentReq
  );
  console.log(`The Maximum Net LTV: ${maxNetLTV}`);

  const maxTerm = getMaxTerm(
      collateralClass(make, model),
      collateralType(make, model),
      age,
      mileage,
      credTier,
      valueWholesale
  );
  console.log(`The Maximum Term: ${maxTerm}`);

  const maxUnpaidBalance = getMaxUnpaidBalance(
      sourceType,
      credTier,
      creditSubtier,
      totalDownPercentageOffer,
      totalDownPercentageReq,
      collateralType(make, model),
      "TX",
      mileage,
      age,
      totalDownPaymentReq,
      totalDownPaymentOffer
  );

  console.log(`The Maximum Unpaid Balance: ${maxUnpaidBalance}`);

  const maxVehicleAge = getMaxVehicleAge(
      sourceType,
      collateralClass(make, model),
  );
  console.log(`The Maximum Vehicle Age: ${maxVehicleAge}`);

  const minCashDown = minCashDownpayment(
      sourceType,
      credTier,
      totalDownPaymentReq
  );
  console.log(`The Minimum Cash Down: ${minCashDown}`);
}

verification();