import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import auther from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { authStatus, login } from "./store/authSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserData = async () => {
    // const currentUser = async () => {
    //   const user = await auther.getAccount();
    //   dispatch(authStatus({ userData: user }));
    // };

      const currUserData = await auther.getAccount();
      // console.log("Current User Data:", currUserData);

      // Dispatch login action if user data is available
      if (currUserData) {
          dispatch(login({ userData: currUserData })); // Pass the correct user data
          // Navigate("/"); // Navigate to home page
      }
    };

    fetchUserData();
  }, []);
 

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
