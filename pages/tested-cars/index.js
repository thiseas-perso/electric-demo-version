import { getAllDataLight, getAllTestNames } from '../../lib/csvParser';

import MakerSection from '../../components/cars/MakerSection';
import ModelsSection from '../../components/cars/ModelsSection';
import CustomHead from '../../components/customHead';
import Header from '../../components/header';
import TestsLinks from '../../components/cars/TestsLinks';

export async function getStaticProps() {
  const allDataLight = await getAllDataLight();
  // const allData = await getAllData();
  const testNames = getAllTestNames();

  return {
    props: {
      allDataLight,
      testNames,
    },
  };
}

const Cars = ({ allDataLight, testNames }) => {
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
      <Header className="flex items-center h-14 bg-light-primary-2 dark:bg-transparent" />
      <div className="min-h-[calc(100vh-54px)]">
        <h1
          aria-label="Tous les tests"
          className="text-xl p-2 text-white font-poppins font-extrabold text-center"
        >
          Tous les tests
        </h1>
        <MakerSection dataByMaker={dataByMaker} />
        <TestsLinks stringArr={testNames} />
        <ModelsSection allDataLight={allDataLight} last={true} />
      </div>
    </>
  );
};

export default Cars;
