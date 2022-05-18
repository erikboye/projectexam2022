import React, { useState } from "react";
import Modal from "../modals/modal";

function CheckoutComponent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="checkout">
      <div className="checkout_wrapper">
        <div className="checkout_leftside">
          <h2 className="checkout_leftside_heading">
            Upgrade to All-Inclusive!
          </h2>

          <div className="checkout_leftside_miniheading_div">
            <p className="checkout_leftside_features">
              Unlock many features, free food, fun activities, with all
              inclusive!
            </p>
          </div>
          <div className="checkout_leftside_79aday">
            <span className="checkout_leftside_79">$79</span>
            <span className="checkout_leftside_aday">/a day</span>
          </div>
          <div className="checkout_leftside_discountwrapper">
            <span className="checkout_leftside_15percent">15% discount</span>
            <span className="checkout_leftside_discount_compared">
              compared to the monthly plan
            </span>
          </div>
          <div className="checkout_leftside_upgradediv">
            <span className="checkout_leftside_upgrade">UPGRADE NOW!</span>
          </div>
        </div>
        <div className="checkout_rightside">
          <div className="container">
            <div className="leading-loose">
              <form className="checkout_rightside_customer_form max-w-l m-5 p-10 bg-white rounded shadow-xl">
                <p className="text-gray-800 font-medium">
                  Customer information
                </p>
                <div className="">
                  <label
                    className="block text-sm text-gray-00"
                    htmlFor="cus_name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="cus_name"
                    name="cus_name"
                    type="text"
                    required=""
                    placeholder="Your Name"
                    s
                    aria-label="Name"
                  ></input>
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="cus_email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="Your Email"
                    aria-label="Email"
                  ></input>
                </div>

                <div className="inline-block mt-2 w-1/2 pr-1">
                  <label
                    className="hidden block text-sm text-gray-600"
                    htmlFor="cus_email"
                  >
                    Country
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_country"
                    name="cus_country"
                    type="text"
                    required=""
                    placeholder="Country"
                    aria-label="country"
                  ></input>
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                  <label
                    className="hidden block text-sm text-gray-600"
                    htmlFor="cus_email"
                  >
                    Zip
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_zip"
                    name="cus_zip"
                    type="text"
                    required=""
                    placeholder="Zip"
                    aria-label="zip"
                  ></input>
                </div>
                <p className="mt-4 text-gray-800 font-medium">
                  Payment information
                </p>
                <div className="">
                  <label
                    className="block text-sm text-gray-600"
                    htmlFor="cus_name"
                  >
                    Card
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_cardnumber"
                    name="cus_cardnumber"
                    type="text"
                    required=""
                    placeholder="Card Number MM/YY CVC"
                    aria-label="Cardnumber"
                  ></input>
                </div>
              </form>
            </div>
            <div className="checkout_rightside_wrapper">
              <div className="w-3/4 mx-auto bg-white rounded-md">
                <div className="flex flex-col justify-center items-center">
                  <h4 className="text-black font-medium my-4">Summary</h4>
                  <div
                    className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
                  >
                    <p className="text-gray-400 ml-4">Hotel</p>
                    <p className="text-black mr-4">*Hotelname*</p>
                  </div>
                  <div
                    className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
                  >
                    <p className="text-gray-400 ml-4">Price (VAT inc.)</p>
                    <p className="text-black mr-4">*Price*</p>
                  </div>
                  <div
                    className="
                flex
                justify-between
                items-center
                w-full
                py-5
                border-b-2 border-gray-200
              "
                  >
                    <p className="text-gray-400 ml-4">Total</p>
                    <p className="text-indigo-600 mr-4">$</p>
                  </div>
                  <div
                    className="
                flex flex-col
                justify-between
                items-center
                px-3
                py-3
                w-full
              "
                  ></div>
                  <button
                    className="paynow_btn"
                    onClick={() => setIsOpen(true)}
                  >
                    Pay Now
                  </button>
                  {isOpen && <Modal setIsOpen={setIsOpen} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutComponent;
