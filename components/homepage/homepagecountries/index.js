import React from "react";
import Image from "next/image";

function HomepageCountries() {
  return (
    <div className="row">
      <div className="mexico">
        <p>Mexico</p>
        <Image
          height="400"
          width="550"
          alt="Image of Norway"
          src="/../public/img/mexico.jpg"
        />
      </div>
      <div className="portugal">
        <p>Portugal</p>
        <Image
          height="400"
          width="550"
          alt="Image of Portugal"
          src="/../public/img/portugal.jpg"
        />
      </div>
      <div className="sweden">
        <p>Sweden</p>
        <Image
          height="400"
          width="550"
          alt="Image of Sweden"
          src="/../public/img/sweden.jpg"
        />
      </div>
      <div className="denmark">
        <p>Denmark</p>
        <Image
          height="400"
          width="700"
          alt="Image of Denmark"
          src="/../public/img/denmark.jpg"
        />
      </div>
      <div className="norway">
        <p>Norway</p>
        <Image
          height="400"
          width="800"
          alt="Image of Norway"
          src="/../public/img/norway.jpg"
        />
      </div>
      {/* <div className="egypt">
        <Image
          height="400"
          width="550"
          alt="Image of Sweden"
          src="/../public/img/egypt.jpg"
        />
      </div> */}
    </div>
  );
}

export default HomepageCountries;
