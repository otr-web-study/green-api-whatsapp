import { useEffect } from 'react';

const ESC_KEY = 'Escape';

const ModalContainer = ({ children, onClose }) => {
  useEffect(() => {
    const handleEscClose = (evt) => {
      console.log(evt.key);
      if (evt.key === ESC_KEY) {
        evt.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscClose);

    return () => window.removeEventListener('keydown', handleEscClose);
  }, []);

  const handlePopupMouseDown = (evt) => {
    if (evt.target.id === 'modal-background') {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed z-100 top-0 left-0 h-full w-full flex justify-center items-center bg-bg_white_05"
      onMouseDown={handlePopupMouseDown}
    >
      <div className="relative box-shadow max-w-md w-full px-9 py-10 flex flex-col items-center bg-bg_gray border-t-bg_stripe border-t-[40px]">
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
