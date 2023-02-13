import React from 'react';

const NavButtons = ({ stepState, setStepState, setX }) => {
  return (
    <div className="flex self-stretch font-bold font-poppins text-white border-t-2 bg-light-primary-start">
      {stepState > 0 && stepState < 7 && (
        <button
          className={`${
            stepState > 5 ? 'border-0' : 'border-r'
          } flex-1 rounded-none border-0 font-normal`}
          type="button"
          onClick={() => {
            setStepState((prev) => prev - 1), setX(() => -1000);
          }}
        >
          Back
        </button>
      )}
      {stepState < 6 && (
        <button
          className={`${
            stepState < 1 ? 'border-0' : 'border-l'
          } flex-1 rounded-none border-0 `}
          type="button"
          onClick={() => {
            setStepState((prev) => prev + 1), setX(() => 1000);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default NavButtons;
