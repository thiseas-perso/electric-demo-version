import React, { useState } from 'react';
import TableHeader from '../TableHeader';
import brakeTimeImg from '../../public/headers/brake_time.png';
import meterImg from '../../public/headers/meter.png';
import roadImg from '../../public/headers/road.png';
import tiresImg from '../../public/headers/tires.png';
import tempImg from '../../public/headers/temp.png';
import seasonImg from '../../public/headers/season.png';
import weightImg from '../../public/headers/weight.png';

const Braking = ({ tests, className }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [btnTxt, setBtnTxt] = useState('détails');

  const clickHandler = () => {
    if (!showDetails && !showMoreDetails) {
      setShowDetails(true);
      setBtnTxt('+ de détails');
    } else if (showDetails && !showMoreDetails) {
      setShowMoreDetails(true);
      setBtnTxt('- de détails');
    } else if (showDetails && showMoreDetails) {
      setShowDetails(false);
      setShowMoreDetails(false);
      setBtnTxt('détails');
    }
  };

  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left flex items-center gap-x-4">
            Freins
            <button
              className="font-light hover:bg-white/25"
              onClick={clickHandler}
            >
              {btnTxt}
            </button>
          </h3>
        </caption>
        <thead>
          <tr>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="100 à 0 km/h (secondes)"
                imageSrc={brakeTimeImg}
              />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Distance (mètres)" imageSrc={meterImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Surface" imageSrc={roadImg} />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Total (kg)" imageSrc={weightImg} />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Température" imageSrc={tempImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Saison" imageSrc={seasonImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Pneux" imageSrc={tiresImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Roue arrière
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0'
                  : 'hidden'
              }`}
            >
              Roue avant
            </th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => {
            return (
              <tr
                key={i}
                className="even:bg-light-primary-7/50  odd:bg-light-primary-3/50 rounded-3xl p-5 m-5 grid grid-cols-2 sm:table-row"
              >
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="100 à 0 km/h (secondes)"
                    imageSrc={brakeTimeImg}
                  />
                </th>
                <td
                  data-th="100 à 0 km/h (secondes)"
                  className="block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Secs100to0KmPerH}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Distance (mètres)" imageSrc={meterImg} />
                </th>
                <td
                  data-th="Distance (mètres)"
                  className="block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Distance}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Surface" imageSrc={roadImg} />
                </th>
                <td
                  data-th="Surface"
                  className="block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Surface}
                </td>
                <th
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Poid" imageSrc={weightImg} />
                </th>
                <td
                  data-th="Poid"
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Weight}
                </td>
                <th
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Température (°C)" imageSrc={tempImg} />
                </th>
                <td
                  data-th="Température"
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Temp}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Saison" imageSrc={seasonImg} />
                </th>
                <td
                  data-th="Saison"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Season}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Pneux" imageSrc={tiresImg} />
                </th>
                <td
                  data-th="Pneux"
                  className="block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Tires}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden'
                      : 'hidden'
                  }`}
                >
                  Roue arrière
                </th>
                <td
                  data-th="Roue arrière"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.WheelRear}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden'
                      : 'hidden'
                  }`}
                >
                  Roue avant
                </th>
                <td
                  data-th="Roue avant"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.WheelFront}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Braking;
