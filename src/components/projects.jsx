import React from "react";
import styles from "../style";
import {project_one} from "../assets";
import {data} from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const projects = () => (
  <section className="mb-[130px]">
    <h2 className="font-michroma text-[35px] leading-[] text-center text-white z-[1000] mb-4 ">
      Projects
    </h2>
    <p className="text-white text-[16px] text-center mb-[10px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Aenean egestas
      <br /> elementum dolor ac interdum. Duis et feugiat
      orci. Pellentesque sed turpis ipsum.
    </p>
    <div className="flex align-center justify-center m-auto ">
      <div className="mt-20 w-4/5">
        <Slider {...settings}>
          {data.map((car) => (
            <div className="flex justify-center items-center">
              <div className="flex justify-center ">
                <img
                  src={car.img}
                  alt=""
                  className="h-44 w-44 rounded bottom-60"
                />
              </div>

              <div className="px-8 py-8 rounded-md h-100 border-solid border-2">
                <h3 className=" text-white font-michroma pb-5">
                  {car.title}
                </h3>

                <p className="text-white text-[14px] pb-10">
                  {car.content}
                </p>
                <button className="text-[10px] font-michroma px-8 py-3 bg-button text-white rounded-md font-michroma text-white w-full">
                  see the project
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
);


export default projects;
