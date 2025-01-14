import React, { useState } from "react";
import styles from "./Login.module.css";
import Textinput from "../../components/Textinput/Textinput";
import loginSchema from "../../schemas/loginSchema";
import { useFormik } from "formik";
import { login } from "../../api/internal";
import { setUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const data = {
      username: values.username,
      password: values.password,
    };

    const response = await login(data);

    if (response.status === 200) {
      // 1. setUser
      const user = {
        _id: response.data.user._id,
        email: response.data.user.email,
        username: response.data.user.username,
        auth: response.data.auth,
      };
      dispatch(setUser(user));
      // 2. redirect -> homePage
      navigate("/");
    } else if (response.code === "ERR_BAD_REQUEST") {
      // display error message
      setError(response.response.data.message);
    }
  };

  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: loginSchema,
  });
  return (
    <div
      className={`${styles.loginWrapper} my-0 mx-auto w-[80vw] flex flex-col items-center justify-center`}
    >
      <div
        className={`${styles.loginHeader} text-[40px] font-bold text-center my-[10px]`}
      >
        Log in to your account
      </div>
      <Textinput
        type="text"
        value={values.username}
        name="username"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="username"
        error={errors.username && touched.username ? 1 : undefined}
        errormessage={errors.username}
      />
      <Textinput
        type="password"
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="password"
        error={errors.password && touched.password ? 1 : undefined}
        errormessage={errors.password}
      />

      <button
        className={`${styles.logInButton} bg-[#3861fb] text-white border-none rounded-[10px] outline-none w-[30%] py-[14px] px-[25px] cursor-pointer font-bold text-[20px] m-[10px] mt-[30px] disabled:bg-[#6e8dfc]`}
        onClick={handleLogin}
        disabled={
          !values.username ||
          !values.password ||
          errors.username ||
          errors.password 
        }
      >
        Log In
      </button>
      <span>
        Don't have an account?
        <button
          className={`${styles.createAccount} mt-[30px] ml-[10px] text-[#16c784] text-[18px] cursor-pointer`}
          onClick={() => navigate("/signup")}
        >
          Register
        </button>
      </span>
      {error != "" ? <p className="text-[#ea3943] my-[20px] mx-[0px] text-[20px] font-bold">{error}</p> : ""}
    </div>
  );
};

export default Login;

