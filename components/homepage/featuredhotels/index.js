import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const FeaturedHotelCards = () => {
  const [api, setApi] = useState(null);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:1337/hotels/");
      const data = await res.json();
      setApi(data);
    }

    getData();
  }, []);

  return (
    <div className="featured">
      {api
        ? api.map(
            ({ featured, id, location, title, imageurl, description }) => {
              if (featured) {
                const myLoader = ({ src }) => {
                  return imageurl;
                };
                return (
                  <div key={id}>
                    <div className="featured_card">
                      <div className="featured_img_div">
                        <Image
                          loader={myLoader}
                          src={imageurl}
                          alt="Image"
                          width={500}
                          height={400}
                        />
                      </div>
                      <div className="featured_text">
                        <p className="featured_title">{title}</p>
                        <p className="featured_description">{location}</p>
                        <p className="featured_description">{description}</p>

                        <div className="featured_staricons">
                          <Icon
                            className="details_starIcon"
                            icon="ant-design:star-filled"
                          />
                          <Icon
                            className="details_starIcon"
                            icon="ant-design:star-filled"
                          />
                          <Icon
                            className="details_starIcon"
                            icon="ant-design:star-filled"
                          />
                          <Icon
                            className="details_starIcon"
                            icon="bxs:star-half"
                          />
                        </div>
                        <Link href={`/${id}`}>
                          <a>
                            <button className="featured_btn">View Hotel</button>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            }
          )
        : ""}
    </div>
  );
};

export default FeaturedHotelCards;
