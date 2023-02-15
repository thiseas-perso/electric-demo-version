import { useState } from 'react';
import { getOneFileData } from '../../../lib/csvParser';
import { ThousandKM } from '../../../components/TestTables';
import Header from '../../../components/header';

export async function getStaticProps() {
  const data = await getOneFileData('thousand');
  const sorted = [...data].sort((a, b) => a.Car.localeCompare(b.Car));

  return {
    props: {
      sorted,
    },
  };
}

const ThousandResults = ({ sorted }) => {
  const [query, setQuery] = useState('');

  const dataFiltered = sorted.filter((el) =>
    el.Car.toLowerCase()
      .split('-')
      .join(' ')
      .includes(query.toLowerCase().replaceAll('-', ' '))
  );
  return (
    <>
      <Header className="flex items-center h-14 bg-black dark:bg-transparent" />
      <div className=" w-full p-8 flex justify-center dark:bg-transparent">
        <label htmlFor="query" className="font-semibold">
          Filtrer :{' '}
        </label>
        <input
          className="ml-2 w-32"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          maxLength="20"
          autoComplete="off"
        />
      </div>
      <div className="bg-slate-200 dark:bg-light-primary-2 sm:p-10">
        <ThousandKM
          tests={dataFiltered}
          fullTest={true}
          className="sm:rounded-xl overflow-x-auto sm:border bg-white dark:bg-transparent"
        />
      </div>
    </>
  );
};

export default ThousandResults;
