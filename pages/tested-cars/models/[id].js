import React, { useEffect, useState } from 'react';
import StudioImage from '../../../components/StudioImage';
import TestFilter from '../../../components/TestFilter';
import Version from '../../../components/Version';

import {
  getAllModelIds,
  getAllTestNames,
  getModelData,
} from '../../../lib/csvParser';

export async function getStaticPaths() {
  const paths = await getAllModelIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const testNames = getAllTestNames();
  const modelData = await getModelData(params.id);
  return {
    props: {
      modelData,
      testNames,
    },
  };
}

const Model = ({ modelData, testNames }) => {
  const [filters, setFilters] = useState([...testNames]);
  const versions = modelData.versions.reduce((acc, cur) => {
    if (cur.version === 'Base') {
      acc.unshift(cur);
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  return (
    <div>
      <div className="w-full h-fit px-4 flex flex-col items-center">
        <StudioImage
          model={modelData.model}
          maker={modelData.maker}
          width={1200}
          height={100}
          zoomType={'fullscreen'}
          priority={true}
          className={'unselectable w-full max-w-3xl object-cover'}
        />
        <h1 className="relative top-[-30px] text-5xl text-white dark:text-black">
          {modelData.maker}{' '}
          <span className="text-light-primary-4">{modelData.model}</span>
        </h1>
      </div>
      <div className="bg-white min-w-ful px-4 max-w-full py-5">
        <div className="flex flex-wrap gap-3 mb-3 border p-3 rounded-2xl bg-slate-100">
          <div className="text-lg">Tests effectués :</div>
          {testNames.map((el) => (
            <TestFilter
              key={el}
              testName={el}
              filters={filters}
              setFilters={setFilters}
            />
          ))}
        </div>
        {versions.map((version) => {
          return (
            <Version
              key={version.id}
              version={version}
              testNames={testNames}
              filters={filters}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Model;
