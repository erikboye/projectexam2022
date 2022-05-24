import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Select from "react-select";

function Alternatives({ hotelsArray }) {
  const sortedArray = hotelsArray.map((elm) => {
    return { value: elm.title, label: elm.title };
  });
  console.log("sortedArray", sortedArray);
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="p-10">
      <div className="container mx-auto flex justify-center items-center p-2 md:p-0">
        <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
          {/* SEARCHBAR HOTELPAGE */}
          <form className="d-flex searchbar mx-auto">
            <div className="alternatives_wrapper">
              <Select
                className="herobanner_searchbar"
                options={sortedArray}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                placeholder="Lets find a hotel"
              />
              <button
                className="alternatives_searchbtn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex flex-col md:flex-row"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
              <div className="flex border rounded items-center p-2 ">
                <Icon
                  className="herobanner_dateformicons"
                  icon="akar-icons:person"
                  color="rgba(58, 59, 93, 1)"
                />
                <input
                  type="number"
                  placeholder="Guests"
                  className=" max-w-full focus:outline-none text-gray-700"
                />
              </div>
              <div className="flex border rounded items-center p-2 ">
                <Icon
                  className="herobanner_dateformicons"
                  icon="fluent:bed-16-filled"
                  color="rgba(58, 59, 93, 1)"
                />
                <path
                  className="heroicon-ui"
                  d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"
                />
                <input
                  type="number"
                  placeholder="Bedrooms"
                  className=" max-w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
              <div className="flex border rounded  items-center p-2 ">
                <Icon
                  className="herobanner_dateformicons"
                  icon="ic:baseline-pool"
                  color="rgba(58, 59, 93, 1)"
                />
                <path
                  className="heroicon-ui"
                  d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"
                />
                <input
                  type="text"
                  placeholder="Facilities"
                  className=" max-w-full focus:outline-none text-gray-700"
                />
              </div>
              <div className="flex border rounded  items-center p-2 ">
                <Icon
                  className="herobanner_dateformicons"
                  icon="icon-park-outline:sport"
                  color="rgba(58, 59, 93, 1)"
                />
                <path
                  className="heroicon-ui"
                  d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"
                />
                <input
                  type="text"
                  placeholder="Activities"
                  className=" max-w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alternatives;
