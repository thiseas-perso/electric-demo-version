import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import arrowButton from '../../public/icons/arrow-button.svg';
import closeButton from '../../public/icons/close-button.svg';
import Modal from '../Modal';
import MakerBtn from './MakerBtn';

const MakerSection = ({ last, dataByMaker }) => {
  const [display, setDisplay] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [models, setModels] = useState([]);
  const [maker, setMaker] = useState('');
  const contentRef = useRef();
  let height;
  if (contentRef.current) height = `${contentRef.current.scrollHeight}px`;

  return (
    <section>
      <div className="flex items-center  p-3 gap-3 dark:bg-transparent">
        <h2
          className="hover:cursor-pointer"
          onClick={() => setDisplay((prev) => !prev)}
        >
          Chercher par marque
        </h2>
        <button
          className="border-none h-9 m-0 p-0"
          onClick={() => setDisplay((prev) => !prev)}
        >
          <Image
            src={display ? closeButton : arrowButton}
            alt="click to display brands"
            className="rotate-180 unselectable"
          />
        </button>
      </div>

      <div
        ref={contentRef}
        className={`transition-[height] delay-100 overflow-hidden `}
        style={{ height: display ? height : '0px' }}
      >
        <div
          className={`flex flex-wrap gap-2 flex-grow  p-3 pb-8 justify-center items-start ${
            last && 'mb-20'
          } dark:bg-transparent`}
        >
          {dataByMaker.map((data) => (
            <MakerBtn
              maker={data.maker}
              key={data.maker}
              onClick={() => {
                setModalOpen(true);
                setModels(() => data.models);
                setMaker(() => data.maker);
              }}
            />
          ))}
        </div>
      </div>
      <Modal
        open={modalOpen}
        handleClose={() => {
          setModalOpen(false);
          setModels([]);
          setMaker();
        }}
      >
        <div className="bg-gradient-to-bl  rounded-lg from-pink-500 via-red-500 to-yellow-500 p-2  overflow-hidden ">
          <div className="bg-white dark:bg-light-primary-2 pt-0 rounded-lg overflow-hidden flex flex-col min-w-[200px] font-sans h-full w-full">
            <div className="">
              <h1 className="text-3xl dark:text-white mb-5 p-4 font-poppins font-bold dark:bg-light-primary-2 text-center">
                Les modèles{' '}
                <span className="text-light-primary-4">{maker}</span>
              </h1>

              <ul className="flex flex-col justify-center items-center">
                {models.map((el) => (
                  <li key={el.id}>
                    <div className="border-none rounded-lg mb-2 w-fit bg-gradient-to-r from-light-primary-start to-light-primary-end p-0 hover:cursor-pointer">
                      <Link href={`/tested-cars/models/${el.id}`}>
                        <div className="bg-none rounded-lg transition-colors text-white p-3 hover:bg-white/40">
                          <span className="font-bold">{el.model}</span>{' '}
                          <span className="italic font-light">
                            ({el.versions} version
                            {el.versions > 1 && 's'})
                          </span>
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="rounded-none border-none bg-light-primary-2 text-white mt-4 dark:bg-black"
              onClick={() => setModalOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default MakerSection;
