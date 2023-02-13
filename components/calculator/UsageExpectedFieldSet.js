import Image from 'next/image';
import { motion } from 'framer-motion';
import infoIcon from '../../public/icons/info.svg';

const UsageExpectedFieldSet = ({
  state,
  changeHandler,
  className,
  x,
  errorState,
}) => {
  return (
    <motion.fieldset
      id="usageExpected"
      className={className}
      initial={{ opacity: 0, x, y: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      <h2 className="text-3xl text-white mb-5 p-4 font-poppins font-bold bg-light-primary-2 text-center">
        <span className="text-light-primary-4">Kilomètrage</span> annuel
      </h2>

      <div className="flex flex-col px-4 pb-4">
        <p className="text-base leading-5 mb-4">
          <Image alt="information" src={infoIcon} className="inline-block " />{' '}
          Si vous ne connaissez pas votre kilomètrage annuel, laissez cette case{' '}
          <b>vide</b> et utilisez le <b>similutateur</b> de l&apos;étape
          suivante
        </p>
        <label htmlFor="totalKMPerY">
          Total de KM/an <span className="italic">(optionnel)</span>
        </label>
        <span className="error-msg">
          {errorState.usageExpected.totalKMPerY}
        </span>
        <input
          className="mb-3"
          min="0"
          placeholder="ex: 12500"
          type="number"
          id="totalKMPerY"
          value={state.usageExpected.totalKMPerY}
          onChange={(e) => changeHandler(e, 'usageExpected', 'totalKMPerY')}
        />
      </div>
    </motion.fieldset>
  );
};

export default UsageExpectedFieldSet;
