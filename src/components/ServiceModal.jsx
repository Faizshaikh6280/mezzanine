import useClickOutside from "@/hooks/useClickOutside";
import { RxCross2 } from "react-icons/rx";
import { createPortal } from "react-dom";

const ServiceModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const modalRef = useClickOutside(onClose); // Hook to detect outside clicks

  return createPortal(
    <div className="service-modal absolute w-3/4  top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div
        className="bg-white p-6 rounded-2xl shadow-lg relative min-h-[50rem] overflow-hidden "
        ref={modalRef}
      >
        <button
          className="absolute top-12 right-10 text-gray-700"
          onClick={onClose}
        >
          <RxCross2
            size={30}
            className="cursor-pointer relative z-10 px-4 py-4"
          />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("body")
  );
};

export default ServiceModal;
