import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import arrowButton from '../../public/icons/arrow-button.svg';
import closeButton from '../../public/icons/close-button.svg';

import ModelCard from './ModelCard';

const ModelsSection = ({ allDataLight, title, last }) => {
  const [display, setDisplay] = useState(false);
  const [query, setQuery] = useState('');

  const contentRef = useRef();
  let height;
  if (contentRef.current) height = `${contentRef.current.scrollHeight}px`;

  const dataFiltered = allDataLight.filter((el) =>
    el.id
      .split('-')
      .join(' ')
      .includes(query.toLowerCase().replaceAll('-', ' '))
  );

  return (
    <section>
      <div className="flex items-center bg-white p-3 gap-3">
        <h2 className="">{title}</h2>
        <button
          className="border-none h-9 m-0 p-0"
          onClick={() => setDisplay((prev) => !prev)}
        >
          <Image
            src={display ? closeButton : arrowButton}
            alt="click to display models"
            className="rotate-180 unselectable"
          />
        </button>
      </div>

      <div
        ref={contentRef}
        className={`transition-all duration-150 overflow-hidden flex flex-col items-center`}
        style={{ height: display ? height : '0px' }}
      >
        <div className="bg-white w-full p-8 flex justify-center">
          <label htmlFor="filter">Filtrez :</label>
          <input
            className="ml-2 w-32"
            id="filter"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            maxLength="20"
          />
        </div>
        <ul
          className={`flex flex-wrap gap-5  bg-white p-3 pb-8 justify-center items-start min-w-full h-fit ${
            last && 'mb-20'
          }`}
        >
          {dataFiltered.map((data) => (
            <ModelCard
              maker={data.maker}
              key={data.id}
              model={data.model}
              id={data.id}
              versions={data.versions}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ModelsSection;
