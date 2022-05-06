import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { DateRangePicker } from "@mantine/dates";

function Herobanner_Home() {
  const [value, setValue] = [new Date(2021, 11, 1), new Date(2021, 11, 5)];

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
          <div>
            <DateRangePicker
              className="herobanner_datepicker"
              placeholder="Pick a date"
              value={value}
              onChange={setValue}
            />
          </div>

          <Link href={`/hotels`}>
            <a>
              <button
                className="herobanner_home_searchbtn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Herobanner_Home;
