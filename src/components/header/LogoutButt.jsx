import { useDispatch } from "react-redux";
import auther from "../../appwrite/auth";
import { useNavigate } from "react-router";

const LogoutButt = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleLogout = () => {
    auther.logout().then(() => {
      dispatch({ type: "LOGOUT" });
      navigator.navigate("/");
    }),
      (error) => {
        console.log(error);
      };
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButt;
