import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const phone = (
    <svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_158_95)">
        <path
          d="M17.9381 5C18.9149 5.19057 19.8125 5.66826 20.5162 6.37194C21.2199 7.07561 21.6976 7.97326 21.8881 8.95L17.9381 5ZM17.9381 1C19.9674 1.22544 21.8597 2.13417 23.3044 3.57701C24.749 5.01984 25.6601 6.91101 25.8881 8.94L17.9381 1ZM24.8881 16.92V19.92C24.8892 20.1985 24.8322 20.4742 24.7206 20.7293C24.6091 20.9845 24.4454 21.2136 24.2402 21.4019C24.035 21.5901 23.7927 21.7335 23.5289 21.8227C23.265 21.9119 22.9855 21.9451 22.7081 21.92C19.631 21.5856 16.6751 20.5341 14.0781 18.85C11.6619 17.3147 9.61345 15.2662 8.07812 12.85C6.38809 10.2412 5.33636 7.27099 5.00812 4.18C4.98313 3.90347 5.01599 3.62476 5.10462 3.36162C5.19324 3.09849 5.33569 2.85669 5.52288 2.65162C5.71008 2.44655 5.93792 2.28271 6.19191 2.17052C6.44589 2.05833 6.72046 2.00026 6.99812 2H9.99812C10.4834 1.99522 10.9539 2.16708 11.3219 2.48353C11.6898 2.79999 11.9302 3.23945 11.9981 3.72C12.1247 4.68007 12.3596 5.62273 12.6981 6.53C12.8327 6.88792 12.8618 7.27691 12.782 7.65088C12.7023 8.02485 12.517 8.36811 12.2481 8.64L10.9781 9.91C12.4017 12.4135 14.4746 14.4864 16.9781 15.91L18.2481 14.64C18.52 14.3711 18.8633 14.1858 19.2372 14.1061C19.6112 14.0263 20.0002 14.0555 20.3581 14.19C21.2654 14.5286 22.2081 14.7634 23.1681 14.89C23.6539 14.9585 24.0975 15.2032 24.4146 15.5775C24.7318 15.9518 24.9003 16.4296 24.8881 16.92Z"
          stroke="#CC9D59"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_158_95"
          x={0}
          y={0}
          width="30.8877"
          height="30.9282"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_158_95"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_158_95"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
  const link = (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_158_103)">
        <path
          d="M22.8107 12.4762V19.619C22.8107 20.2505 22.5745 20.8561 22.1542 21.3026C21.7338 21.7491 21.1637 22 20.5693 22H8.24142C7.64696 22 7.07685 21.7491 6.6565 21.3026C6.23615 20.8561 6 20.2505 6 19.619V6.52377C6 5.89231 6.23615 5.2867 6.6565 4.84019C7.07685 4.39367 7.64696 4.14282 8.24142 4.14282H14.9657"
          stroke="#CC9D59"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.3965 2H26V9.17474"
          stroke="#CC9D59"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.0691 13.7225L24.484 3.34565"
          stroke="#CC9D59"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_158_103"
          x="0.75"
          y="0.75"
          width="30.5"
          height="30.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_158_103"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_158_103"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );

  return (
    <div className="bg-[#13251F] w-full h-screen text-base">
      <div className="pr-14 pl-14 pb-14 h-full flex">
        <div
          className="w-[25%] relative text-gray-100"
          onClick={() => navigate("/home")}
        >
          <img
            src="/img/landing1.png"
            alt=""
            className="w-full h-full object-cover opacity-50 hover:opacity-100"
          />
          <div className="absolute bottom-0 opacity-100 px-4 text-2xl font-[Constantia] bg-[#00000075] w-full">
            <div className="flex items-center h-[64px]">
              <div>The Corporate Hotel and Convention Centre</div>
              {link}
            </div>
          </div>
          <div className="absolute bottom-[-3rem] opacity-100 mx-4 text-2xl font-[roboto]">
            <div className="flex items-center justify-center">
              {phone}
              <div className="pl-2 pb-[2px]">7000 2030</div>
            </div>
          </div>
        </div>
        <div
          className="w-[25%] relative text-gray-100"
          onClick={() => navigate("/home")}
        >
          <img
            src="/img/landing2.png"
            alt=""
            className="w-full h-full object-cover opacity-50 hover:opacity-100"
          />
          <div className="absolute bottom-0 opacity-100 px-4 text-2xl font-[Constantia] bg-[#00000075] w-full">
            <div className="flex items-center h-[64px]">
              <div>The Corporate Hotel Ulaanbaatar</div>
              {link}
            </div>
          </div>
          <div className="absolute bottom-[-3rem] opacity-100 mx-4 text-2xl font-[roboto]">
            <div className="flex items-center justify-center">
              {phone}
              <div className="pl-2 pb-[2px]">1133 4411</div>
            </div>
          </div>
        </div>
        <div
          className="w-[25%] relative text-gray-100"
          onClick={() => navigate("/home")}
        >
          <img
            src="/img/landing3.png"
            alt=""
            className="w-full h-full object-cover opacity-50 hover:opacity-100"
          />
          <div className="absolute bottom-0 opacity-100 px-4 text-2xl font-[Constantia] bg-[#00000075] w-full">
            <div className="flex items-center h-[64px]">
              <div>The Corporate Hotel & Resort Nukht</div>
              {link}
            </div>
          </div>
          <div className="absolute bottom-[-3rem] opacity-100 mx-4 text-2xl font-[roboto]">
            <div className="flex items-center justify-center">
              {phone}
              <div className="pl-2 pb-[2px]">7701 5555</div>
            </div>
          </div>
        </div>
        <div
          className="w-[25%] relative text-gray-100"
          onClick={() => navigate("/home")}
        >
          <img
            src="/img/landing4.png"
            alt=""
            className="w-full h-full object-cover opacity-50 hover:opacity-100"
          />
          <div className="absolute bottom-0 opacity-100 px-4 text-2xl font-[Constantia] bg-[#00000075] w-full">
            <div className="flex items-center h-[64px]">
              <div>The Corporate at Zaisan</div>
              {link}
            </div>
          </div>
          <div className="absolute bottom-[-3rem] opacity-100 mx-4 text-2xl font-[roboto]">
            <div className="flex items-center justify-center">
              {phone}
              <div className="pl-2 pb-[2px]">7735 3399</div>
            </div>
          </div>
        </div>
        <div className="absolute top-8 right-4">
          <div
            className="mb-6 cursor-pointer"
            onClick={() => {
              window.open("https://facebook.com", "_blank");
            }}
          >
            <svg
              width={22}
              height={22}
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5312 0H2.34375C1.72215 0 1.12601 0.24693 0.686468 0.686469C0.24693 1.12601 0 1.72215 0 2.34375V19.5312C0 20.1529 0.24693 20.749 0.686468 21.1885C1.12601 21.6281 1.72215 21.875 2.34375 21.875H9.04541V14.438H5.96924V10.9375H9.04541V8.26953C9.04541 5.23486 10.8521 3.55859 13.6191 3.55859C14.9443 3.55859 16.3301 3.79492 16.3301 3.79492V6.77344H14.8032C13.2988 6.77344 12.8296 7.70703 12.8296 8.66455V10.9375H16.188L15.6509 14.438H12.8296V21.875H19.5312C20.1529 21.875 20.749 21.6281 21.1885 21.1885C21.6281 20.749 21.875 20.1529 21.875 19.5312V2.34375C21.875 1.72215 21.6281 1.12601 21.1885 0.686469C20.749 0.24693 20.1529 0 19.5312 0Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="mb-6 cursor-pointer"
            onClick={() => {
              window.open("https://facebook.com", "_blank");
            }}
          >
            <svg
              width={22}
              height={22}
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.946 5.33081C7.84058 5.33081 5.33569 7.83569 5.33569 10.9412C5.33569 14.0466 7.84058 16.5515 10.946 16.5515C14.0515 16.5515 16.5564 14.0466 16.5564 10.9412C16.5564 7.83569 14.0515 5.33081 10.946 5.33081ZM10.946 14.5886C8.93921 14.5886 7.29858 12.9529 7.29858 10.9412C7.29858 8.92944 8.93433 7.2937 10.946 7.2937C12.9578 7.2937 14.5935 8.92944 14.5935 10.9412C14.5935 12.9529 12.9529 14.5886 10.946 14.5886ZM18.0945 5.10132C18.0945 5.82886 17.5085 6.40991 16.7859 6.40991C16.0584 6.40991 15.4773 5.82397 15.4773 5.10132C15.4773 4.37866 16.0632 3.79272 16.7859 3.79272C17.5085 3.79272 18.0945 4.37866 18.0945 5.10132ZM21.8103 6.42944C21.7273 4.67651 21.3269 3.12378 20.0427 1.84448C18.7634 0.565185 17.2107 0.164795 15.4578 0.0769043C13.6511 -0.0256348 8.23608 -0.0256348 6.42944 0.0769043C4.6814 0.159912 3.12866 0.560303 1.84448 1.8396C0.560303 3.1189 0.164795 4.67163 0.0769043 6.42456C-0.0256348 8.2312 -0.0256348 13.6462 0.0769043 15.4529C0.159912 17.2058 0.560303 18.7585 1.84448 20.0378C3.12866 21.3171 4.67651 21.7175 6.42944 21.8054C8.23608 21.908 13.6511 21.908 15.4578 21.8054C17.2107 21.7224 18.7634 21.322 20.0427 20.0378C21.322 18.7585 21.7224 17.2058 21.8103 15.4529C21.9128 13.6462 21.9128 8.23608 21.8103 6.42944ZM19.4763 17.3914C19.0955 18.3484 18.3582 19.0857 17.3962 19.4714C15.9558 20.0427 12.5378 19.9109 10.946 19.9109C9.35425 19.9109 5.9314 20.0378 4.49585 19.4714C3.53882 19.0906 2.80151 18.3533 2.41577 17.3914C1.84448 15.9509 1.97632 12.533 1.97632 10.9412C1.97632 9.34937 1.84937 5.92651 2.41577 4.49097C2.79663 3.53394 3.53394 2.79663 4.49585 2.41089C5.93628 1.8396 9.35425 1.97144 10.946 1.97144C12.5378 1.97144 15.9607 1.84448 17.3962 2.41089C18.3533 2.79175 19.0906 3.52905 19.4763 4.49097C20.0476 5.9314 19.9158 9.34937 19.9158 10.9412C19.9158 12.533 20.0476 15.9558 19.4763 17.3914Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="mb-6 cursor-pointer"
            onClick={() => {
              window.open("https://facebook.com", "_blank");
            }}
          >
            <svg
              width={25}
              height={21}
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4302 5.06025C22.446 5.28232 22.446 5.50444 22.446 5.72651C22.446 12.5 17.2906 20.3045 7.86802 20.3045C4.96509 20.3045 2.26841 19.4638 0 18.0044C0.412451 18.052 0.808984 18.0679 1.2373 18.0679C3.63257 18.0679 5.83755 17.2589 7.59834 15.8788C5.3458 15.8312 3.45811 14.356 2.80771 12.3255C3.125 12.373 3.44224 12.4048 3.77539 12.4048C4.2354 12.4048 4.69546 12.3413 5.12373 12.2303C2.77603 11.7544 1.01519 9.69224 1.01519 7.20176V7.13833C1.69727 7.51904 2.49048 7.75698 3.33115 7.78867C1.95107 6.8686 1.04692 5.29819 1.04692 3.52153C1.04692 2.56978 1.30068 1.69731 1.74487 0.935889C4.26709 4.04502 8.05835 6.07544 12.3096 6.29756C12.2303 5.91685 12.1827 5.52031 12.1827 5.12373C12.1827 2.3001 14.4669 0 17.3064 0C18.7816 0 20.1141 0.618652 21.05 1.61802C22.208 1.39595 23.3184 0.967627 24.302 0.380713C23.9212 1.57046 23.1122 2.56982 22.0494 3.2043C23.0805 3.09331 24.0799 2.80771 24.9999 2.41118C24.302 3.42637 23.4295 4.33052 22.4302 5.06025Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              window.open("https://facebook.com", "_blank");
            }}
          >
            <svg
              width={24}
              height={17}
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2084 2.60777C22.9358 1.58129 22.1326 0.772873 21.1128 0.498524C19.2642 0 11.8519 0 11.8519 0C11.8519 0 4.43954 0 2.59097 0.498524C1.57114 0.772917 0.767925 1.58129 0.495312 2.60777C0 4.46832 0 8.35017 0 8.35017C0 8.35017 0 12.232 0.495312 14.0926C0.767925 15.1191 1.57114 15.8938 2.59097 16.1681C4.43954 16.6667 11.8519 16.6667 11.8519 16.6667C11.8519 16.6667 19.2642 16.6667 21.1128 16.1681C22.1326 15.8938 22.9358 15.1191 23.2084 14.0926C23.7037 12.232 23.7037 8.35017 23.7037 8.35017C23.7037 8.35017 23.7037 4.46832 23.2084 2.60777ZM9.4276 11.8746V4.82574L15.6229 8.35026L9.4276 11.8746Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Landing);
