// const energyData = {
//   chargingPriceHC: '', //EUR
//   chargingPriceHP: '', //EUR
//   gasPrice: '', //EUR/lt
// };

// const usageData = {
//   workHomeDistance: '', //km
//   dailyCommutes: '', //number
//   daysWorkedPerY: '', //number
//   weekendKM: '', //km
//   otherKMPerW: '', //km
// };

// const usageExpected = {
//   totalKMPerY: '', //km
// };

// const carDataICE = {
//   purchaseCost: '', //EUR
//   insurance: '', //EUR
//   maintenance: '', //EUR
//   consumption: '', //lt/100km
// };
// const carDataEV = {
//   consumption: '', //kWh/100km
//   purchaseCost: '', //EUR
//   insurance: '', //EUR
//   maintenance: '', //EUR
//   ecoBonus: '', //EUR
// };

//const durationStudied = {
// yearsStudied: '' //years
// }

const carDepreciation = [20, 15, 10, 10, 7, 6];

const calculator = ({
  energyData,
  usageData,
  usageExpected,
  carDataICE,
  carDataEV,
  durationStudied,
}) => {
  const totalKMPerY =
    usageExpected.totalKMPerY ||
    usageData.workHomeDistance *
      usageData.dailyCommutes *
      usageData.daysWorkedPerY +
      usageData.weekendKM * 52 +
      usageData.otherKMPerW * 52; // km
  const evConsumptionPerY = Number(
    ((totalKMPerY / 100) * carDataEV.consumption).toFixed(2)
  ); //kWh
  const chargeEVCostPerY =
    evConsumptionPerY *
    (0.5 * energyData.chargingPriceHC + 0.5 * energyData.chargingPriceHC); //EUR
  const evKMCost = Number(
    (
      ((0.5 * energyData.chargingPriceHC + 0.5 * energyData.chargingPriceHC) *
        carDataEV.consumption) /
      100
    ).toFixed(2)
  ); //EUR

  const gasICECostPerY = Number(
    (
      ((energyData.gasPrice * carDataICE.consumption) / 100) *
      totalKMPerY
    ).toFixed(2)
  ); //EUR
  const iceKMCost = Number(
    ((carDataICE.consumption / 100) * energyData.gasPrice).toFixed(2)
  );

  const gasIceVSevCostPerY = gasICECostPerY - chargeEVCostPerY;

  const carEVCostAtEndOfPeriod =
    carDataEV.purchaseCost +
    (carDataEV.insurance + carDataEV.maintenance + chargeEVCostPerY) *
      durationStudied.yearsStudied -
    carDataEV.ecoBonus;

  const carEVValueAtEndOfPeriod = (() => {
    let currPrice = carDataEV.purchaseCost;

    for (let i = 0; i < durationStudied.yearsStudied; i++) {
      if (carDepreciation[i]) {
        currPrice = currPrice - (currPrice * carDepreciation[i]) / 100;
      } else {
        currPrice = currPrice - (currPrice * 6) / 100;
      }
    }
    return parseInt(currPrice);
  })();

  const carICEValueAtEndOfPeriod = (() => {
    let currPrice = carDataICE.purchaseCost;
    for (let i = 0; i < durationStudied.yearsStudied; i++) {
      if (carDepreciation[i]) {
        currPrice = currPrice - (currPrice * carDepreciation[i]) / 100;
      } else {
        currPrice = currPrice - (currPrice * 6) / 100;
      }
    }
    return parseInt(currPrice);
  })();

  const carICECostAtEndOfPeriod =
    carDataICE.purchaseCost +
    (carDataICE.insurance + carDataICE.maintenance + gasICECostPerY) *
      durationStudied.yearsStudied;

  const carICECostPerKmAtEnd = Number(
    (
      carICECostAtEndOfPeriod /
      (totalKMPerY * durationStudied.yearsStudied)
    ).toFixed(3)
  );
  const carEVCostPerKmAtEnd = Number(
    (
      carEVCostAtEndOfPeriod /
      (totalKMPerY * durationStudied.yearsStudied)
    ).toFixed(3)
  );

  return {
    gasIceVSevCostPerY,
    gasICECostPerY,
    chargeEVCostPerY,
    carEVCostAtEndOfPeriod,
    carICECostAtEndOfPeriod,
    carEVValueAtEndOfPeriod,
    carICEValueAtEndOfPeriod,
    totalKMPerY,
    evKMCost,
    iceKMCost,
    carICECostPerKmAtEnd,
    carEVCostPerKmAtEnd,
  };
};

export default calculator;
