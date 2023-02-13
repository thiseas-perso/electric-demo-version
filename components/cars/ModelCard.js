import Link from 'next/link';
import StudioImage from '../StudioImage';

const ModelCard = ({ maker, id, model, versions }) => {
  return (
    <li className="border rounded-lg overflow-hidden transition-colors hover:bg-light-primary-3 cursor-pointer">
      <Link href={`/tested-cars/models/${id}`}>
        <StudioImage
          model={model}
          maker={maker}
          width={200}
          height={125}
          className={'unselectable'}
        />
        <h3 className="text-center mb-4 font-extrabold">
          {maker} {model}
        </h3>
        <p className="text-center bg-light-primary-2 text-white">
          {versions} version{versions > 1 && 's'} testée{versions > 1 && 's'}
        </p>
      </Link>
    </li>
  );
};

export default ModelCard;
