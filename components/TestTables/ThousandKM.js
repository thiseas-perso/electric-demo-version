import TableHeader from '../TableHeader';
import durationImg from '../../public/headers/duration.png';
import consumptionImg from '../../public/headers/consumption.png';
import kmhImg from '../../public/headers/kmh.png';
import tempImg from '../../public/headers/temp.png';
import carImg from '../../public/headers/car_full.png';

const ThousandKM = ({ tests, className, fullTest }) => {
  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2 p-3">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-3 text-left dark:bg-black">
            1000km
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
                className="odd:bg-light-primary-0  even:text-black even:bg-light-primary-4 text-white dark:even:bg-dark-primary-1  dark:odd:bg-dark-primary-mid dark:text-white rounded-3xl my-5 grid grid-cols-2 sm:table-row"
              >
                {fullTest && (
                  <>
                    <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                      <TableHeader info="Voiture" imageSrc={carImg} />
                    </th>
                    <td
                      data-th="Voiture"
                      className="block my-4 font-semibold  sm:table-cell sm:p-2 sm:rounded-lg sm:font-semibold"
                    >
                      {test.Car}
                    </td>
                  </>
                )}
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
