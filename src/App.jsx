import React from "react";
import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

// const client = new Client();
// client.setProject("676ff47100316161936f");
