import React from "react";
import { useSealState } from "../pages/Context";

const Sidebar = () => {
  const { state } = useSealState();
  return (
    <div
      className={`top-0 -left-[100vw] w-[100vw] bg-[#395C4D] fixed h-full  ease-in-out duration-300 z-10 ${
        state.toggle ? "translate-x-full" : "translate-x-0"
      }`}
    >
      sidebar
    </div>
  );
};

export default React.memo(Sidebar);
