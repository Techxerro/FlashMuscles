import React from "react";
import prod from "../../../assets/homepage/image 11.png";

function Choosesection() {
  return (
    <section className="w-full mx-auto px-10 lg:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-24 mb-24">
        <div className=" first flex flex-col">
          <h1 className="font-black text-[2.5rem]  lg:text-5xl lg:leading-[50px] mb-4 font-brastika">
            WHY YOU CHOOSE OUR PRODUCT
          </h1>
          <ul
            className="text-base mb-10 ml-3 lg:ml-10 leading-8 font-body"
            style={{ listStyleType: "disc" }}
          >
            <li>Tastes like dessert without added sugars or sugar alcohols</li>
            <li>No artificial sweeteners, dairy, say or corn fiber</li>
            <li>10G of collagen protein from grass-fed cows</li>
            <li>Formulated to reduce blood sugar intact</li>
            <li>Organic almond Butter, Sunflower Lecithin</li>
            <li>No energy crashes. Collagen Protein, Stevia</li>
            <li>10G of collagen protein from grass-fed cows</li>
          </ul>
          <div className="btn">
            <button className="font-body  flex justify-center items-center w-auto  border-solid border-[#132B25] p-4 px-8 gap-2.5 rounded-[38px] border">
              Shop Now
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4306 1.26407C10.4306 0.987929 10.2067 0.764071 9.9306 0.764071L5.4306 0.764072C5.15446 0.764071 4.9306 0.987929 4.9306 1.26407C4.9306 1.54021 5.15446 1.76407 5.4306 1.76407L9.4306 1.76407L9.4306 5.76407C9.4306 6.04021 9.65446 6.26407 9.9306 6.26407C10.2067 6.26407 10.4306 6.04021 10.4306 5.76407L10.4306 1.26407ZM1.61283 10.2889L10.2842 1.61762L9.57705 0.910518L0.905724 9.58184L1.61283 10.2889Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center items-center">
          <img
            src={prod}
            className="w-3/4 md:w-full"
            alt="heroImg"
          />
        </div>
      </div>
    </section>
  );
}

export default Choosesection;
