import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import Content from "./Content";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/home"
        element={
          <Layout>
            <Content />
          </Layout>
        }
      />
    </Routes>
  );
};

export default React.memo(Router);
