import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import auther from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { loadend, login } from "./store/authSlice";

const App = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const locator = useLocation();
  // const { pathname } = locator;
  useEffect(() => {
    (async () => {
    // const currentUser = async () => {
    //   const user = await auther.getAccount();
    //   dispatch(authStatus({ userData: user }));
    // };
    // currentUser();
      // console.log(locator.pathname);
      const currUserData = await auther.getAccount();
      // console.log("Current User Data:", currUserData);

      // Dispatch login action if user data is available
      if (currUserData) {
        dispatch(login({ userData: currUserData })); // Pass the correct user data
        dispatch(loadend());
        // navigate(pathname);
      }
    })();
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

