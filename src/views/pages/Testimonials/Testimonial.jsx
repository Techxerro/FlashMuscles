import React from "react";
import testimonialImg from "../../../assets/homepage/Testimonials.png";

function Testimonial() {
  return (
    <section className="mx-auto w-full min-h-screen overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:ml-24 lg:mr-12 xl:mx-20 my-20">
        <div className="flex justify-center md:justify-end items-center relative">
          <h4 className="absolute md:-rotate-90 text-6xl md:text-3xl lg:text-4xl top-[-60px] md:top-[110px] lg:top-[135px]  md:right-[250px] lg:right-[375px] xl:right-[456px] font-brastika ">
            TESTIMONIALS
          </h4>
          <div className="hidden md:block bg-[#43A535] p-6 lg:p-9 relative md:top-[16%] left-[0%]">
            <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4128 1.47998L1.81697 14.0759C1.42645 14.4664 1.42645 15.0995 1.81697 15.4901L14.4128 28.0859"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
          <div className="flex">
            <img
              src={testimonialImg}
              alt=""
              className="w-[330px] md:w-[300px] lg:min-w-[420px]  xl:min-w-[500px] md:h-[450px] lg:h-[90%]  xl:h-full object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start  relative">
          <h1 className="absolute font-brastika text-3xl lg:text-4xl ml-12 lg:ml-24 top-[10px] md:top-[75px] lg:top-[100px] left-[75px] md:left-0 lg:left-[-10px]">
            Ankit Bisht
          </h1>
          <div className="md:hidden bg-[#43A535] p-4 md:p-6 lg:p-9 relative bottom-0 left-[0%]">
            <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4128 1.47998L1.81697 14.0759C1.42645 14.4664 1.42645 15.0995 1.81697 15.4901L14.4128 28.0859"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
          <div className="flex card shadow-2xl p-10 md:p-2 lg:p-4  xl:p-8  md:h-1/2 md:w-3/4">
            <span className="ml-1 lg:ml-3">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_91_961)">
                  <path
                    d="M23.7637 13.5595L18.1851 13.5595C18.2805 9.31703 19.4336 8.83545 20.8819 8.698L21.4404 8.62576L21.4404 3.96079L20.7967 3.99679C18.9054 4.10782 16.8145 4.46357 15.4196 6.26054C14.1967 7.83581 13.6576 10.4094 13.6576 14.3601L13.6576 21.6807L23.7637 21.6807L23.7637 13.5595Z"
                    fill="black"
                  />
                  <path
                    d="M10.8696 21.6807L10.8696 13.5595L5.36554 13.5595C5.46091 9.31703 6.57676 8.83545 8.02506 8.698L8.5464 8.62576L8.5464 3.96079L7.9398 3.99679C6.04857 4.10782 3.93896 4.46357 2.54398 6.26054C1.32126 7.83581 0.763569 10.4094 0.763569 14.3601L0.763568 21.6807L10.8696 21.6807Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_961">
                    <rect
                      width="23"
                      height="24"
                      fill="white"
                      transform="translate(23.7637 24.8208) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <p className="text-sm lg:text-base font-normal mt-6 ml-3 lg:ml-6 font-body">
              Lorem ipsum dolor sit amet consectetur. Volutpat vel dui
              pellentesque consectetur ut tellus. Donec augue cursus lobortis
              lacus adipiscing eget ac ultrices gravida. Vel vestibulum
              tincidunt integer urna at aliquet. Ultrices est mi odio egestas
              ultricies quam morbi.
            </p>
          </div>
          <div className=" bg-[#43A535] p-4 md:p-6 lg:p-9 relative bottom-0 md:top-[16%] lg:top-[16%] right-[0%]">
            <svg
              width="15"
              height="29"
              viewBox="0 0 15 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.848388 1.47998L13.4443 14.0759C13.8348 14.4664 13.8348 15.0995 13.4443 15.4901L0.848388 28.0859"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
