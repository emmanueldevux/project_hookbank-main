import React from "react";
import styles from "../style";
import {round, ellipse,} from "../assets";

const Team = () => (
  <section className="flex flex-col items-center justify-center mb-[130px]">
    <h2 className="font-michroma text-[35px] leading-[] text-center text-white z-[1000] mb-[20px]">
      Team
    </h2>
    <p className="z-[1000] text-white text-[16px] text-center mb-[50px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Aenean egestas
      <br /> elementum dolor ac interdum. Duis et feugiat
      orci. Pellentesque sed turpis ipsum.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 w-4/6">
      {/* --------------------mobile nav------------------- */}
      <div className="flex flex-col items-center justify-center">
        <img
          src={ellipse}
          alt=""
          className="h-[160px] w-[160px] mb-5"
        />
        <h4 className="font-michroma text-[20px] leading-[]  text-white mb-5">
          Lorem Ipsum
        </h4>
        <p className="font-poppins text-[15px] leading-[]  text-white">
          Lorem Ipsum
        </p>
      </div>

      {/* --------------------mobile nav------------------- */}
      <div className="flex flex-col items-center justify-center">
        <img
          src={ellipse}
          alt=""
          className="h-[160px] w-[160px] mb-5"
        />
        <h4 className="font-michroma text-[20px] leading-[]  text-white mb-5">
          Lorem Ipsum
        </h4>
        <p className="font-poppins text-[15px] leading-[]  text-white">
          Lorem Ipsum
        </p>
      </div>

      {/* --------------------mobile nav------------------- */}
      <div className="flex flex-col items-center justify-center">
        <img
          src={ellipse}
          alt=""
          className="h-[160px] w-[160px] mb-5"
        />
        <h4 className="font-michroma text-[20px] leading-[]  text-white mb-5">
          Lorem Ipsum
        </h4>
        <p className="font-poppins text-[15px] leading-[]  text-white">
          Lorem Ipsum
        </p>
      </div>
    </div>
  </section>
);

export default Team;
