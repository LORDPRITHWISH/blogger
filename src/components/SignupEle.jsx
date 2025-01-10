import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../store/authSlice";
import Input from "./Input";
import auther from "../appwrite/auth";
// import service from "../appwrite/config";
// import { auther } from "../appwrite/auth";

const SignupEle = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  // console.log(auther.createAccount);

  // console.log(auther);
  const Create = async (data) => {
    setError(null);

    try {
        console.log("Input Data:", data);

        // Create a new account
        const userData = await auther.createAccount(data);
        console.log("User Data:", userData);

        // If account creation is successful, fetch current user data
        if (userData) {
            const currUserData = await auther.getAccount();
            console.log("Current User Data:", currUserData);

            // Dispatch login action if user data is available
            if (currUserData) {
                dispatch(login({ userData: currUserData })); // Pass the correct user data
                navigate("/"); // Navigate to home page
            }
        }
    } catch (err) {
        setError(err.message); // Set error for UI
        console.error("Error in Create function:", err);
    }
};

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(Create)} className="">
        <Input type="text" label="Enter Name :" name="name" placeholder="Name" classname="bg-zinc-800 mb-2" {...register("username", { required: true })} />
        <Input type="email" label="Enter Email :" name="email" placeholder="Email" classname="bg-zinc-800 mb-2" {...register("email", { required: true })} />
        <Input type="password" label="Enter Password :" name="password" placeholder="Password" classname="bg-zinc-800 mb-2" {...register("password", { required: true })} />
        <button type="submit" className="bg-blue-600 rounded-lg p-2">
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupEle;

