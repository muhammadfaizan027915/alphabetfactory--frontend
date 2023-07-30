const Modal = ({ children, isOpen, onOutsideClick }) => {
  const onClickContainer = (event) => event.stopPropagation();

  return (
    <>
      {isOpen && (
        <>
          <div
            className="w-[100vw] h-[100vh] bg-gray-500 bg-opacity-50 z-50 absolute left-0 top-0 flex items-center justify-center"
            onClick={onOutsideClick}
          >
            <div
              className="animate-modal-popup z-[100] mx-auto w-[90%] md:w-fit"
              onClick={onClickContainer}
            >
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
