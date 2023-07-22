const Modal = ({ children, isOpen, onOutsideClick }) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className="w-[100vw] h-[100vh] bg-gray-500 bg-opacity-50 z-50 absolute left-0 top-0"
            onClick={onOutsideClick}
          />
          <div className='w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center items-center'>
          <div className="animate-modal-popup z-[100]">
            {children}
          </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
