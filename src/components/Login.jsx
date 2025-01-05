import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../store/authSlice";
import Input from "./Input";
import service from "../appwrite/config";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const logging = async (data) => {
    setError(null);
    try {
      const session = await service.login(data);
      if (session) {
        const userData = await service.getAccount();
        if (userData) {
          dispatch(login({ userData }));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(logging)}>
        <Input type="email" label="Enter Email :" name="email" placeholder="Email" classname=" mb-2" {...register("email", { required: true })} />
        <Input type="password" label="Enter Password :" name="password" placeholder="Password" classname=" mb-2" {...register("password", { required: true })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
