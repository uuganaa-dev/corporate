import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSealState } from "../pages/Context";
import { Link } from "react-scroll";

const Header = () => {
  const { state, setState } = useSealState();
  const location = useLocation();
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 970) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
    setState({
      type: "CHANGE_MENU_URL",
      data: location.pathname.split("/")[1],
    });
  }, [location.pathname, setState]);

  return (
    <div
      className={`hidden sm:block fixed text-[#EEEEEE] top-0 left-0 h-[107px] w-full z-20 ${header ? "bg-[#00000080]" : ""
        }`}
    >
      <div className="flex w-full justify-between items-center px-2 lg:px-4 py-[15px] text-sm lg:text-[16px]">
        <div className="flex items-center justify-start gap-4 md:gap-6 lg:gap-10 w-full cursor-default">
          <a href="/">
            <img
              src="/img/logo.png"
              alt=""
              className="w-[80px] h-[50px] md:w-[119px] md:h-[77px]"
            />
          </a>


          {state.menu.map((el) => {
            return (
              <Link
                to={el.url}
                key={el.id}
                className={
                  el.url === state.menu_url
                    ? "bg-[#FFFFFF33] text-[#FFEEC6] px-4 py-2"
                    : ""
                }
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
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
          <div className="relative text-gray-100">
            <div className="flex items-center justify-center gap-2">
              <div>EN</div>
              <i className="fa fa-chevron-down text-xs"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
