import { useEffect, useState } from 'react';

import { CarEVFieldSet } from '../../components/calculator';
import { CarICEFieldSet } from '../../components/calculator';
import { DurationFieldSet } from '../../components/calculator';
import { EnergyDataFieldSet } from '../../components/calculator';
import { UsageDataFieldSet } from '../../components/calculator';
import { UsageExpectedFieldSet } from '../../components/calculator';
import ErrorMessage from '../../components/calculator/ErrorMessage';
import {
  initialResultsState,
  initialState,
  initialStateErrors,
} from '../../components/calculator/initialStates';
import NavButtons from '../../components/calculator/NavButtons';
import ProgressBar from '../../components/calculator/ProgressBar';
import ResultPage from '../../components/calculator/ResultPage';
import SubmitPage from '../../components/calculator/SubmitPage';
import CustomHead from '../../components/customHead';
import calculator from '../../helpers/calculator';

const Calculator = () => {
  const [state, setState] = useState(initialState);
  const [errorState, setErrorState] = useState(initialStateErrors);
  const [errorCount, setErrorCount] = useState(0);
  const [stepState, setStepState] = useState(0);
  const [x, setX] = useState(0);
  const [results, setResults] = useState(initialResultsState);
  const [worthIt, setWorthIt] = useState(
    results.carEVCostAtEndOfPeriod - results.carICECostAtEndOfPeriod
  );
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setWorthIt(
        results.carEVCostAtEndOfPeriod -
          results.carEVValueAtEndOfPeriod -
          (results.carICECostAtEndOfPeriod - results.carICEValueAtEndOfPeriod)
      );
    } else {
      setWorthIt(
        results.carEVCostAtEndOfPeriod - results.carICECostAtEndOfPeriod
      );
    }
  }, [
    results.carEVCostAtEndOfPeriod,
    results.carICECostAtEndOfPeriod,
    checked,
    results.carEVValueAtEndOfPeriod,
    results.carICEValueAtEndOfPeriod,
  ]);

  const convertDataToNumbers = (obj) => {
    const newObj = {};
    for (const key in obj) {
      const element = obj[key];
      if (typeof element === 'object') {
        newObj[key] = convertDataToNumbers(element);
      } else {
        newObj[key] = Number(Math.abs(Number(element)).toFixed(3));
      }
    }
    return newObj;
  };
  const checkValuesEntered = (obj) => {
    let errors = 0;
    for (const outerKey in obj) {
      const element = obj[outerKey];
      if (typeof element === 'object' && !outerKey.startsWith('usage')) {
        for (const innerKey in element) {
          if (!element[innerKey].trim().length) {
            errors += 1;
            setErrorState((prev) => ({
              ...prev,
              [outerKey]: {
                ...prev[outerKey],
                [innerKey]: '*Ce champ est obligatoire',
              },
            }));
          }
        }
      }
    }

    if (!obj.usageExpected.totalKMPerY.trim().length) {
      for (const key in obj.usageData) {
        if (!obj.usageData[key].trim().length) {
          errors += 1;
          setErrorState((prev) => ({
            ...prev,
            usageData: {
              ...prev.usageData,
              [key]:
                "*Vous n'avez pas rentré de KM annuel, ce champ est donc obligatoir",
            },
          }));
        }
      }
    }
    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const height = window.innerHeight - 42;
    const errors = checkValuesEntered(state);
    if (!errors) {
      const convertedInputToNumbers = convertDataToNumbers(state);

      setResults(() => calculator(convertedInputToNumbers));
      window.scrollBy({ top: height, behavior: 'smooth' });
    } else {
      setErrorCount(errors);
      setTimeout(() => {
        setErrorCount(0);
      }, 4000);
    }
  };

  const changeHandler = (e, objName, fieldName) => {
    if (!e.target.value.trim().length && !objName.startsWith('usage')) {
      setErrorState((prev) => ({
        ...prev,
        [objName]: {
          ...prev[objName],
          [fieldName]: '*Ce champ est obligatoire',
        },
      }));
    } else {
      setErrorState((prev) => ({
        ...prev,
        [objName]: {
          ...prev[objName],
          [fieldName]: '',
        },
      }));
    }
    setState((prev) => ({
      ...prev,
      [objName]: {
        ...prev[objName],
        [fieldName]: e.target.value,
      },
    }));
  };

  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />

      <div className="flex flex-col flex-grow justify-between min-h-[calc(100vh-48px)]">
        <ProgressBar stepState={stepState} />
        <h1 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
          Comparateur VE - VT
        </h1>
        <form
          autoComplete="off"
          className=" text-lg flex flex-col flex-grow  justify-between mt-2 overflow-x-hidden"
        >
          {stepState === 0 && (
            <CarEVFieldSet
              x={x}
              state={state}
              errorState={errorState}
              className="bg-white overflow-hidden  min-w-[275px]  dark:bg-black "
              changeHandler={changeHandler}
            />
          )}
          {stepState === 1 && (
            <CarICEFieldSet
              x={x}
              state={state}
              errorState={errorState}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
              changeHandler={changeHandler}
            />
          )}
          {stepState === 2 && (
            <EnergyDataFieldSet
              x={x}
              state={state}
              errorState={errorState}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 3 && (
            <UsageExpectedFieldSet
              x={x}
              state={state}
              errorState={errorState}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 4 && (
            <UsageDataFieldSet
              x={x}
              state={state}
              errorState={errorState}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}

          {stepState === 5 && (
            <DurationFieldSet
              x={x}
              state={state}
              errorState={errorState}
              changeHandler={changeHandler}
              className="bg-white overflow-hidden  min-w-[275px] dark:bg-black"
            />
          )}
          {stepState === 6 && errorCount > 0 ? (
            <>
              <ErrorMessage />
              <SubmitPage
                submitHandler={submitHandler}
                checked={checked}
                setChecked={setChecked}
                errorCount={errorCount}
              />
            </>
          ) : stepState === 6 ? (
            <SubmitPage
              submitHandler={submitHandler}
              checked={checked}
              setChecked={setChecked}
              errorCount={errorCount}
            />
          ) : null}
        </form>
        <NavButtons
          stepState={stepState}
          setStepState={setStepState}
          setX={setX}
        />
      </div>
      {stepState === 6 && (
        <ResultPage
          results={results}
          checked={checked}
          worthIt={worthIt}
          state={state}
        />
      )}
    </>
  );
};

export default Calculator;
