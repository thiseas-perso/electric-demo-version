import Image from 'next/image';
import React, { useState } from 'react';

const TableHeader = ({ imageSrc, info }) => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked((prev) => !prev);
  };
  return (
    <div>
      {clicked ? (
        <div onClick={clickHandler}>{info}</div>
      ) : (
        <Image
          className="mx-auto"
          src={imageSrc}
          alt={info}
          onClick={clickHandler}
          height="42"
        />
      )}
    </div>
  );
};

export default TableHeader;
