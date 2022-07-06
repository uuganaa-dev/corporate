import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Landing from "./Landing";
import Home from "./Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
};

export default React.memo(Router);
