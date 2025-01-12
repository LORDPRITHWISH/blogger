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
  return <button className="bg-zinc-800 p-2 rounded-xl" onClick={handleLogout}>Logout</button>;
};

export default LogoutButt;
