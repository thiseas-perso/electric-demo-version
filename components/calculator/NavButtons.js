import React from 'react';

const NavButtons = ({ stepState, setStepState, setX }) => {
  return (
    <div className="flex self-stretch font-bold font-poppins text-white border-t-2 bg-light-primary-start dark:bg-dark-primary-2">
      {stepState > 0 && stepState < 7 && (
        <button
          className={`${
            stepState > 5 ? 'border-0' : 'border-r'
          } flex-1 rounded-none border-0 font-normal text-xl py-4 hover:bg-white/10 transition-colors active:bg-black/10`}
          type="button"
          onClick={() => {
            setStepState((prev) => prev - 1), setX(() => -1000);
          }}
        >
          Précédent
        </button>
      )}
      {stepState < 6 && (
        <button
          className={`${
            stepState < 1 ? 'border-0' : 'border-l'
          } flex-1 rounded-none border-0 text-xl py-4 hover:bg-white/10 transition-colors active:bg-black/10`}
          type="button"
          onClick={() => {
            setStepState((prev) => prev + 1), setX(() => 1000);
          }}
        >
          Suivant
        </button>
      )}
    </div>
  );
};

export default NavButtons;
