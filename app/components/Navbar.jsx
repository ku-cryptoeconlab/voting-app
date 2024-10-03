import React from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-indigo-600 via-purple-500 to-orange-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <a className="text-white btn btn-ghost text-xl" href="#home">
          Voting App
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-white">Resources</a>
          </li>
          <li>
            <a className="text-white" href="#features">
              Voting
            </a>
          </li>
          <li>
            <a className="text-white" href="#price">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Button className="butn1" color="inherit" href="/sign-in">
          Sign in
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
