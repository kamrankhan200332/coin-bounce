import React from "react";
import { useState } from "react";
import styles from "./Signup.module.css";
import Textinput from "../../components/Textinput/Textinput";
import signupSchema from "../../schemas/signupSchema";
import { useFormik } from "formik";
import { setUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../../api/internal";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSignup = async () => {
    const data = {
      name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    const response = await signup(data);

    if (response.status === 201) {
      // setUser
      const user = {
        _id: response.data.user._id,
        email: response.data.user.email,
        username: response.data.user.username,
        auth: response.data.user.auth,
      };
      dispatch(setUser(user));

      //redirect to homepage
      navigate("/");
    } else if (response.code === "ERR_BAD_REQUEST") {
      // display error message
      setError(response.response.data.message);
    }
  };

  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: signupSchema,
  });

  return (
    <div
      className={`${styles.signupWrapper} my-0 mx-auto w-[80vw] flex flex-col items-center justify-center`}
    >
      <div
        className={`${styles.signupHeader} text-[40px] font-bold text-center my-[10px]`}
      >
        Create an account
      </div>

      <Textinput
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="name"
        error={errors.name && touched.name ? 1 : undefined}
        errormessage={errors.name}
      />
      <Textinput
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="username"
        error={errors.username && touched.username ? 1 : undefined}
        errormessage={errors.username}
      />
      <Textinput
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="email"
        error={errors.email && touched.email ? 1 : undefined}
        errormessage={errors.email}
      />
      <Textinput
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="password"
        error={errors.password && touched.password ? 1 : undefined}
        errormessage={errors.password}
      />
      <Textinput
        type="password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="confirm password"
        error={
          errors.confirmPassword && touched.confirmPassword ? 1 : undefined
        }
        errormessage={errors.confirmPassword}
      />

      <button
        className={`${styles.signupButton} bg-[#3861fb] text-white border-none rounded-[10px] outline-none w-[30%] py-[14px] px-[25px] cursor-pointer font-bold text-[20px] m-[10px] mt-[30px] disabled:bg-[#6e8dfc]`}
        onClick={handleSignup}
        disabled={
          !values.name ||
          !values.username ||
          !values.password ||
          !values.confirmPassword ||
          errors.name ||
          errors.username ||
          errors.email ||
          errors.password ||
          errors.confirmPassword
        }
      >
        Sign Up
      </button>

      <span>
        Already have an account?
        <button
          className={`${styles.login} mt-[30px] ml-[10px] text-[#16c784] text-[18px] cursor-pointer`}
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
      </span>

      {error != "" ? (
        <p className="text-[#ea3943] my-[20px] mx-[0px] text-[20px] font-bold">
          {error}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Signup;
