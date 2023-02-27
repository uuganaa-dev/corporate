import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
// import Landing from "../components/Landing";
import Content from "./Content";
import RoomDetail from "./room"
import FacilityDetail from "./facility"

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Landing />} /> */}
      <Route
        path="/"
        element={
          <Layout>
            <Content />
          </Layout>
        }
      />
      <Route
        exact
        path="/room/:id"
        element={
          <Layout>
            <RoomDetail />
          </Layout>
        }
      />
      <Route
        exact
        path="/facility/:id"
        element={
          <Layout>
            <FacilityDetail />
          </Layout>
        }
      />
    </Routes>
  );
};

export default React.memo(Router);
