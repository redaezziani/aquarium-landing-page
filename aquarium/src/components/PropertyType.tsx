import { Swiper, SwiperSlide } from "swiper/react";
import home from "../assets/svgs/Group 3.svg";
import apartment from "../assets/svgs/Group.svg";
import shop from "../assets/svgs/Group(1).svg";
import office from "../assets/svgs/Group(2).svg";
import villa from "../assets/svgs/Group 3(1).svg";
import { useState } from "react";
import "swiper/css";

interface PropertyTypeProps {
  name: string;
  desc: string;
  img: string;
  isActive: boolean;
}

const PropertyType = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const data: PropertyTypeProps[] = [
    {
      name: "Private House",
      desc: "523 Property",
      img: home,
      isActive: false,
    },
    {
      name: "Apartment",
      desc: "142 Property",
      img: apartment,
      isActive: false,
    },
    {
      name: "Shop",
      desc: "81 Property",
      img: shop,
      isActive: false,
    },
    {
      name: "Office",
      desc: "231 Property",
      img: office,
      isActive: true,
    },
    {
      name: "Villa",
      desc: "423 Property",
      img: villa,
      isActive: false,
    },
  ];

  const next = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const prev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  }

  return (
    <div className=" mt-24 w-[75%] flex flex-col justify-start items-start z-30">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Property Type</h1>
        <div className="flex gap-3">
          <button
            onClick={prev}
            title="Previous"
            className="w-8 h-8 bg-[#FA264626] rounded-md flex justify-center items-center"
          >
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.24226 6.3992L6.91697 0.835202C7.15811 0.598772 7.46355 0.488435 7.76899 0.488435C8.07442 0.488435 8.37986 0.598772 8.621 0.835202C9.08719 1.2923 9.08719 2.04888 8.621 2.50598L3.79829 7.23459L8.621 11.9632C9.08719 12.4203 9.08719 13.1769 8.621 13.634C8.1548 14.0911 7.38317 14.0911 6.91697 13.634L1.24226 8.06998C0.759986 7.61288 0.759986 6.8563 1.24226 6.3992Z"
                fill="#FA2646"
              />
            </svg>
          </button>
          <button
            onClick={next}
            title="Next"
            className="w-8 h-8  bg-[#FA2646] rounded-md flex justify-center items-center"
          >
            <svg
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.71136 7.5776L3.03664 13.1416C2.79551 13.378 2.49007 13.4884 2.18463 13.4884C1.87919 13.4884 1.57375 13.378 1.33262 13.1416C0.866422 12.6845 0.866422 11.9279 1.33262 11.4708L6.15532 6.74221L1.33262 2.0136C0.866422 1.5565 0.866422 0.799924 1.33262 0.342824C1.79881 -0.114275 2.57045 -0.114275 3.03664 0.342824L8.71136 5.90683C9.19363 6.36393 9.19363 7.1205 8.71136 7.5776Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
        className=" mt-10 w-full p-3"
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`  w-52 h-52   flex flex-col justify-center items-center  border ${
                item.isActive
                  ? " border-red-600 "
                  : "border-slate-600"
              } rounded-xl p-4`}
            >
              <img src={item.img} alt="" className=" w-16 h-16 object-cover" />
              <h1 className="text-sm font-bold text-gray-800 mt-2">
                {item.name}
              </h1>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PropertyType;
