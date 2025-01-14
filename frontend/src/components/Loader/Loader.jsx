import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = ({ text }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col gap-[20px]
h-[calc(100vh-200px)]`}
    >
      <h2>Loading {text}</h2>
      <TailSpin height={80} width={80} radius={1} color={"#3861fb"} />
    </div>
  );
};

export default Loader;
