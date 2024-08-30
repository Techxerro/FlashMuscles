import React from "react";
import herosectionImg from "../../../assets/homepage/Herosection1.png";
import prop1 from "../../../assets/homepage/prop.png";
import prop2 from "../../../assets/homepage/prop2.png";
import "./style.css";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <>
      <section className="herosection min-h-screen container mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-4 sm:x-8 md:mx-16 lg:mx-24 my-28">
          <div className="grid col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex justify-between">
              <div className="herosectionInfo">
                <h3 className= "text-[40px] sm:text-[50px] leading-[50px] lg:text-[50px] xl:text-[65px]  font-black font-brastika xl:leading-[67px]">
                  Energy <br /> Booster For
                  <span className="md:text-white"> All</span>
                </h3>
                <h1 className="text-[85px] sm:text-[100px] lg:text-8xl xl:text-9xl   leading-[10px]  font-brastika text-[#43A535]">
                  Runne
                  <span className="md:text-white font-brastika ">rs</span>
                </h1>
                <p className="font-body text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur.
                  <br />
                  Netus tellus rhoncus tortor sapien egestas
                  <br />
                  nisi suspendisse sed.
                </p>
                <Link to='/Shop'>
                <button className=" flex justify-center items-center  border-solid border-[#132B25] p-4 px-8 gap-2.5 rounded-[38px] border mt-4 font-body">
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
                </Link>
              </div>
              <div className="w-full md:w-[480px] lg:w-[470px] xl:w-[634px] 2xl:w-[600px]">
                <img
                  src={herosectionImg}
                  className="hidden sm:block heroimg relative inset-0 -z-10  object-contain md:object-cover"
                  alt="heroImg"
                />
                 <img
                  src={prop1}
                  className="sm:hidden heroimg2 relative  inset-0 z-10 "
                  alt="heroImg2"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-end col-span-3 md:col-span-1">
            <p className="text-2xl xl:text-3xl font-medium text-right font-body relative md:right-[-12%] lg:right-[-18%] xl:right-0">
              Showcasing <br /> Our New <br /> Products
            </p>
            {/* <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.5266" cy="11.1066" r="10.407" fill="#132B25" />
              <path
                d="M7.09775 10.1749L9.94137 13.0185C10.3395 13.4166 10.9877 13.4077 11.3748 12.9988L14.066 10.1552C14.6693 9.51769 14.2174 8.46777 13.3397 8.46777H7.80485C6.91394 8.46777 6.46778 9.54492 7.09775 10.1749Z"
                fill="white"
              />
            </svg> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Herosection;
