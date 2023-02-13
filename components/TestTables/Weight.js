import TableHeader from '../TableHeader';
import carFrontImg from '../../public/headers/car_front.png';
import carRearImg from '../../public/headers/car_rear.png';
import weightImg from '../../public/headers/weight.png';
import scaleImg from '../../public/headers/scale.png';
import batteryImg from '../../public/headers/battery_kwh.png';

const Weight = ({ tests, className }) => {
  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-2 text-left w-full">
            Poid
          </h3>
        </caption>
        <thead>
          <tr>
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
                className="even:bg-light-primary-7/50  odd:bg-light-primary-3/50 rounded-3xl p-5 m-5 grid grid-cols-2 sm:table-row"
              >
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Total (kg)" imageSrc={weightImg} />
                </th>
                <td
                  data-th="Total (kg)"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Total}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Arrière" imageSrc={carRearImg} />
                </th>
                <td
                  data-th="Arrière"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Rear}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Avant" imageSrc={carFrontImg} />
                </th>
                <td
                  data-th="Avant"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Front}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Distribution" imageSrc={scaleImg} />
                </th>
                <td
                  data-th="Distribution"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Distribution}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Batterie" imageSrc={batteryImg} />
                </th>
                <td
                  data-th="Batterie"
                  className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
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
