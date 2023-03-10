import Link from 'next/link';
import CustomHead from '../../components/customHead';

const Calculator = () => {
  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />

      <div className="flex flex-col flex-grow min-h-screenNoNav items-center">
        <div className="flex flex-col bg-white dark:bg-light-primary-2 max-w-2xl mt-[1vh] sm:mt-[10vh] shadow-2xl rounded-none sm:rounded-2xl overflow-hidden">
          <h1
            aria-label="L'éléctro-compatibilité"
            className="text-xl p-4 font-poppins font-extrabold text-center bg-black text-white"
          >
            L&apos;éléctro-compatibilité
          </h1>
          <div className="flex flex-col gap-4 text-lg p-4">
            <p className="indent-4">
              Le calculateur suivant permet de comparer le{' '}
              <strong className="font-bold"> coût de possession </strong>
              d&apos;une voiture électrique (VE) et d&apos;une voiture thermique
              (VT), y compris les{' '}
              <strong className="font-bold">coûts d&apos;achat</strong> et
              <strong className="font-bold"> d&apos;usage</strong> sur la durée
              de vie de la voiture.
            </p>
            <p className="indent-4">
              Selon le nombre de kilomètres que vous parcourez en une année et
              le prix d&apos;achat d&apos;une VE, il peut être avantageux de
              vendre votre VT et de passer à l&apos;électrique. Ceci peut vous
              permettre d&apos;<strong className="font-bold">économiser</strong>{' '}
              sur les coûts de carburant et de réduire les émissions de gaz à
              effet de serre.
            </p>
            <p className="indent-4">
              Découvrez dès maintenant votre compatibilité électrique en
              utilisant le calculateur !
            </p>
            <Link
              className="ml-auto bg-light-primary-4 px-6 py-3 rounded-xl font-bold hover:bg-light-primary-5 transition-colors dark:bg-dark-primary-1 dark:hover:bg-dark-primary-0"
              href={'/calculator/form'}
            >
              Go!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
