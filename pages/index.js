import Link from 'next/link';
import CustomHead from '../components/customHead';
import Header from '../components/header';
import { getAllDataLight } from '../lib/csvParser';

export async function getStaticProps() {
  const allDataLight = await getAllDataLight();

  return {
    props: {
      allDataLight,
    },
  };
}

const Home = ({ allDataLight }) => {
  return (
    <>
      <CustomHead title="SOME TITLE" description="some description" />

      <div className=" flex flex-col  min-h-[100vh] bg-[url('../public/images/tesla_2_md_light.jpg')] bg-cover bg-center flex-grow dark:bg-[url('../public/images/tesla_2_md_night.png')]">
        <Header className="flex top-0 sticky items-center h-14" />
        <div className="flex flex-col flex-grow gap-12 mt-[5vh] px-6">
          <div className="flex flex-col  items-center">
            <h2 className="text-4xl mb-3 font-extrabold">
              ÊTES-VOUS ÉLECTRO-COMPATIBLE ?
            </h2>
            <Link
              className="bg-gradient-to-r from-light-primary-start to-light-primary-end px-6 py-3 block w-fit text-center font-bold text-white dark:bg-gradient-to-r dark:from-dark-primary-0 dark:via-dark-primary-1 dark:to-dark-primary-2"
              href={'/calculator'}
            >
              Accédez au calculateur.
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl mb-3 font-extrabold">
              {allDataLight.length} VOITURES ELECTRIQUES TESTÈES
            </h2>
            <Link
              className="bg-gradient-to-r from-light-primary-start to-light-primary-end px-6 py-3 block w-fit text-center font-bold text-white dark:bg-gradient-to-r dark:from-dark-primary-0 dark:via-dark-primary-1 dark:to-dark-primary-2"
              href={'/tested-cars'}
            >
              Accédez au tests.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
