import React from "react";
import { Element } from "react-scroll";

import Home from "./Home";
import Rooms from "./Rooms";
import Service from "./Service";

const Content = () => {
  return (
    <div>
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="rooms" className="element">
        <Rooms />
      </Element>
      <Element name="service" className="element">
        <Service />
      </Element>
    </div>
  );
};

export default React.memo(Content);
