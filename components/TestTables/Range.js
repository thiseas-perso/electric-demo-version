import { useState } from 'react';

import TableHeader from '../TableHeader';

const kmhImg = '/headers/kmh.png';
const batteryImg = '/headers/battery_kwh.png';
const range100Img = '/headers/range_100.png';
const range100DarkImg = '/headers/range_100_dark.png';
const range80Img = '/headers/range_80.png';
const range80DarkImg = '/headers/range_80_dark.png';
const charge80Img = '/headers/charge_80.png';
const charge80DarkImg = '/headers/charge_80_dark.png';
const chargekmhImg = '/headers/charge_kmh.png';
const chargekmhDarkImg = '/headers/charge_kmh_dark.png';
const consumptionImg = '/headers/consumption.png';
const tempImg = '/headers/temp.png';
const roadImg = '/headers/road.png';
const seasonImg = '/headers/season.png';
const tiresImg = '/headers/tires.png';
const carImg = '/headers/car_full.png';

const Range = ({ tests, className, fullTest }) => {
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
      <table className="min-w-full border-separate border-spacing-2 p-3">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-3 text-left flex items-center gap-x-4 dark:bg-black">
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
            {fullTest && (
              <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
                <TableHeader info="Voiture" imageSrc={carImg} />
              </th>
            )}
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
                imageDarkSrc={range100DarkImg}
              />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Autonomie 80% à 5% (km)"
                imageSrc={range80Img}
                imageDarkSrc={range80DarkImg}
              />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Temps de charge 5% à 80%(minutes)"
                imageSrc={charge80Img}
                imageDarkSrc={charge80DarkImg}
              />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Km chargés par heure (0 à 75%)"
                imageSrc={chargekmhImg}
                imageDarkSrc={chargekmhDarkImg}
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
                className="odd:bg-light-primary-0  even:text-black even:bg-light-primary-4 text-white dark:even:bg-dark-primary-1  dark:odd:bg-dark-primary-mid dark:text-white rounded-3xl my-5 p-5 grid grid-cols-2 sm:table-row"
              >
                {fullTest && (
                  <>
                    <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                      <TableHeader info="Voiture" imageSrc={carImg} />
                    </th>
                    <td
                      data-th="Voiture"
                      className="block my-2 font-extrabold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                    >
                      {test.Car}
                    </td>
                  </>
                )}
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Km/h" imageSrc={kmhImg} />
                </th>

                <td
                  className="block my-2  sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Vitesse (km/h)"
                >
                  {test.Speed}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Capacitée réelle (kWh)"
                    imageSrc={batteryImg}
                  />
                </th>
                <td
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Capacitée réelle (kWh)"
                >
                  {Number(test.Capacity.replace(',', '.')).toFixed(0)}
                </td>
                <th
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Température (°C)" imageSrc={tempImg} />
                </th>
                <td
                  className={`${
                    showDetails
                      ? 'block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Température (°C)"
                >
                  {test.Temp}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Autonomie (100% à 0%)"
                    imageSrc={range100Img}
                    imageDarkSrc={range100DarkImg}
                  />
                </th>
                <td
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Autonomie (100% à 0%)"
                >
                  {test.Range100}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Autonomie 80% à 5% (km)"
                    imageSrc={range80Img}
                    imageDarkSrc={range80DarkImg}
                  />
                </th>
                <td
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Autonomie 80% à 5% (km)"
                >
                  {test.Range75}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Temps de charge 5% à 80%(minutes)"
                    imageSrc={charge80Img}
                    imageDarkSrc={charge80DarkImg}
                  />
                </th>
                <td
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Temps de charge 5% à 80%(minutes)"
                >
                  {test.ChargingTime75}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Km chargés par heure (0 à 75%)"
                    imageSrc={chargekmhImg}
                    imageDarkSrc={chargekmhDarkImg}
                  />
                </th>
                <td
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Km chargés par heure (0 à 75%)"
                >
                  {test.KmPerH75}
                </td>
                <th className="font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Consomation (kWh/100km)"
                    imageSrc={consumptionImg}
                  />
                </th>
                <td
                  className="block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                  data-th="Consomation (kWh/100km)"
                >
                  {(Number(test.WhPerKm) / 10).toFixed(1)}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Surface" imageSrc={roadImg} />
                </th>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Surface"
                >
                  {test.Surface}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Saison" imageSrc={seasonImg} />
                </th>
                <td
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                  data-th="Saison"
                >
                  {test.Season}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center my-2 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Pneux" imageSrc={tiresImg} />
                </th>
                <td
                  className={`${
                    showMoreDetails
                      ? 'block my-2 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
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
                      ? 'block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
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
                      ? 'block my-2 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg '
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
