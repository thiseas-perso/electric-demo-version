import { motion } from 'framer-motion';

const UsageDataFieldSet = ({
  state,
  errorState,
  className,
  x,
  changeHandler,
}) => {
  const total =
    Number(state.usageData.workHomeDistance) *
      Number(state.usageData.dailyCommutes) *
      Number(state.usageData.daysWorkedPerY) +
    Number(state.usageData.weekendKM) * 52 +
    Number(state.usageData.otherKMPerW) * 52;

  return (
    <motion.fieldset
      id="usageData"
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl text-white mb-5 p-4 font-poppins font-bold bg-light-primary-2 text-center">
        Vos <span className="text-light-primary-4">trajets</span>
      </h2>
      <div className="flex flex-col px-4 pb-4">
        <label htmlFor="workHomeDistance">
          Distance domicile travail (km):
        </label>
        <span className="error-msg">
          {errorState.usageData.workHomeDistance}
        </span>
        <input
          className="mb-3"
          required
          placeholder="ex: 45"
          min="0"
          type="number"
          id="workHomeDistance"
          name="workHomeDistance"
          value={state.usageData.workHomeDistance}
          onChange={(e) => changeHandler(e, 'usageData', 'workHomeDistance')}
        />
        <label htmlFor="dailyCommutes">A/R quotidiens</label>
        <span className="error-msg">{errorState.usageData.dailyCommutes}</span>
        <input
          className="mb-3"
          required
          placeholder="ex: 2"
          min="0"
          type="number"
          id="dailyCommutes"
          name="dailyCommutes"
          value={state.usageData.dailyCommutes}
          onChange={(e) => changeHandler(e, 'usageData', 'dailyCommutes')}
        />
        <label htmlFor="daysWorkedPerY">Nombre de jours travaillés/an</label>
        <span className="error-msg">{errorState.usageData.daysWorkedPerY}</span>
        <input
          className="mb-3"
          min="0"
          max="365"
          required
          placeholder="ex: 150"
          type="number"
          id="daysWorkedPerY"
          name="daysWorkedPerY"
          value={state.usageData.daysWorkedPerY}
          onChange={(e) => changeHandler(e, 'usageData', 'daysWorkedPerY')}
        />
        <label htmlFor="weekendKM">Km les weekends</label>
        <span className="error-msg">{errorState.usageData.weekendKM}</span>
        <input
          className="mb-3"
          min="0"
          type="number"
          id="weekendKM"
          name="weekendKM"
          placeholder="ex: 140"
          value={state.usageData.weekendKM}
          onChange={(e) => changeHandler(e, 'usageData', 'weekendKM')}
        />
        <label htmlFor="otherKMPerW">Autres km par semaine</label>
        <span className="error-msg">{errorState.usageData.otherKMPerW}</span>
        <input
          className="mb-3"
          min="0"
          placeholder="ex: 20"
          type="number"
          id="otherKMPerW"
          name="otherKMPerW"
          value={state.usageData.otherKMPerW}
          onChange={(e) => changeHandler(e, 'usageData', 'otherKMPerW')}
        />
        <div className="text-end">
          <b>Total:</b> {total} km
        </div>
      </div>
    </motion.fieldset>
  );
};

export default UsageDataFieldSet;
