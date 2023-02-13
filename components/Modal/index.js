import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
import ClientOnlyPortal from '../ClientOnlyPortal';
const Modal = ({ handleClose, children, open }) => {
  if (!open) return null;
  return (
    <ClientOnlyPortal selector="#modal">
      <Backdrop onClick={handleClose} />
      {/* <div className="fixed top-[50%] translate-y-[-50%] left-[50%]  translate-x-[-50%] z-20"> */}
      <div className="absolute top-[40%] translate-y-[-50%] left-[50%]  translate-x-[-50%] min-w-[290px]  z-20">
        {children}
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
