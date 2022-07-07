import React from "react";

const Landing = () => {
  return (
    <div className="bg-[#13251F] w-full h-screen text-base">
      <div className="pr-14 pl-14 flex">
        <div className="w-[25%] relative">
          <div
            className="absolute bottom-5 left-1/2"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            The Corporate Hotel and Convention Centre
          </div>
          <img src="/img/landing1.png" alt="" className="" />
          <div>7000 2030</div>
        </div>
        <img src="/img/landing2.png" alt="" className="w-[25%]" />
        <img src="/img/landing3.png" alt="" className="w-[25%]" />
        <img src="/img/landing4.png" alt="" className="w-[25%]" />
      </div>
    </div>
  );
};

export default React.memo(Landing);
