import React, { useEffect, useState } from 'react';

const TableHeader = ({ imageSrc, info, imageDarkSrc }) => {
  const [clicked, setClicked] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const clickHandler = () => {
    clearTimeout(timeoutId);
    setClicked((prev) => !prev);
    const newTimeoutId = setTimeout(() => {
      setClicked(() => false);
    }, 3000);
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const lightImage = `url(${imageSrc})`;
  const darkImage = `url(${imageDarkSrc || imageSrc})`;

  return (
    <div onClick={clickHandler}>
      {clicked ? (
        <div>{info}</div>
      ) : (
        <div
          style={{
            '--light-image': lightImage,
            '--dark-image': darkImage,
          }}
          className="w-11 h-11 bg-center bg-contain bg-no-repeat mx-auto bg-[image:var(--light-image)] dark:bg-[image:var(--dark-image)]"
        ></div>
      )}
    </div>
  );
};

export default TableHeader;
