import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const SubmitHandler = (event) => {
    event.preventDefault(); // this is important
    handleLogin(email, password);
    setemail(""), setpassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className=" border-2 rounded-xl border-emerald-600 p-20 ">
        <form
          onSubmit={(event) => {
            SubmitHandler(event);
          }}
          className=" flex flex-col items-center justify-center "
        >
          <input
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 text-xl 
            border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          ></input>
          <input
            value={password}
            onChange={(event) => {
              setpassword(event.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 text-xl 
            border-emerald-600 py-3 px-5 mt-3 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter your Password"
          ></input>
          <button
            className=" text-white outline-none  border-none text-xl 
            bg-emerald-600 py-3 px-5 mt-5 rounded-full placeholder:text-white"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
