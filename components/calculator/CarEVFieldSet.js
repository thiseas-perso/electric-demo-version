import { motion } from 'framer-motion';

const CarEVFieldSet = ({ state, className, x, changeHandler, errorState }) => {
  return (
    <motion.fieldset
      id="carData"
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl text-white mb-5 p-4 font-poppins font-bold bg-light-primary-2 text-center">
        Véhicule <span className="text-light-primary-4">électrique</span>
      </h2>
      <div className="flex flex-col px-4 pb-4">
        <label htmlFor="purchaseCost">Prix achat (€):</label>
        <span className="error-msg">{errorState.carDataEV.purchaseCost}</span>
        <input
          className="mb-4"
          placeholder="ex: 35000"
          required
          min="0"
          max="10000000"
          type="number"
          id="purchaseCost"
          name="purchaseCost"
          value={state.carDataEV.purchaseCost}
          onChange={(e) => changeHandler(e, 'carDataEV', 'purchaseCost')}
        />
        <label htmlFor="ecoBonus">Bonus ecologique (€):</label>
        <span className="error-msg">{errorState.carDataEV.ecoBonus}</span>
        <input
          className="mb-4"
          placeholder="ex: 5000"
          required
          min="0"
          max="10000000"
          type="number"
          id="ecoBonus"
          name="ecoBonus"
          value={state.carDataEV.ecoBonus}
          onChange={(e) => changeHandler(e, 'carDataEV', 'ecoBonus')}
        />
        <label htmlFor="consumption">Consomation (kWh/100km):</label>
        <span className="error-msg">{errorState.carDataEV.consumption}</span>
        <input
          className="mb-4"
          placeholder="ex: 18"
          required
          min="0"
          max="1000"
          type="number"
          id="consumption"
          name="consumption"
          value={state.carDataEV.consumption}
          onChange={(e) => changeHandler(e, 'carDataEV', 'consumption')}
        />
        <label htmlFor="insurance">Assurance (€/an):</label>
        <span className="error-msg">{errorState.carDataEV.insurance}</span>
        <input
          className="mb-4"
          placeholder="ex: 650"
          required
          min="0"
          max="10000000"
          type="number"
          id="insurance"
          name="insurance"
          value={state.carDataEV.insurance}
          onChange={(e) => changeHandler(e, 'carDataEV', 'insurance')}
        />
        <label htmlFor="maintenance">Entretien (€/an):</label>
        <span className="error-msg">{errorState.carDataEV.maintenance}</span>
        <input
          className="mb-4"
          placeholder="ex: 600"
          max="10000000"
          required
          min="0"
          type="number"
          id="maintenance"
          name="maintenance"
          value={state.carDataEV.maintenance}
          onChange={(e) => changeHandler(e, 'carDataEV', 'maintenance')}
        />
      </div>
    </motion.fieldset>
  );
};

export default CarEVFieldSet;
