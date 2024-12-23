import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.user.auth);
  
  return (
    <>
      <nav className="flex justify-around items-center py-[5px] px-[0px] my-[5px] mx-auto w-[80%]">
        <NavLink
          to="/"
          className={`${styles.inActiveStyle} text-[32px] font-extrabold`}
        >
          CoinBounce
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Home
        </NavLink>
        <NavLink
          to="crypto"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Cryptocurrencies
        </NavLink>
        <NavLink
          to="blogs"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="submit"
          className={({ isActive }) =>
            isActive ? styles.activeStyle : styles.inActiveStyle
          }
        >
          Submit a blog
        </NavLink>

        {isAuthenticated ? (
          <div>
            <NavLink>
              <button
                className={`${styles.singOutButton} ml-[10px] bg-[#ea3943]
                 text-white border-none outline-none py-[10px] px-[15px]
           cursor-pointer font-bold text-lg  hover:bg-[#e01822]`}
              >
                Sign Out
              </button>
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? styles.activeStyle : styles.inActiveStyle
              }
            >
              <button
                className={` ${styles.logInButton} border-none outline-none py-[10px] px-[15px]
           cursor-pointer font-bold text-lg hover:text-black hover:bg-[#f3f3f3]`}
              >
                Log In
              </button>
            </NavLink>
            <NavLink
              to="signup"
              className={({ isActive }) =>
                isActive ? styles.activeStyle : styles.inActiveStyle
              }
            >
              <button
                className={`${styles.signUpButton} ml-[10px] bg-[#3861fb] text-white border-none outline-none py-[10px] px-[15px] cursor-pointer font-bold text-lg hover:bg-[#1f4ffd]`}
              >
                Sign Up
              </button>
            </NavLink>
          </div>
        )}
      </nav>

      <div className={`${styles.separator}`}></div>
    </>
  );
};

export default Navbar;
