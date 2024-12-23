import React from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={`${styles.errorWrapper} flex flex-col items-center justify-center min-h-[60vh]`}>
      <div className="text-[#ea3943] text-[40px] font-bold">Error 404 - Page not found</div>
      <div className="text-[30px] my-[20px] mx-0">
        Go back to
        <Link to="/" className="font-bold text-[#3861fb]"> Home</Link>
      </div>
    </div>
  );
};

export default Error;
