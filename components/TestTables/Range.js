import React, { useState } from 'react';
import TableHeader from '../TableHeader';
import kmhImg from '../../public/headers/kmh.png';
import batteryImg from '../../public/headers/battery_kwh.png';
import range100Img from '../../public/headers/range_100.png';
import range80Img from '../../public/headers/range_80.png';
import charge80Img from '../../public/headers/charge_80.png';
import chargekmhImg from '../../public/headers/charge_kmh.png';
import consumptionImg from '../../public/headers/consumption.png';
import tempImg from '../../public/headers/temp.png';
import roadImg from '../../public/headers/road.png';
import seasonImg from '../../public/headers/season.png';
import tiresImg from '../../public/headers/tires.png';

const Range = ({ tests, className }) => {
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
            Autonomie
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
              <TableHeader info="Km/h" imageSrc={kmhImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Capacitée réelle (kWh)"
                imageSrc={batteryImg}
              />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Température" imageSrc={tempImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Autonomie 100% à 0% (km)"
                imageSrc={range100Img}
              />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Autonomie 80% à 5% (km)"
                imageSrc={range80Img}
              />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Temps de charge 80% à 5% (minutes)"
                imageSrc={charge80Img}
              />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Km chargés par heure (0 à 75%)"
                imageSrc={chargekmhImg}
              />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="kWh/100km" imageSrc={consumptionImg} />
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Surface" imageSrc={roadImg} />
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Saison" imageSrc={seasonImg} />
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Pneux" imageSrc={tiresImg} />
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              Roue arrière
            </th>
            <th
              className={`${
                showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
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
                  <TableHeader info="Km/h" imageSrc={kmhImg} />
                </th>

                <td
                  className="block my-4  sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Vitesse (km/h)"
                >
                  {test.Speed}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Capacitée réelle (kWh)"
                    imageSrc={batteryImg}
                  />
                </th>
                <td
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Capacitée réelle (kWh)"
                >
                  {Number(test.Capacity.replace(',', '.')).toFixed(0)}
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
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Température (°C)"
                >
                  {test.Temp}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Autonomie (100% à 0%)"
                    imageSrc={range100Img}
                  />
                </th>
                <td
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Autonomie (100% à 0%)"
                >
                  {test.Km}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Autonomie 80% à 5% (km)"
                    imageSrc={range80Img}
                  />
                </th>
                <td
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Autonomie 80% à 5% (km)"
                >
                  {test.Range75}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Temps de charge 80% à 5% (minutes)"
                    imageSrc={charge80Img}
                  />
                </th>
                <td
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Temps de charge 80% à 5% (minutes)"
                >
                  {test.ChargingTime75}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Km chargés par heure (0 à 75%)"
                    imageSrc={chargekmhImg}
                  />
                </th>
                <td
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Km chargés par heure (0 à 75%)"
                >
                  {test.KmPerH75}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Consomation (kWh/100km)"
                    imageSrc={consumptionImg}
                  />
                </th>
                <td
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Consomation (kWh/100km)"
                >
                  {(Number(test.WhPerKm) / 10).toFixed(1)}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Surface" imageSrc={roadImg} />
                </th>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Surface"
                >
                  {test.Surface}
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
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Saison"
                >
                  {test.Season}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Pneux" imageSrc={tiresImg} />
                </th>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Pneux"
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

export default Range;
