import TableHeader from '../TableHeader';
import carFrontImg from '../../public/headers/car_front.png';
import carRearImg from '../../public/headers/car_rear.png';
import weightImg from '../../public/headers/weight.png';
import scaleImg from '../../public/headers/scale.png';
import batteryImg from '../../public/headers/battery_kwh.png';
import carImg from '../../public/headers/car_full.png';

const Weight = ({ tests, className, fullTest }) => {
  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2 p-3">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-3 text-left w-full dark:bg-black">
            Poid
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
              <TableHeader info="Total (kg)" imageSrc={weightImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Arrière" imageSrc={carRearImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Avant" imageSrc={carFrontImg} />
            </th>

            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Distribution" imageSrc={scaleImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
              <TableHeader info="Batterie" imageSrc={batteryImg} />
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
                    <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                      <TableHeader info="Voiture" imageSrc={carImg} />
                    </th>
                    <td
                      data-th="Voiture"
                      className="block my-4 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg "
                    >
                      {test.Car}
                    </td>
                  </>
                )}
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Total (kg)" imageSrc={weightImg} />
                </th>
                <td
                  data-th="Total (kg)"
                  className="block my-4 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Total}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Arrière" imageSrc={carRearImg} />
                </th>
                <td
                  data-th="Arrière"
                  className="block my-4 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Rear}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Avant" imageSrc={carFrontImg} />
                </th>
                <td
                  data-th="Avant"
                  className="block my-4 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Front}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Distribution" imageSrc={scaleImg} />
                </th>
                <td
                  data-th="Distribution"
                  className="block my-4 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Distribution}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Batterie" imageSrc={batteryImg} />
                </th>
                <td
                  data-th="Batterie"
                  className="block my-4 font-semibold   sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Battery}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Weight;
