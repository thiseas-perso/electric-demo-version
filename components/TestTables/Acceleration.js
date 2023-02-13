import React, { useState } from 'react';
import TableHeader from '../TableHeader';
import accImg from '../../public/headers/acc.png';
import specImg from '../../public/headers/spec.png';
import driveImg from '../../public/headers/drive.png';
import weightImg from '../../public/headers/weight.png';
import horseImg from '../../public/headers/horse-power.png';
import versusImg from '../../public/headers/versus.png';
import calendarImg from '../../public/headers/calendar.png';
import tiresImg from '../../public/headers/tires.png';

const Acceleration = ({ tests, className }) => {
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
            Acceleration
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
              <TableHeader info="Motorisation" imageSrc={driveImg} />
            </th>

            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Acceleration (secondes)" imageSrc={accImg} />
            </th>

            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader
                info="Acceleration spec (secondes)"
                imageSrc={specImg}
              />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="test VS spec" imageSrc={versusImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Date" imageSrc={calendarImg} />
            </th>
            <th
              className={`${
                showDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Puissance (chevaux)" imageSrc={horseImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer'
                  : 'hidden'
              }`}
            >
              <TableHeader info="Pneux" imageSrc={tiresImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Poid (kg)" imageSrc={weightImg} />
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
                  : 'hidden'
              }`}
            >
              Roue arrière
            </th>
            <th
              className={`${
                showDetails && showMoreDetails
                  ? 'absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 '
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
                className="even:bg-light-primary-7/50  odd:bg-light-primary-3/50 rounded-3xl m-5 p-5 grid grid-cols-2 sm:table-row"
              >
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Motorisation" imageSrc={driveImg} />
                </th>
                <td
                  data-th="Motorisation"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Drive}
                </td>

                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="0-100km/h (secondes)" imageSrc={accImg} />
                </th>
                <td
                  data-th="0-100 (secondes)"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.ZeroTo100}
                </td>

                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="0-100 spec. (secondes)"
                    imageSrc={specImg}
                  />
                </th>
                <td
                  data-th="0-100 Spec (secondes)"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.ZeroTo100spec}
                </td>
                <th
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="test VS spec" imageSrc={versusImg} />
                </th>
                <td
                  data-th="test VS spec"
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.TestVsSpec}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Date" imageSrc={calendarImg} />
                </th>
                <td
                  data-th="Date"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Date}
                </td>
                <th
                  className={`${
                    showDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader
                    info="Puissance (cheveaux)"
                    imageSrc={horseImg}
                  />
                </th>
                <td
                  data-th="Hp"
                  className={`${
                    showDetails
                      ? 'block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Hp}
                </td>
                <th
                  className={`${
                    showDetails && showMoreDetails
                      ? 'font-extrabold flex justify-center mt-5 sm:hidden hover:cursor-pointer'
                      : 'hidden'
                  }`}
                >
                  <TableHeader info="Pneux" imageSrc={tiresImg} />
                </th>
                <td
                  data-th="Pneux"
                  className={`${
                    showDetails && showMoreDetails
                      ? 'block my-4 font-semibold before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg '
                      : 'hidden'
                  }`}
                >
                  {test.Tires}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Poid (kg)" imageSrc={weightImg} />
                </th>
                <td
                  data-th="Poid (kg)"
                  className={[
                    'block my-4 font-semibold before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg ',
                  ]}
                >
                  {test.Weight}
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

export default Acceleration;
