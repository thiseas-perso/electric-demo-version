import CarsHomeSection from '../../components/cars/CarsHomeSection';
import MakerSection from '../../components/cars/MakerSection';
import ModelsSection from '../../components/cars/ModelsSection';
import CustomHead from '../../components/customHead';

import {
  getAllData,
  getAllDataLight,
  getAllTestNames,
} from '../../lib/csvParser';

export async function getStaticProps() {
  const allDataLight = await getAllDataLight();
  const allData = await getAllData();
  const testNames = getAllTestNames();

  return {
    props: {
      allDataLight,
      testNames,
      allData,
    },
  };
}

const Cars = ({ allDataLight, testNames, allData }) => {
  const dataByMaker = allDataLight.reduce((acc, cur) => {
    const foundIndex = acc.findIndex((el) => el?.maker === cur.maker);
    if (foundIndex !== -1) {
      const { maker, ...rest } = cur;
      acc[foundIndex].models.push({ ...rest });
    } else {
      const { maker, ...rest } = cur;
      acc.push({ maker: cur.maker, models: [rest] });
    }
    return acc.sort((a, b) => {
      return a.maker.localeCompare(b.maker);
    });
  }, []);

  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />

      <div className="min-h-[calc(100vh-48px)]">
        <h1 className="text-xl p-2 text-white font-poppins font-extrabold text-center">
          Tous les tests
        </h1>
        <MakerSection dataByMaker={dataByMaker} title="Cherchez par marque" />
        <CarsHomeSection stringArr={testNames} title="Cherchez par test" />
        <ModelsSection
          allDataLight={allDataLight}
          title="Tous les modèles testés"
          last={true}
        />
      </div>
    </>
  );
};

export default Cars;
