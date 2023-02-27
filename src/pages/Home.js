import React, { useState } from "react";

const Home = () => {
  const [home_bg, setHome_bg] = useState(1);
  return (
    <div>
      <div className="w-full h-[100vh] bg-black">
        <img
          src={"/img/home-bg-" + home_bg + ".png"}
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        <img
          src="/img/Welcome to Corporate.png"
          alt=""
          className="absolute top-[40%] left-1/2"
          style={{ transform: "translate(-50%, -60%)" }}
        />
        {/* <div
          className="absolute top-[80%] left-1/2 font-[Constantia] text-gray-100"
          style={{ transform: "translate(-50%, -60%)" }}
        >
          <div className="flex">
            <div className="w-[188px] h-[124.69px] bg-[#FFFFFF33] mr-4 flex items-center justify-center flex-col">
              <div className="flex w-full justify-evenly h-[30px] mt-2">
                <div className="text-[16px]">Arrival</div>
                <div className="flex items-end">
                  <svg
                    width={13}
                    height={8}
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.81322 7.70883L0.286496 2.93421C-0.0954986 2.6042 -0.0954986 2.07056 0.286496 1.74406L1.20491 0.950633C1.5869 0.620622 2.2046 0.620622 2.58253 0.950633L6.5 4.335L10.4175 0.950633C10.7995 0.620622 11.4172 0.620622 11.7951 0.950633L12.7135 1.74406C13.0955 2.07407 13.0955 2.60771 12.7135 2.93421L7.18678 7.70883C6.81291 8.03884 6.19522 8.03884 5.81322 7.70883Z"
                      fill="#EEEEEE"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-baseline">
                <div className="font-[roboto] text-[60px] font-bold">10</div>
                <div className="text-[16px] font-bold ml-2">DEC</div>
              </div>
            </div>
            <div className="w-[188px] h-[124.69px] bg-[#FFFFFF33] ml-4 flex items-center justify-center flex-col">
              <div className="flex w-full justify-evenly h-[30px] mt-2">
                <div className="text-[16px]">Arrival</div>
                <div className="flex items-end">
                  <svg
                    width={13}
                    height={8}
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.81322 7.70883L0.286496 2.93421C-0.0954986 2.6042 -0.0954986 2.07056 0.286496 1.74406L1.20491 0.950633C1.5869 0.620622 2.2046 0.620622 2.58253 0.950633L6.5 4.335L10.4175 0.950633C10.7995 0.620622 11.4172 0.620622 11.7951 0.950633L12.7135 1.74406C13.0955 2.07407 13.0955 2.60771 12.7135 2.93421L7.18678 7.70883C6.81291 8.03884 6.19522 8.03884 5.81322 7.70883Z"
                      fill="#EEEEEE"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-baseline">
                <div className="font-[roboto] text-[60px] font-bold">10</div>
                <div className="text-[16px] font-bold ml-2">DEC</div>
              </div>
            </div>
          </div>
          <div className="w-[408px] h-[68.94px] bg-[#FFFFFF33] mt-4 flex items-center justify-center flex-col">
            <div className="text-[25px]">Book now</div>
            <div className="text-xs">Best Prices Guaranteed</div>
          </div>
        </div> */}
        {/* <div
          className="absolute top-[50%] right-[5%] text-gray-100 text-2xl font-[roboto]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className={`my-4 ${home_bg === 1 && "font-extrabold text-3xl"}`}>
            1
          </div>
          <div className={`my-4 ${home_bg === 2 && "font-extrabold text-3xl"}`}>
            2
          </div>
          <div className={`my-4 ${home_bg === 3 && "font-extrabold text-3xl"}`}>
            3
          </div>
        </div> */}
        <div
          className="absolute top-1/2 left-[10%]"
          style={{ transform: "translate(-50%, -50%)" }}
          onClick={() => {
            if (home_bg === 1) {
              setHome_bg(3);
            }
            if (home_bg === 2) {
              setHome_bg(1);
            }
            if (home_bg === 3) {
              setHome_bg(2);
            }
          }}
        >
          <svg
            width={18}
            height={41}
            viewBox="0 0 18 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.47731 18.8396L13.6776 0.855401C14.314 -0.0116962 15.3464 -0.0116962 15.9828 0.855401L17.5226 2.95328C18.1583 3.81945 18.159 5.22235 17.5253 6.09037L7.06355 20.41L17.5246 34.7305C18.159 35.5985 18.1577 37.0014 17.5219 37.8676L15.9822 39.9655C15.3458 40.8326 14.3134 40.8326 13.677 39.9655L0.47731 21.9804C-0.159103 21.1133 -0.159103 19.7067 0.47731 18.8396Z"
              fill="#EEEEEE"
            />
          </svg>
        </div>
        <div
          className="absolute top-1/2 right-[10%]"
          style={{ transform: "translate(-50%, -50%)" }}
          onClick={() => {
            if (home_bg === 1) {
              setHome_bg(2);
            }
            if (home_bg === 2) {
              setHome_bg(3);
            }
            if (home_bg === 3) {
              setHome_bg(1);
            }
          }}
        >
          <svg
            width={18}
            height={41}
            viewBox="0 0 18 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5227 22.2005L4.32237 40.1846C3.68596 41.0517 2.65357 41.0517 2.01715 40.1846L0.477396 38.0868C-0.158339 37.2206 -0.159016 35.8177 0.47468 34.9497L10.9365 20.6301L0.475359 6.30955C-0.159018 5.44153 -0.15766 4.03863 0.478075 3.17245L2.01783 1.07458C2.65425 0.207481 3.68663 0.207481 4.32305 1.07458L17.5227 19.0597C18.1591 19.9268 18.1591 21.3334 17.5227 22.2005Z"
              fill="#EEEEEE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
