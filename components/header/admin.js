import Link from "next/link";
import { useState } from "react";

export const AdminNavbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className=" Header flex items-center flex-wrap p-10 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className=" Header__Text text-xl text-white  tracking-wide">
              PRIMA VERA
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className=" Header__Nav lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-red ">
                Home
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Edit hotel
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-auto px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Sign Out
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
