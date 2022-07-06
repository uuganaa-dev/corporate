import React from "react";

const Home = () => {
  return (
    <div className="bg-black">
      <img
        src="/img/home-bg.png"
        alt=""
        className="w-full h-[100vh] object-cover opacity-70"
      />
    </div>
  );
};

export default React.memo(Home);
