import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    title: 'BAR & RESTAURANTS',
    image: '/img/service/111.png'
  },
  {
    title: 'SPA & SALON',
    image: '/img/service/222.png'
  },
  {
    title: 'SWIMMING POOL',
    image: '/img/service/333.png'
  },
  {
    title: 'WEDDING EVENT',
    image: '/img/service/444.png'
  },

]
const Service = () => {

  return (
    <>
      <div
        className="h-[70vh]"
        style={{
          background: "url(/img/bg2.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1450px] mx-auto">
          <div className="flex items-center justify-between py-28 font-[Constantia]">
            <div>
              <div className="text-[30px]">
                <span className="text-[#B58E3E]">FACILITIES</span> & SERVICES
              </div>
              <div>With the best luxury spa, salon and wedding experiences</div>
            </div>
            <div className="px-4 py-2 border bg-[#EEEEEE] text-[#00000099]">
              VIEW ALL
            </div>
          </div>
          <div className="flex">
            {data.map((facility, index) => (
              <Link
                to={`/facility/${index}`}
                className="relative bg-[#0D2944] z-[1]"
              >
                <img
                  src={facility.image}
                  alt=""
                  className="w-[400px] h-[500px] object-cover opacity-50"
                />
                <div
                  className="absolute top-1/2 left-1/2 text-[30px] text-[#FFE3AB] w-full text-center px-8"
                  style={{
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {facility.title}
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>
      {/* <div className={show ? "block" : "hidden"}>
        <div
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full h-modal h-full bg-black opacity-30 z-50"
          onClick={() => setShow(false)}
        ></div>
        <div
          className="fixed top-1/2 left-1/2 z-[60]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {type === 1 && (
            <div className="relative shadow">
              <div className="w-[720px] h-[500px] relative">
                <img
                  src="/img/service/111.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="h-[155px] w-full absolute bottom-0 bg-[#0D294499] p-8 text-white">
                  <div className="text-[30px] text-[#FFE3AB]">
                    BAR & RESTAURANTS
                  </div>
                  <div>
                    The Resturant is the Colina Resort's iconic dining venue,
                    serving breakfast, afternoon tea and an evening service
                    complimented by the recent addition of a bar and craft
                    cocktail program.
                  </div>
                </div>
              </div>
            </div>
          )}
          {type === 2 && (
            <div
              className="fixed top-1/2 left-1/2 z-[2]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="relative shadow">
                <div className="w-[720px] h-[500px] relative">
                  <img
                    src="/img/service/222.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="h-[155px] w-full absolute bottom-0 bg-[#0D294499] p-8 text-white">
                    <div className="text-[30px] text-[#FFE3AB]">
                      SPA & SALON
                    </div>
                    <div>
                      The Resturant is the Colina Resort's iconic dining venue,
                      serving breakfast, afternoon tea and an evening service
                      complimented by the recent addition of a bar and craft
                      cocktail program.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {type === 3 && (
            <div
              className="fixed top-1/2 left-1/2 z-[2]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="relative shadow">
                <div className="w-[720px] h-[500px] relative">
                  <img
                    src="/img/service/333.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="h-[155px] w-full absolute bottom-0 bg-[#0D294499] p-8 text-white">
                    <div className="text-[30px] text-[#FFE3AB]">
                      SWIMMING POOL
                    </div>
                    <div>
                      The Resturant is the Colina Resort's iconic dining venue,
                      serving breakfast, afternoon tea and an evening service
                      complimented by the recent addition of a bar and craft
                      cocktail program.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {type === 4 && (
            <div
              className="fixed top-1/2 left-1/2 z-[2]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="relative shadow">
                <div className="w-[720px] h-[500px] relative">
                  <img
                    src="/img/service/444.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="h-[155px] w-full absolute bottom-0 bg-[#0D294499] p-8 text-white">
                    <div className="text-[30px] text-[#FFE3AB]">
                      WEDDING EVENT
                    </div>
                    <div>
                      The Resturant is the Colina Resort's iconic dining venue,
                      serving breakfast, afternoon tea and an evening service
                      complimented by the recent addition of a bar and craft
                      cocktail program.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> */}
    </>
  );
};

export default React.memo(Service);
