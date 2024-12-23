import React from "react";
import styles from './Textinput.module.css';

const Textinput = (props) => {
  return (
    <div className={`${styles.textInputWrapper} flex items-center flex-col`}>
      <input {...props} className="py-[14px] px-[25px] m-[10px] mt-[20px] outline-none w-[30%] text-[20px]" />
      {props.error && <p className={`${styles.errorMessage} text-[#de1b55] w-[30%]`}>{props.errormessage}</p>}
    </div>
  );
};

export default Textinput;
