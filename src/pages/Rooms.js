import React from "react";

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
        className="absolute top-[55%] left-[10%]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <svg
          width={13}
          height={26}
          viewBox="0 0 13 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.344724 11.9818L9.87829 0.609946C10.3379 0.0616585 11.0835 0.0616585 11.5432 0.609946L12.6552 1.93649C13.1144 2.48419 13.1148 3.37128 12.6572 3.92015L5.10145 12.9748L12.6567 22.03C13.1148 22.5789 13.1139 23.466 12.6547 24.0137L11.5427 25.3403C11.083 25.8885 10.3374 25.8885 9.8778 25.3403L0.344724 13.9678C-0.114908 13.4195 -0.114908 12.5301 0.344724 11.9818Z"
            fill="#EEEEEE"
          />
        </svg>
      </div>
      <div
        className="absolute top-[55%] right-[10%]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <svg
          width={13}
          height={26}
          viewBox="0 0 13 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6553 13.9684L3.12171 25.3402C2.66208 25.8885 1.91646 25.8885 1.45683 25.3402L0.344785 24.0137C-0.114357 23.466 -0.114846 22.5789 0.342824 22.03L7.89855 12.9754L0.343313 3.92015C-0.114847 3.37128 -0.113866 2.48419 0.345276 1.93649L1.45732 0.609947C1.91695 0.0616589 2.66257 0.0616589 3.1222 0.609947L12.6553 11.9824C13.1149 12.5307 13.1149 13.4201 12.6553 13.9684Z"
            fill="#EEEEEE"
          />
        </svg>
      </div>
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
          <div className="px-4 py-2 border bg-[#EEEEEE] text-[#00000099]">
            VIEW ALL
          </div>
        </div>
        <div className="flex">
          <div className="w-[450px] h-[450px]">
            <img
              src="/img/room/room1.png"
              alt=""
              className="w-[450px] h-[250px] object-cover"
            />
            <div className="h-[200px] bg-white font-[Constantia] p-10">
              <div className="text-[#B58E3E] text-[25px]">LUX ROOM</div>
              <div className="text-gray-600 text-sm">Single room</div>
              <div className="flex items-center justify-between mt-4">
                <div className="h-[35px] px-4 py-1 bg-[#0D2944] text-gray-100 text-center">
                  BOOK NOW
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold font-[roboto] text-gray-900">
                    500,000₮/
                  </span>
                  per night <br /> 03 зочин 25м2
                </div>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[450px] mx-[50px]">
            <img
              src="/img/room/room1.png"
              alt=""
              className="w-[450px] h-[250px] object-cover"
            />
            <div className="h-[200px] bg-white font-[Constantia] p-10">
              <div className="text-[#B58E3E] text-[25px]">LUX ROOM</div>
              <div className="text-gray-600 text-sm">Single room</div>
              <div className="flex items-center justify-between mt-4">
                <div className="h-[35px] px-4 py-1 bg-[#0D2944] text-gray-100 text-center">
                  BOOK NOW
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold font-[roboto] text-gray-900">
                    500,000₮/
                  </span>
                  per night <br /> 03 зочин 25м2
                </div>
              </div>
            </div>
          </div>
          <div className="w-[450px] h-[450px]">
            <img
              src="/img/room/room1.png"
              alt=""
              className="w-[450px] h-[250px] object-cover"
            />
            <div className="h-[200px] bg-white font-[Constantia] p-10">
              <div className="text-[#B58E3E] text-[25px]">LUX ROOM</div>
              <div className="text-gray-600 text-sm">Single room</div>
              <div className="flex items-center justify-between mt-4">
                <div className="h-[35px] px-4 py-1 bg-[#0D2944] text-gray-100 text-center">
                  BOOK NOW
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold font-[roboto] text-gray-900">
                    500,000₮/
                  </span>
                  per night <br /> 03 зочин 25м2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Rooms);
