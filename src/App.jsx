import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import auther from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { authStatus } from "./store/authSlice";

const App = () => {
  const dispatch = useDispatch();


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
