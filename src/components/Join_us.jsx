import React from "react";
import styles from "../style";
import {round} from "../assets";

const Join_us = () => (
  <section className="bg-gradient-to-r from-[rgba(255,255,255,0.16)] to-[rgba(255,255,255,0.06)] w-[100vw] h-[250px] self-center mb-[130px] ">
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="font-michroma text-[35px] leading-[] text-center text-white z-[1000] mb-4">
        Join us in Shaping the Future
      </h2>

      <div>
        <button className=" px-12 py-4  text-white rounded-md font-michroma bg-blue">
          Get customized quotes
        </button>
        <span></span>
      </div>
    </div>
  </section>
);

export default Join_us;
