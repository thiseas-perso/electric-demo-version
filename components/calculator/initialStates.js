export const initialState = {
  energyData: {
    chargingPriceHC: '0.15',
    chargingPriceHP: '0.18',
    gasPrice: '1.7',
  },
  usageData: {
    workHomeDistance: '50',
    dailyCommutes: '2',
    daysWorkedPerY: '150',
    weekendKM: '100',
    otherKMPerW: '150',
  },
  usageExpected: {
    totalKMPerY: '10000',
  },
  carDataICE: {
    purchaseCost: '30000',
    insurance: '500',
    maintenance: '1000',
    consumption: '5',
  },
  carDataEV: {
    purchaseCost: '30000',
    consumption: '20',
    insurance: '500',
    maintenance: '500',
    ecoBonus: '5000',
  },
  durationStudied: {
    yearsStudied: '4',
  },
};

export const initialStateErrors = {
  energyData: {
    chargingPriceHC: '',
    chargingPriceHP: '',
    gasPrice: '',
  },
  usageData: {
    workHomeDistance: '',
    dailyCommutes: '',
    daysWorkedPerY: '',
    weekendKM: '',
    otherKMPerW: '',
  },
  usageExpected: {
    totalKMPerY: '',
  },
  carDataICE: {
    purchaseCost: '',
    insurance: '',
    maintenance: '',
    consumption: '',
  },
  carDataEV: {
    purchaseCost: '',
    consumption: '',
    insurance: '',
    maintenance: '',
    ecoBonus: '',
  },
  durationStudied: {
    yearsStudied: '',
  },
};

export const initialResultsState = {
  carEVCostAtEndOfPeriod: '',
  carEVValueAtEndOfPeriod: '',
  carICECostAtEndOfPeriod: '',
  carICEValueAtEndOfPeriod: '',
  evKMCost: '',
  iceKMCost: '',
  gasIceVSevCostPerY: '',
  totalKMPerY: '',
  carICECostPerKmAtEnd: '',
  carEVCostPerKmAtEnd: '',
};
