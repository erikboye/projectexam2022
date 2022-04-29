import React from "react";
import { Icon } from "@iconify/react";

function Herobanner_Home() {
  return (
    <div className="herobanner">
      <h1 className="herobanner_title">LETS FIND A HOTEL THAT SUITS YOU. </h1>
      <div className="herobanner_options">
        <form className="formwrapper m-4 flex flex-wrap">
          <div className="herobanner_form pr-3 flex">
            <input
              id="destination"
              name="destionation"
              className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Location"
            />
            <label
              htmlFor="destination"
              className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
            >
              <Icon
                className="herobanner_dateformicons"
                icon="akar-icons:location"
                color="rgba(58, 59, 93, 1)"
              />
            </label>
          </div>
          <div className="herobanner_form pr-3 flex">
            <input
              id="destination"
              name="destionation"
              className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Check-In"
            />
            <label
              htmlFor="destination"
              className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
            >
              <Icon
                className="herobanner_dateformicons"
                icon="fontisto:date"
                color="rgba(58, 59, 93, 1)"
              />
            </label>
          </div>
          <div className="herobanner_form pr-3 flex">
            <input
              id="destination"
              name="destionation"
              className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Check-Out"
            />
            <label
              htmlFor="destination"
              className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
            >
              <Icon
                className="herobanner_dateformicons"
                icon="fontisto:date"
                color="rgba(58, 59, 93, 1)"
              />
            </label>
          </div>
          <div className="herobanner_form pr-3 flex">
            <input
              id="destination"
              name="destionation"
              className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="Bedrooms"
            />
            <label
              htmlFor="destination"
              className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
            >
              <Icon
                className="herobanner_dateformicons"
                icon="fluent:bed-16-filled"
                color="rgba(58, 59, 93, 1)"
              />
            </label>
          </div>
          <div>
            <button
              className="herobanner_home_searchbtn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Herobanner_Home;
