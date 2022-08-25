import React from "react";

const star = (
  <div className=" flex gap-4 mt-20">
    <svg
      width={10}
      height={12}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.46355 1.16098L3.24299 3.80386L0.512158 4.22903C0.0224388 4.30488 -0.173823 4.94963 0.181317 5.31892L2.15701 7.37493L1.68973 10.2793C1.60561 10.8043 2.12337 11.1975 2.55701 10.952L5 9.58065L7.44299 10.952C7.87663 11.1955 8.39439 10.8043 8.31028 10.2793L7.84299 7.37493L9.81868 5.31892C10.1738 4.94963 9.97756 4.30488 9.48784 4.22903L6.75701 3.80386L5.53645 1.16098C5.31776 0.689898 4.68411 0.683909 4.46355 1.16098Z"
        fill="white"
      />
    </svg>
    <svg
      width={10}
      height={12}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.46355 1.16098L3.24299 3.80386L0.512158 4.22903C0.0224388 4.30488 -0.173823 4.94963 0.181317 5.31892L2.15701 7.37493L1.68973 10.2793C1.60561 10.8043 2.12337 11.1975 2.55701 10.952L5 9.58065L7.44299 10.952C7.87663 11.1955 8.39439 10.8043 8.31028 10.2793L7.84299 7.37493L9.81868 5.31892C10.1738 4.94963 9.97756 4.30488 9.48784 4.22903L6.75701 3.80386L5.53645 1.16098C5.31776 0.689898 4.68411 0.683909 4.46355 1.16098Z"
        fill="white"
      />
    </svg>
    <svg
      width={10}
      height={12}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.46355 1.16098L3.24299 3.80386L0.512158 4.22903C0.0224388 4.30488 -0.173823 4.94963 0.181317 5.31892L2.15701 7.37493L1.68973 10.2793C1.60561 10.8043 2.12337 11.1975 2.55701 10.952L5 9.58065L7.44299 10.952C7.87663 11.1955 8.39439 10.8043 8.31028 10.2793L7.84299 7.37493L9.81868 5.31892C10.1738 4.94963 9.97756 4.30488 9.48784 4.22903L6.75701 3.80386L5.53645 1.16098C5.31776 0.689898 4.68411 0.683909 4.46355 1.16098Z"
        fill="white"
      />
    </svg>
    <svg
      width={10}
      height={12}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.46355 1.16098L3.24299 3.80386L0.512158 4.22903C0.0224388 4.30488 -0.173823 4.94963 0.181317 5.31892L2.15701 7.37493L1.68973 10.2793C1.60561 10.8043 2.12337 11.1975 2.55701 10.952L5 9.58065L7.44299 10.952C7.87663 11.1955 8.39439 10.8043 8.31028 10.2793L7.84299 7.37493L9.81868 5.31892C10.1738 4.94963 9.97756 4.30488 9.48784 4.22903L6.75701 3.80386L5.53645 1.16098C5.31776 0.689898 4.68411 0.683909 4.46355 1.16098Z"
        fill="white"
      />
    </svg>
    <svg
      width={10}
      height={12}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.46355 1.16098L3.24299 3.80386L0.512158 4.22903C0.0224388 4.30488 -0.173823 4.94963 0.181317 5.31892L2.15701 7.37493L1.68973 10.2793C1.60561 10.8043 2.12337 11.1975 2.55701 10.952L5 9.58065L7.44299 10.952C7.87663 11.1955 8.39439 10.8043 8.31028 10.2793L7.84299 7.37493L9.81868 5.31892C10.1738 4.94963 9.97756 4.30488 9.48784 4.22903L6.75701 3.80386L5.53645 1.16098C5.31776 0.689898 4.68411 0.683909 4.46355 1.16098Z"
        fill="white"
      />
    </svg>
  </div>
);

const Restaurant = () => {
  return (
    <div className="h-[550px] w-full bg-[#0D2944B2]">
      <div className="relative h-[550px] w-full">
        <img
          src="/img/footer1.png"
          alt=""
          className="w-full h-full object-cover absolute opacity-30"
        />
        <div
          className="absolute top-1/2 left-1/2 h-full flex flex-col items-center justify-center text-gray-100"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="text-[30px]">TESTIMONIALS</div>
          <div>What other think about us</div>
          <div className="flex items-center justify-center mt-8">
            <div className="w-[275px] flex flex-col items-center justify-center mr-8">
              <div className="text-[25px] mb-4">Guest</div>
              <div className="text-justify">
                Gorgeous pool areas, beautiful bar and restaurant, excellent
                service with historic, very well appointed rooms.
              </div>
              {star}
            </div>
            <div className="w-[275px] flex flex-col items-center justify-center mx-8">
              <div className="text-[25px] mb-4">Guest</div>
              <div className="text-justify">
                Gorgeous pool areas, beautiful bar and restaurant, excellent
                service with historic, very well appointed rooms.
              </div>
              {star}
            </div>
            <div className="w-[275px] flex flex-col items-center justify-center ml-8">
              <div className="text-[25px] mb-4">Guest</div>
              <div className="text-justify">
                Gorgeous pool areas, beautiful bar and restaurant, excellent
                service with historic, very well appointed rooms.
              </div>
              {star}
            </div>
          </div>
        </div>
        <div
          className="absolute top-[70%] left-[20%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <svg
            width={13}
            height={27}
            viewBox="0 0 13 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.344724 12.3996L9.87829 1.02767C10.3379 0.479382 11.0835 0.479382 11.5432 1.02767L12.6552 2.35423C13.1144 2.90194 13.1148 3.78904 12.6572 4.33791L5.10145 13.3927L12.6567 22.448C13.1148 22.9969 13.1139 23.884 12.6547 24.4317L11.5427 25.7582C11.083 26.3065 10.3374 26.3065 9.8778 25.7582L0.344724 14.3857C-0.114908 13.8374 -0.114908 12.9479 0.344724 12.3996Z"
              fill="#EEEEEE"
            />
          </svg>
        </div>
        <div
          className="absolute top-[70%] right-[20%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <svg
            width={13}
            height={27}
            viewBox="0 0 13 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6553 14.6737L3.12171 26.0456C2.66208 26.5939 1.91646 26.5939 1.45683 26.0456L0.344786 24.719C-0.114356 24.1713 -0.114845 23.2842 0.342825 22.7354L7.89855 13.6807L0.343315 4.62548C-0.114846 4.0766 -0.113865 3.18951 0.345277 2.64181L1.45732 1.31527C1.91696 0.76698 2.66257 0.76698 3.1222 1.31527L12.6553 12.6877C13.1149 13.236 13.1149 14.1254 12.6553 14.6737Z"
              fill="#EEEEEE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Restaurant);
