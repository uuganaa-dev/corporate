import React from "react";

const About = () => {
  return (
    <div
      className="h-[70vh] mb-5"
      style={{
        background: "url(/img/bg3.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1450px] mx-auto">
        <div className="flex items-center justify-between pt-28 font-[Constantia]">
          <div>
            <div className="text-[30px] mt-5">
              <span className="text-[#B58E3E]">ABOUT</span> & HISTORY
            </div>
            <div>With the best luxury spa, salon and wedding experiences</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[500px] mr-20 relative flex items-center justify-center flex-col">
            <div className="relative">
              <div className="text-[150px] text-white">History</div>
              <div
                className="absolute top-[57%] left-[53%] text-[25px] w-full"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                CORPORATE HOTEL - <span className="text-[#B58E3E]">2008</span>
              </div>
            </div>
            <div
              className="absolute top-[123%] left-[50%] w-full text-[16px] text-[#00000099]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              Vivamus vitae ex a magna cursus pretium. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia. Curae
              posuere turpis facilisis, fringilla odio. Nunc eget purus at dolor
              venenatis cursus et non arcu. Praesent rutrum condimentum risus.
              Condimentum nibh, ut fermentum massa justo sit amet risus. mentum
              massa Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fer condimentum nibh, ut fermentum massa
              justo sit amet risus. mentum massa justo sit amet risus.
            </div>
            <div
              className="flex items-center justify-between absolute top-[190%] left-[50%] w-full"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <img src="/img/sign.png" alt="sign" />
              <div>Chief Executive Officer</div>
            </div>
          </div>
          <div className="w-[500px] ml-20 relative  flex items-center justify-center flex-col">
            <div className="relative">
              <div className="text-[150px] text-white">About</div>
              <div
                className="absolute top-[57%] left-[53%] text-[25px] w-full"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                CORPORATE HOTEL - <span className="text-[#B58E3E]">2008</span>
              </div>
            </div>
            <div
              className="absolute top-[123%] left-[50%] w-full text-[16px] text-[#00000099]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              A hotel is an establishment that provides paid lodging on a
              short-term basis. Facilities provided may range from a
              modest-quality mattress in a small room to large suites with
              bigger, higher-quality beds, a dresser, a fridge and other kitchen
              facilities, upholstered chairs, a flatscreen television and
              en-suite bathrooms. Small, lower-priced hotels may offer only the
              most basic guest services and facilities.
            </div>
            <div
              className="flex items-center justify-between absolute top-[190%] left-[50%] w-full"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <img src="/img/sign.png" alt="sign" />
              <div>Chief Executive Officer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
