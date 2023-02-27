import React from "react";
import { Element } from "react-scroll";

import Home from "./Home";
import Rooms from "./Rooms";
import Service from "./Service";
import About from "./About";
// import Map from "./Map";
import Contact from "./Contact";

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
      <Element name="about" className="element">
        <About />
      </Element>
      {/* <Element name="restaurant" className="element">
        <Restaurant />
      </Element> */}
      <Element name="contact" className="element">
        <Contact />
      </Element>

    </div>
  );
};

export default React.memo(Content);
