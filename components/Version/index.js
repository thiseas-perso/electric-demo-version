import Image from 'next/image';
import React, { useState } from 'react';
import VersionsTests from '../VersionTests';
import arrowButton from '../../public/icons/arrow-button.svg';
import closeButton from '../../public/icons/close-button.svg';

const Version = ({ version, testNames, filters }) => {
  const [display, setDisplay] = useState(false);
  const containsTest = Object.keys(version).some((key) =>
    filters.includes(key)
  );

  if (!containsTest) {
    return null;
  }

  return (
    <div className="pt-2 pb-2">
      <div className="flex items-center gap-x-4">
        <h2
          className="hover:cursor-pointer"
          onClick={() => setDisplay((prev) => !prev)}
        >
          {version.version}
        </h2>{' '}
        <button
          className="border-none h-9 m-0 p-0"
          onClick={() => setDisplay((prev) => !prev)}
        >
          <Image
            src={display ? closeButton : arrowButton}
            alt="click to display brands"
            className="rotate-180 unselectable w-6"
          />
        </button>
      </div>
      {display && (
        <ul>
          <VersionsTests version={version} testNames={testNames} />
        </ul>
      )}
    </div>
  );
};

export default Version;
