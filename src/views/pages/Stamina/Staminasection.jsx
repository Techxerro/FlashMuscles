import React, {useState} from "react";
import ReactCurvedText from "react-curved-text";
import prod1 from "../../../assets/homepage/product1.png";
import prod2 from "../../../assets/homepage/product2.png";


function Staminasection() {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const images = [prod1, prod2]; // Array of images
  const titles = ['Vo2 Max', '24X7']; // Array of title

  const handleImageChange = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, 300); // Adjust the timing to match the CSS transition duration
  };


  return (
    <section className="w-full container mx-auto min-h-screen overflow-hidden">
      <div className="flex relative -z-20">
        <svg
        className="relative "
          width="1440"
          height="248"
          viewBox="0 0 1440 248"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M354.944 126.556C354.944 109.036 359.593 92.357 367.975 78.1529L367.544 77.8988C370.776 72.4233 374.559 67.313 378.842 62.6607L379.21 62.9994C390.422 50.8218 405.079 41.8005 422.246 37.6144C454.555 29.7358 497.045 20.8139 546.634 13.7765L546.563 13.2815C561.572 11.1516 577.23 9.19428 593.453 7.49063L593.505 7.9879C632.766 3.86492 675.335 1.22834 720 1.22833C764.665 1.22833 807.234 3.86491 846.495 7.98789L846.547 7.49062C862.77 9.19427 878.428 11.1516 893.437 13.2815L893.366 13.7765C942.955 20.8138 985.445 29.7358 1017.75 37.6144C1034.92 41.8005 1049.58 50.8218 1060.79 62.9994L1061.16 62.6607C1065.44 67.313 1069.22 72.4232 1072.46 77.8988L1072.02 78.1529C1080.41 92.357 1085.06 109.036 1085.06 126.556C1085.06 152.679 1074.98 176.104 1058.74 193.773L1059.11 194.111C1052.87 200.898 1045.73 206.839 1037.9 211.762L1037.63 211.339C1017.36 224.084 992.469 229.98 966.796 226.019C935.105 221.13 899.511 216.151 863.181 212.047L863.125 212.544C850.249 211.089 837.28 209.744 824.36 208.551L824.406 208.053C788.194 204.712 752.357 202.568 720 202.568C687.643 202.568 651.806 204.712 615.594 208.054L615.64 208.551C602.72 209.744 589.751 211.089 576.875 212.544L576.819 212.047C540.489 216.151 504.895 221.13 473.204 226.019C447.532 229.98 422.642 224.084 402.371 211.339L402.105 211.762C394.274 206.839 387.13 200.898 380.891 194.111L381.259 193.773C365.016 176.104 354.944 152.679 354.944 126.556Z"
            stroke="black"
            stroke-dasharray="220 41"
          />
          <rect
            x="1022.97"
            y="45.9493"
            width="639.659"
            height="193.244"
            rx="96.622"
            stroke="black"
          />
          <rect
            x="-224.231"
            y="45.9493"
            width="639.659"
            height="193.244"
            rx="96.622"
            stroke="black"
          />
        </svg>




        <h1 className=" hidden 2xl:block absolute w-[600px] top-[15%]  mx-auto left-0  right-20 font-body text-5xl ">
          <ReactCurvedText
            className="font-body "
            width="550"
            height="138"
            cx="270"
            cy="155"
            rx="275"
            ry="75"
            startOffset={50}
            reversed={true}
            text="STAMINA BUILDER"
            textProps={{ style: { fontSize: "59" } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </h1>

        <h1 className=" hidden xl:block 2xl:hidden absolute w-[450px] top-[15%]  mx-auto left-0  right-20 font-body text-5xl ">
          <ReactCurvedText
            className="font-body "
            width="550"
            height="138"
            cx="270"
            cy="155"
            rx="275"
            ry="75"
            startOffset={50}
            reversed={true}
            text="STAMINA BUILDER"
            textProps={{ style: { fontSize: "54" } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </h1>
        <h1 className="hidden lg:block xl:hidden absolute w-[540px] top-[18%]  mx-auto left-0  right-0 font-body text-4xl ">
          <ReactCurvedText
            width="560"
            height="138"
            cx="269"
            cy="128"
            rx="214"
            ry="58"
            startOffset={50}
            reversed={true}
            text="STAMINA BUILDER"
            textProps={{ style: { fontSize: "40" } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </h1>
        <h1 className="hidden md:block lg:hidden absolute w-[560px] top-[30%]  mx-auto left-0  right-0 font-body text-5xl ">
          <ReactCurvedText
            width="550"
            height="105"
            cx="265"
            cy="100"
            rx="205"
            ry="45"
            startOffset={50}
            reversed={true}
            text="STAMINA BUILDER"
            textProps={{ style: { fontSize: "40" } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </h1>
        <h1 className=" md:hidden absolute w-[200px] top-[35%]  mx-auto left-0  right-0 font-body text-5xl ">
          <ReactCurvedText
            width="200"
            height="70"
            cx="97"
            cy="80"
            rx="114"
            ry="44"
            startOffset={50}
            reversed={true}
            text="STAMINA BUILDER"
            textProps={{ style: { fontSize: "20" } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </h1>
      </div>
      <div className="outer-box grid grid-cols-2 md:grid-cols-3 px-12 lg:px-20 pt-4 pb-20 lg:py-20">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-5 justify-center">
          <h3 className="font-black text-4xl pb-4 font-brastika">{titles[currentIndex]}</h3>
          <p className="pb-4 pr-5 text-sm md:text-base font-body">
            Lorem ipsum dolor sit amet consectetur. Volutpat vel dui
            pellentesque consectetur ut tellus. Donec augue cursus lobortis
            lacus adipiscing eget ac ultrices gravida. Vel vestibulum tincidunt
            integer urna at aliquet.
          </p>
          <div className="btn">
            <button
              className="bg-[#5DB750] flex justify-center items-center border-solid text-white p-4 px-8 gap-2.5 rounded-[38px] border mt-4 font-body"
            >
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
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:col-span-1 flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt=""
            className={`w-full cursor-pointer transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
            onClick={handleImageChange} // Change image on click
          />
        </div>
        <div className="mt-10 md:mt-0 md:col-span-1 flex justify-center items-center">
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt=""
            className={`w-1/2 cursor-pointer transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
            onClick={handleImageChange} // Change image on click
          />
        </div>
        
      </div>
    </section>
  );
}

export default Staminasection;
