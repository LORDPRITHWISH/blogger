import { useDispatch } from "react-redux";
import auther from "../../appwrite/auth";

const LogoutButt = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    auther.logout().then(() => {
      dispatch({ type: "LOGOUT" });
    }),
      (error) => {
        console.log(error);
      };
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButt;
