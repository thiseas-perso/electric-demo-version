import TableHeader from '../TableHeader';
import durationImg from '../../public/headers/duration.png';
import consumptionImg from '../../public/headers/consumption.png';
import kmhImg from '../../public/headers/kmh.png';
import tempImg from '../../public/headers/temp.png';

const ThousandKM = ({ tests, className }) => {
  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left">
            1000km
          </h3>
        </caption>
        <thead>
          <tr>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Durée" imageSrc={durationImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Km/h" imageSrc={kmhImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="kWh/100km" imageSrc={consumptionImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Température" imageSrc={tempImg} />
            </th>
            {/* <th>Date</th> */}
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
                  <TableHeader info="Durée" imageSrc={durationImg} />
                </th>
                <td
                  data-th="Durée"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Time}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Km/h" imageSrc={kmhImg} />
                </th>
                <td
                  data-th="Km/h"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.kmPerH}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="kWh/100km" imageSrc={consumptionImg} />
                </th>
                <td
                  data-th="KWh/km"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {(Number(test.WhPerKm.replace(',', '.')) / 10).toFixed(1)}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Température" imageSrc={tempImg} />
                </th>
                <td
                  data-th="Température"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Temp}
                </td>
                {/* <td>{test.Date}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ThousandKM;
