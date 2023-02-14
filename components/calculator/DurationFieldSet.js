import { motion } from 'framer-motion';

function DurationFieldSet({ state, changeHandler, className, x, errorState }) {
  return (
    <motion.fieldset
      className={className}
      initial={{ x }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl text-white  p-4 font-poppins font-bold bg-light-primary-2 text-center dark:bg-black">
        Durée de <span className="text-light-primary-4">détention</span>
      </h2>

      <div className="flex flex-col pt-5 px-4 pb-4 bg-white dark:bg-light-primary-2">
        <label htmlFor="durationStudied">Années</label>
        <span className="error-msg">
          {errorState.durationStudied.yearsStudied}
        </span>
        <input
          className="mb-3"
          min="1"
          placeholder="ex: 8"
          step="1"
          type="number"
          id="durationStudied"
          name="durationStudied"
          value={state.durationStudied.yearsStudied}
          onChange={(e) => changeHandler(e, 'durationStudied', 'yearsStudied')}
        />
      </div>
    </motion.fieldset>
  );
}

export default DurationFieldSet;
