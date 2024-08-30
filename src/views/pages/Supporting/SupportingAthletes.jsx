import React from "react";
import bannerImg from "../../../assets/homepage/image 12.png";
import bg from "../../../assets/homepage/bg.png";
import rectangle from "../../../assets/homepage/Rectangle 17.png";

function SupportingAthletes() {
  return (
    <section className="mx-auto relative min-h-screen overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        <div className="flex w-full h-screen lg:h-auto ">
          <img src={bannerImg} alt="" className="object-fill w-full  " />

          <div className="flex justify-center items-center gap-4 absolute z-20 left-[25%] sm:left-[33%] md:left-[33%] lg:bottom-[5%] xl:bottom-[5%] lg:left-[40%] xl:left-[40%]">
            <img
              src={rectangle}
              alt=""
              className="absolute -z-10  h-20 lg:h-24 min-w-[350px] lg:min-w-[400px] "
            />
            <div>
              <h4 className="text-[40px] font-extrabold leading-[45px] text-left text-[#132B25] font-brastika">
                22K
              </h4>
              <h6 className="text-[#023A3E] text-base font-normal font-body">
                BOTTLE SOLD
              </h6>
            </div>
            <div>
              <h4 className="text-[40px] font-extrabold leading-[45px] text-left text-[#132B25] font-brastika">
                26K
              </h4>
              <h6 className="text-[#023A3E] text-base font-normal font-body">
                CUSTOMER SERVED
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#43A535] justify-start items-center text-white px-8 md:px-16 py-10 xl:py-20 ">
          <div
            className="mt-0 xl:mt-10"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="font-black text-4xl md:text-5xl  leading-[60px] text-left mb-8 font-brastika">
              SUPPORTING <br /> ATHLETES SINCE 2016
            </h2>
            <p className="mb-8 md:mb-28 text-base font-body">
              Lorem ipsum dolor sit amet consectetur. Volutpat vel dui
              pellentesque consectetur ut tellus. Donec augue cursus lobortis
              lacus adipiscing eget ac ultrices gravida. Vel vestibulum
              tincidunt integer urna at aliquet. Ultrices est mi odio egestas
              ultricies quam morbi. Sit in posuere suscipit nec ac. Nulla odio
              feugiat felis eu ut. Amet porttitor sit vitae molestie orci urna
              lectus faucibus blandit. Leo amet vitae eget magna morbi.
              Tristique tincidunt vitae rhoncus imperdiet varius vitae hac eu
              proin. Vulputate id quam felis dolor habitant pulvinar. Id massa
              magnis pulvinar faucibus. Senectus dignissim diam placerat enim
              luctus diam tortor curabitur purus. Nisi facilisis bibendum
              sagittis augue. Tincidunt ut sed proin laoreet eros lectus dui
              velit. Tincidunt nunc vitae
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportingAthletes;
