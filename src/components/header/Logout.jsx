import React from "react";
import { useDispatch } from "react-redux";
import { Auth } from "../../appwrite/auth";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Auth.logout().then(() => {
      dispatch({ type: "LOGOUT" });
    }),
      (error) => {
        console.log(error);
      };
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
