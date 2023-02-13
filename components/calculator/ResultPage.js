import React from 'react';
import ResultMsgNegative from './ReslutMsgNegative';
import ResultMsgNeutral from './ReslutMsgNeutral';
import ResultMsgPositive from './ReslutMsgPositive';
import ResultData from './ResultData';

const ResultPage = ({ results, checked, worthIt, state }) => {
  return (
    <div
      className={` min-h-[calc(100vh-48px)] bg-gradient-to-t from-light-primary-start to-light-primary-end`}
    >
      <h2 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
        Résultas
      </h2>
      <div
        id="results-ctn"
        className="grid grid-cols-2 gap-x-2 gap-y-5 mx-4 mt-2"
      >
        <ResultData
          carCostAtEnd={results.carICECostAtEndOfPeriod}
          carType="Thérmique"
          carCostPerKMAtEnd={results.carICECostPerKmAtEnd}
          carValueAtEnd={results.carICEValueAtEndOfPeriod}
          checked={checked}
        />
        <ResultData
          carCostAtEnd={results.carEVCostAtEndOfPeriod}
          carType="Eléctrique"
          carCostPerKMAtEnd={results.carEVCostPerKmAtEnd}
          carValueAtEnd={results.carEVValueAtEndOfPeriod}
          checked={checked}
        />

        {worthIt > 1000 && (
          <ResultMsgNegative
            durationStudied={state.durationStudied.yearsStudied}
            worthIt={worthIt}
          />
        )}
        {worthIt < -1000 && (
          <ResultMsgPositive
            durationStudied={state.durationStudied.yearsStudied}
            worthIt={worthIt}
          />
        )}
        {worthIt > -1000 && worthIt < 1000 && (
          <ResultMsgNeutral
            durationStudied={state.durationStudied.yearsStudied}
            worthIt={worthIt}
          />
        )}
      </div>
    </div>
  );
};

export default ResultPage;
