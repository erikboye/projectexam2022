import React from "react";
import { RiCloseLine } from "react-icons/ri";
import Link from "next/link";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={"darkBG"} onClick={() => setIsOpen(false)} />
      <div className={"centered"}>
        <div className={"modal"}>
          <div className={"modalHeader"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={"modalContent"}>
            <span className="text-2xl font-medium">Payment Successful</span>
          </div>
          <div className={"modalActions"}>
            <div className={"actionsContainer"}>
              <Link href={`/`}>
                <button
                  id="modal-close"
                  className="p-3 bg-[#4F46E5] rounded-lg w-full text-white"
                >
                  Thank you!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
