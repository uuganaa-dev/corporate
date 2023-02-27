import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Rooms = () => {
  return (
    <div
      className="h-[70vh] relative"
      style={{ background: "url(/img/bg1.png)", backgroundRepeat: "no-repeat" }}
    >
      <div className="h-[50%] w-full"></div>
      <div
        className="h-[50%] w-full"
        style={{
          background: "linear-gradient(180deg, #0F304F 0%, #2B2927 100%)",
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 max-w-[1450px] mx-auto"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="flex items-center justify-between pb-10 font-[Constantia]">
          <div>
            <div className="text-[30px]">
              <span className="text-[#B58E3E]">ROOMS</span> & ACCOMMODATION
            </div>
            <div>
              Designed as a privileged almost private place where you'll feel
              right at home
            </div>
          </div>
          <button className="px-4 py-2 border bg-[#EEEEEE] text-[#00000099] uppercase">
            View all
          </button>
        </div>
        <div className="">
          <Carousel responsive={responsive}>
            {Array(6).fill(0).map((_, index) => (
              <div className="w-[450px] h-[450px]" key={index}>
                <img
                  src="/img/room/room1.png"
                  alt=""
                  className="w-[450px] h-[250px] object-cover"
                />
                <div className="h-[200px] bg-white font-[Constantia] p-10">
                  <div className="text-[#B58E3E] text-[25px]">LUX ROOM</div>
                  <div className="text-gray-600 text-sm">Single room</div>
                  <div className="flex items-center justify-between mt-4">
                    <Link to={`/room/${index}`} className="h-[35px] px-4 py-1 bg-[#0D2944] text-gray-100 text-center uppercase">
                      Book now
                    </Link>
                    <div className="text-gray-600">
                      <span className="font-semibold font-[roboto] text-gray-900">
                        500,000₮/
                      </span>
                      per night <br /> 03 зочин 25м2
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>;
        </div>
      </div>
    </div>
  );
};

export default React.memo(Rooms);
