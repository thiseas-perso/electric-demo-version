import { motion } from 'framer-motion';

const EnergyDataFieldSet = ({
  state,
  changeHandler,
  className,
  x,
  errorState,
}) => {
  return (
    <motion.fieldset
      id="energyData"
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        // duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl text-white mb-5 p-4 font-poppins font-bold bg-light-primary-2 text-center">
        Cout de l&apos;<span className="text-light-primary-4">énergie</span>
      </h2>

      <div className="flex flex-col px-4 pb-4">
        <label htmlFor="chargingPriceHC">
          Electricité - heures creuses(€/kWh):
        </label>
        <span className="error-msg">
          {errorState.energyData.chargingPriceHC}
        </span>
        <input
          className="mb-3"
          required
          placeholder="ex: 0,15"
          min="0"
          step=".01"
          lang="en"
          type="number"
          id="chargingPriceHC"
          name="chargingPriceHC"
          value={state.energyData.chargingPriceHC}
          onChange={(e) => changeHandler(e, 'energyData', 'chargingPriceHC')}
        />
        <label htmlFor="chargingPriceHP">
          Electricité - heures pleines(€/kWh):
        </label>
        <span className="error-msg">
          {errorState.energyData.chargingPriceHP}
        </span>
        <input
          className="mb-3"
          required
          placeholder="ex: 0,18"
          min="0"
          step=".01"
          type="number"
          id="chargingPriceHP"
          name="chargingPriceHP"
          value={state.energyData.chargingPriceHP}
          onChange={(e) => changeHandler(e, 'energyData', 'chargingPriceHP')}
        />
        <label htmlFor="gasPrice">Carburant (€/lt):</label>
        <span className="error-msg">{errorState.energyData.gasPrice}</span>
        <input
          className="mb-3"
          required
          placeholder="ex: 1,75"
          min="0"
          step=".01"
          type="number"
          id="gasPrice"
          name="gasPrice"
          value={state.energyData.gasPrice}
          onChange={(e) => changeHandler(e, 'energyData', 'gasPrice')}
        />
      </div>
    </motion.fieldset>
  );
};

export default EnergyDataFieldSet;
