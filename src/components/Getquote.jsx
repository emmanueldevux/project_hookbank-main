import React, {useState} from "react";
import styles from "../style";
import {round} from "../assets";
import "../styles.css";

const Getquote = () => {
  // State to manage the selected checkboxes
  const [selectedCategories, setSelectedCategories] =
    useState({
      category1: false,
      category2: false,
      category3: false,
      // Add more categories as needed
    });

  // Handler function to update the selected checkboxes
  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  return (
    <section className="mb-[100px]">
      <div className="w-full md:w-4/6  mx-auto mt-8 p-0 md:p-6 shadow-md rounded-md">
        <h2 className="font-michroma text-[35px] leading-[] text-center text-white z-[1000] mb-4">
          Get Quote for your Project
        </h2>
        <p className="z-[1000] text-white text-[16px] mb-[80px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Aenean egestas an egestas fommer
          <br /> elementum dolor ac interdum. Duis et
          feugiat orci. Pellentesque sed turpis ipsum.
        </p>

        <div className="mb-8">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-6 focus:outline-none myClass font-michroma text-[16px]  placeholder-white text-white myInput"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-8">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-6 focus:outline-none myClass font-michroma text-[16px]  placeholder-white text-white myInput"
            placeholder="Project Description"
          />
        </div>

        <div className="mb-8">
          <div>
            <h3 className="font-michroma mb-6 text-white text-[20px] mb-[80px]">
              Project Category
            </h3>

            <div className="block md:flex md:justify-between">
              <div className="checkbox-container">
                <label className="font-michroma mb-2 text-white checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={selectedCategories.category1}
                    onChange={() =>
                      handleCheckboxChange("category1")
                    }
                  />
                  Initial Stage
                </label>
              </div>
              <div>
                <label className="font-michroma mb-2 text-white checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={selectedCategories.category2}
                    onChange={() =>
                      handleCheckboxChange("category2")
                    }
                  />
                  Intermediate Stage
                </label>
              </div>
              <div>
                <label className="font-michroma mb-2 text-white checkbox-label">
                  <input
                    className="checkbox-input"
                    type="checkbox"
                    checked={selectedCategories.category3}
                    onChange={() =>
                      handleCheckboxChange("category3")
                    }
                  />
                  Advanced Stage
                </label>
              </div>
            </div>
            {/* Add more checkboxes as needed */}
          </div>
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
};

export default Getquote;
