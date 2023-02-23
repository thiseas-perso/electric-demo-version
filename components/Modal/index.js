import Backdrop from '../backdrop';
import ClientOnlyPortal from '../clientOnlyPortal';
const Modal = ({ handleClose, children, open }) => {
  if (!open) return null;
  const yOffset = window.pageYOffset;
  console.log(yOffset);
  return (
    <ClientOnlyPortal selector="#modal">
      <Backdrop onClick={handleClose} />
      <div
        style={{ top: `calc(40vh + ${yOffset}px)` }}
        className={`absolute translate-y-[-50%] left-[50%]  translate-x-[-50%] min-w-[290px]  z-20`}
      >
        {children}
      </div>
    </ClientOnlyPortal>
  );
};

export default Modal;
