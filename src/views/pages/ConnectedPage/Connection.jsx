import React from "react";
import connected from "../../../assets/homepage/connected.png";
function Connection() {
  return (
    <section className="mx-auto w-full">
      <div className="mx-10   sm:mx-14  md:mx-24 flex flex-col my-20">
        <div className="flex justify-center items-center">
          <p className="font-brastika text-black text-6xl sm:text-7xl md:text-8xl">
            LET’S GET
          </p>
          <img src={connected} alt="" className="relative bottom-5" />
        </div>
        <div className="flex justify-center items-center">
          <p className="font-brastika text-[#43A535]  text-6xl sm:text-7xl md:text-8xl ">
            CONNECTED
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-20">
          <div className="flex-col flex gap-3">
            <div className="flex gap-4 font-body">
              <span className="border rounded-2xl border-black px-[10px] py-[1px] text-[10px] font-body h-5">
                01
              </span>
              <label htmlFor="" classname="font-body text-base ">
                What’s your name?
              </label>
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type your name here"
              className="border-b border-black focus:outline-none font-body text-xs pb-2"
            />
          </div>
          <div className="flex-col flex gap-3">
            <div className="flex gap-4 font-body">
              <span className="border rounded-2xl border-black px-[10px] py-[1px] text-[10px] font-body h-5">
                02
              </span>
              <label htmlFor="" classname="font-body text-base">
                Write your email address?
              </label>
            </div>

            <input
              type="text"
              name=""
              id=""
              placeholder="example@gmail.com"
              className="border-b border-black focus:outline-none font-body text-xs pb-2"
            />
          </div>
          <div className="flex-col flex gap-3">
            <div className="flex gap-4 font-body">
              <span className="border rounded-2xl border-black px-[10px] py-[1px] text-[10px] font-body h-5">
                03
              </span>
              <label htmlFor="" classname="font-body text-base">
                What’s your phone number?
              </label>
            </div>

            <input
              type="text"
              name=""
              id=""
              placeholder="+91-9988776655"
              className="border-b border-black focus:outline-none font-body text-xs pb-2"
            />
          </div>
          <div className="flex-col flex gap-3">
            <div className="flex gap-4 font-body">
              <span className="border rounded-2xl border-black px-[10px] py-[1px] text-[10px] font-body h-5">
                04
              </span>
              <label htmlFor="" classname="font-body text-base">
                How can we help?
              </label>
            </div>

            <input
              type="text"
              name=""
              id=""
              placeholder="message here"
              className="border-b border-black focus:outline-none font-body text-xs pb-2"
            />
          </div>
          <div className="flex justify-between  md:gap-6 md:justify-start lg:justify-between lg:gap-0  ">
            <div className="flex flex-col border-b border-black pb-4">
              <h2 className="font-brastika text-3xl mb-3">General</h2>
              <h2 className="font-body text-base mb-3">Information</h2>
              <h2 className="font-body text-base text-black opacity-60 mb-1">
                avadeshnagar@gmail.com
              </h2>
              <h2 className="font-body text-base text-black opacity-60 mb-1">
                +91-9988776655
              </h2>
            </div>
            <div className="flex flex-col border-b border-black pb-4">
              <h2 className="font-brastika text-3xl mb-3">Address</h2>
              <h2 className="font-body text-base mb-3">HQ</h2>
              <h2 className="font-body text-base text-black opacity-60 mb-1">
                Gharoli, Mayur vihar
              </h2>
              <h2 className="font-body text-base text-black opacity-60 mb-1">
                Delhi,110096
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connection;
