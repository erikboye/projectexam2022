import React from "react";
import Image from "next/image";
import Link from "next/link";

function HotelCardsComponent({ id, imageurl, description, title, location }) {
  const myLoader = ({ src }) => {
    return imageurl;
  };

  return (
    <div className="hotelcard">
      <div className="hotelcard_img">
        <Image
          loader={myLoader}
          src={imageurl}
          alt="pic"
          width={800}
          height={600}
        />
      </div>
      <div className="hotelcard_textdiv">
        <div>
          <p className="hotelcard_title">{title}</p>
          <p className="hotelcard_location">{location}</p>
        </div>
        <p className="hotelcard_description">{description}</p>
        <Link href={`/${id}`}>
          <a>
            <button className="hotelcard_atc_btn">View Accomondation</button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HotelCardsComponent;
