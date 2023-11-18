import React from "react";
import styles from "../style";
import {round} from "../assets";
import "../styles.css";

const Contact = () => (
  <section className="mb-[100px]">
    <div className="w-full md:w-4/6  mx-auto mt-8 p-0 md:p-6 shadow-md rounded-md">
      <h2 className="font-michroma text-[35px] leading-[] text-center text-white z-[1000] mb-4">
        Contact Us
      </h2>
      <p className="z-[1000] text-white text-[16px] mb-[80px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Aenean egestas an egestas fommer
        <br /> elementum dolor ac interdum. Duis et feugiat
        orci. Pellentesque sed turpis ipsum.
      </p>

      <div className="mb-8 block md:flex gap-8">
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-6 focus:outline-none myClass font-michroma text-[16px]  placeholder-white text-white myInput mb-8 md:mb-0"
          placeholder="example@example.com"
        />
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-6 focus:outline-none myClass font-michroma text-[16px]  placeholder-white text-white myInput"
          placeholder="example@example.com"
        />
      </div>

      <div className="mb-8">
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-6 focus:outline-none myClass font-michroma text-[16px]  placeholder-white text-white myInput"
          placeholder="Your Name"
        />
      </div>

      <div className="mb-6">
        <textarea
          id="message"
          name="message"
          rows="7"
          className="w-full px-4 py-4 focus:outline-none myClass font-michroma text-[16px]  placeholder-white text-white myInput"
          placeholder="Your message goes here..."
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <button
          type="button"
          className="px-14 py-4 text-white rounded-md font-michroma bg-blue text-[12px] "
        >
          Submit
        </button>
      </div>
    </div>
  </section>
);

export default Contact;
