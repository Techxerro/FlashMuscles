import React from "react";
import mainProd from "../../../assets/homepage/mainProd.png";

function Product() {
  return (
    <section className="mx-auto w-full  bg-[#43A535] overflow-hidden " >
      <div className="grid grid-cols-2 mx-4 md:mx-12 lg:mx-32 pb-20 py-12 md:py-16 lg:py-28">
        <div className="flex  items-center ">
          <img src={mainProd} alt="" className="h-3/4 md:h-full w-full object-contain" />
        </div>
        <div className="flex flex-col mt-16">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-none lg:text-[2.75rem] lg:leading-10 xl:text-[3.5rem] font-black text-white xl:leading-[55px] mb-4 font-brastika">
            OUR MOST POPULAR <br className="" />
            PRODUCTS
          </h2>
          <p className="text-sm md:text-base font-normal text-white mb-4 font-body">
            Lorem ipsum dolor sit amet consectetur. <br className="hidden md:block"/>
            Netus tellus rhoncus tortor sapien egestas nisi
            <br className="hidden md:block"/>suspendisse sed.
          </p>
          <p className="text-white text-2xl font-bold mb-4 font-brastika">
            ₹1599
          </p>
          <div className="flex items-center mb-8">
            <button className=" flex justify-center items-center  p-3 px-4 md:px-8 gap-2.5 rounded-[38px]  bg-[#E2CEA5] text-black font-body text-sm md:text-base">
              Order Now
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
          <div className="flex gap-4  items-center">
            <svg
              width="40"
              height="9"
              viewBox="0 0 40 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.646443 4.09453C0.451182 4.28979 0.451185 4.60638 0.646449 4.80164L3.82846 7.98359C4.02372 8.17885 4.3403 8.17885 4.53556 7.98358C4.73083 7.78832 4.73082 7.47174 4.53556 7.27648L1.70711 4.44807L4.53551 1.61962C4.73077 1.42436 4.73077 1.10778 4.5355 0.912516C4.34024 0.717255 4.02366 0.717258 3.8284 0.912522L0.646443 4.09453ZM39.5581 3.94775L0.999996 3.94808L1 4.94808L39.5581 4.94775L39.5581 3.94775Z"
                fill="white"
              />
            </svg>
            <svg
              width="40"
              height="9"
              viewBox="0 0 40 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.5169 4.09453C39.7121 4.28979 39.7121 4.60638 39.5169 4.80164L36.3349 7.98359C36.1396 8.17885 35.823 8.17885 35.6278 7.98358C35.4325 7.78832 35.4325 7.47174 35.6278 7.27648L38.4562 4.44807L35.6278 1.61962C35.4326 1.42436 35.4326 1.10778 35.6278 0.912516C35.8231 0.717255 36.1397 0.717258 36.3349 0.912522L39.5169 4.09453ZM0.605229 3.94775L39.1633 3.94808L39.1633 4.94808L0.60522 4.94775L0.605229 3.94775Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
