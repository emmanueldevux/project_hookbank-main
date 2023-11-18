import React from 'react'
import {telegram, discord, twitter} from '../assets'

export const Footer = () => (
  <section className="bg-gradient-to-r from-[rgba(255,255,255,0.16)] to-[rgba(255,255,255,0.06)] w-[100vw] h-[220px] self-center flex flex-col items-center justify-center">
    <div>
      <h4 className="text-white font-michroma text-[30px] text-center mb-4">
        OxArchitect
      </h4>
      <p className="text-white font-poppins text-[16px] text-center mb-4">
        All Rights Reserved
      </p>
      <ul className="flex gap-6 items-center justify-center">
        <li>
          <a href="">
            {" "}
            <img
              src={twitter}
              alt=""
            />
          </a>
        </li>

        <li>
          <a href="">
            {" "}
            <img
              src={discord}
              alt=""
            />
          </a>
        </li>

        <li>
          <a href="">
            {" "}
            <img
              src={telegram}
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>

    <div>
      <span></span>
    </div>
  </section>
);

export default Footer;