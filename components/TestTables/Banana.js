import TableHeader from '../TableHeader';
import frunkImg from '../../public/headers/frunk.png';
import trunkImg from '../../public/headers/trunk.png';
import seatImg from '../../public/headers/seat.png';
import carImg from '../../public/headers/car_full.png';

const Banana = ({ tests, className, fullTest }) => {
  return (
    <div className={className}>
      <table className="min-w-full border-separate border-spacing-2 p-3">
        <caption>
          <h3 className="font-bold bg-light-primary-2 text-white p-3 text-left dark:bg-black">
            Banana Box
          </h3>
        </caption>
        <thead>
          <tr>
            {fullTest && (
              <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0  hover:cursor-pointer">
                <TableHeader info="Voiture" imageSrc={carImg} />
              </th>
            )}
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 hover:cursor-pointer">
              <TableHeader info="Coffre" imageSrc={trunkImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 hover:cursor-pointer">
              <TableHeader info="Coffre sièges baissés" imageSrc={seatImg} />
            </th>
            <th className="absolute top-[-9999px] left-[-9999px] sm:static sm:top-0 hover:cursor-pointer">
              <TableHeader info="Coffre avant" imageSrc={frunkImg} />
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
                      className="block my-4 font-semibold  before:font-normal before:italic before:block sm:before:content-none sm:table-cell sm:p-2 sm:rounded-lg "
                    >
                      {test.Car}
                    </td>
                  </>
                )}
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Coffre" imageSrc={trunkImg} />
                </th>
                <td
                  data-th="Coffre"
                  className="block my-4 font-semibold sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Trunk}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader
                    info="Coffre sièges baissés"
                    imageSrc={seatImg}
                  />
                </th>
                <td
                  data-th="Coffre sièges baissés"
                  className="block my-4 font-semibold sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.SeatsFolded}
                </td>
                <th className="font-extrabold flex justify-center my-4 sm:hidden hover:cursor-pointer">
                  <TableHeader info="Coffre Avant" imageSrc={frunkImg} />
                </th>
                <td
                  data-th="Coffre Avant"
                  className="block my-4 font-semibold sm:table-cell sm:p-2 sm:rounded-lg "
                >
                  {test.Frunk || 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Banana;
