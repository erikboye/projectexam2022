import React from "react";

function Newsletter() {
  return (
    <div className="newsletter_wrap">
      <form className="newsletter_form items-center justify-center px-5 signup_label m-12 flex">
        <input
          className="newsletterinput rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Sign up for newsletters"
        />
        <button className="newsletter_signup_btn px-2 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
