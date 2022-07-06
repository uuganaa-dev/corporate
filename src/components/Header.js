import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useSealState } from "../pages/Context";

const Header = () => {
  const { state, setState } = useSealState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setState({
      type: "CHANGE_MENU_URL",
      data: location.pathname.split("/")[1],
    });
  }, [location.pathname, setState]);

  return (
    <div
      className={`fixed text-gray-800 top-0 left-0 h-[58px] w-full z-20 ${
        state.header ? "hidden" : "block"
      }`}
    >
      <div className="text-gray-800 px-4 flex items-center justify-between py-2 h-[58px] max-w-7xl mx-auto">
        <div
          className="sm:hidden"
          onClick={() =>
            setState({ type: "CHANGE_TOGGLE", data: !state.toggle })
          }
        >
          {state.toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width={24}
              height={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1={1} x2={17} y2={1} stroke="white" strokeWidth={2} />
              <line y1={15} x2={24} y2={15} stroke="white" strokeWidth={2} />
              <line y1={8} x2={21} y2={8} stroke="white" strokeWidth={2} />
            </svg>
          )}
        </div>
        {state.sidebar ? (
          <div>EN</div>
        ) : (
          <div className="cursor-pointer">
            <img
              src="/img/logo.png"
              alt=""
              onClick={() => {
                setState({ type: "CHANGE_TOGGLE", data: false });
                navigate("/");
              }}
            />
          </div>
        )}

        <div
          className="hover:scale-105 sm:hidden"
          onClick={() =>
            setState({ type: "CHANGE_SIDEBAR", data: !state.sidebar })
          }
        >
          {state.sidebar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              width={24}
              height={24}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width={24}
              height={24}
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
            </svg>
          )}
        </div>

        <div className="hidden sm:flex w-full justify-between items-center">
          <div className="flex items-center justify-evenly w-full text-base cursor-default">
            {state.menu.map((el) => {
              return (
                <Link
                  to={"/" + el.url}
                  key={el.id}
                  onClick={() =>
                    setState({ type: "CHANGE_MENU_URL", data: el.url })
                  }
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
          <div>
            <div className="relative text-gray-800">
              <div>EN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
