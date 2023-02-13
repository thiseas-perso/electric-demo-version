import Link from 'next/link';
import CustomHead from '../components/customHead';
import {
  getAllData,
  getAllFullTestedVersions,
  getAllCarNames,
  getAllMakers,
  getCarsByMaker,
  getCarsByMakerLight,
} from '../lib/csvParser';

export async function getStaticProps() {
  const allData = await getAllData();
  const getFullTested = await getAllFullTestedVersions([
    'RANGE',
    'ACCELERATION',
  ]);
  const allNames = await getAllCarNames();
  const allMakers = await getAllMakers();
  const teslas = await getCarsByMaker('Tesla');
  const teslasLight = await getCarsByMakerLight('Tesla');
  // const bananaData = await getOneFileData('BANANA');
  return {
    props: { allData, getFullTested, allNames, allMakers, teslas, teslasLight },
  };
}

const Home = ({
  allData,
  getFullTested,
  allNames,
  allMakers,
  teslas,
  teslasLight,
}) => {
  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />
      <h1>HOME</h1>
      <div>
        <Link href={'/calculator'}>Calculator</Link>
        <Link href={'/tested-cars'}>Tested cars</Link>
      </div>
    </>
  );
};

export default Home;
