import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../store/authSlice";
import Input from "./Input";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const Create = async (data) => {
    setError(null);
    try {
      const userData = await service.createAccount(data);
      if (userData) {
        const currUderDATA = await service.getAccount();
        if (currUderDATA) {
          dispatch(login({ userData }));
          navigate("/");
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(Create)}>
        <Input type="text" label="Enter Name :" name="name" placeholder="Name" classname=" mb-2" {...register("username", { required: true })} />
        <Input type="email" label="Enter Email :" name="email" placeholder="Email" classname=" mb-2" {...register("email", { required: true })} />
        <Input type="password" label="Enter Password :" name="password" placeholder="Password" classname=" mb-2" {...register("password", { required: true })} />
      </form>
    </div>
  );
};

export default Signup;
