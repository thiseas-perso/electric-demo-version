import { motion } from 'framer-motion';

const Backdrop = ({ onClick }) => {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/20 z-20 backdrop-blur-sm"
      onClick={onClick}
    />
  );
};

export default Backdrop;
