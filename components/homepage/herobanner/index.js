import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Select from "react-select";
import { DateRangePicker } from "@mantine/dates";

function Herobanner_Home({ hotelsArray }) {
  const sortedArray = hotelsArray.map((elm) => {
    return { value: elm.title, label: elm.title };
  });
  console.log(hotelsArray);
  const [value, setValue] = [new Date(2021, 11, 1), new Date(2021, 11, 5)];
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="herobanner">
      <h1 className="herobanner_title">LETS FIND A HOTEL THAT SUITS YOU. </h1>
      <div className="herobanner_options">
        <form className="formwrapper m-4 flex flex-wrap">
          <div className="herobanner_form pr-3 flex">
            <Select
              className="herobanner_searchbar_homepage"
              options={sortedArray}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              placeholder="Where are you going?"
            />
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
