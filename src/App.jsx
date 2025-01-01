import React from "react";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <div>App</div>
      <Outlet />
      <div>tata</div>
    </>
  );
};

export default App;

// const client = new Client();
// client.setProject("676ff47100316161936f");
