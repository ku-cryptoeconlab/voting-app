import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

const SignUpPage: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
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
          <Link href="/sign-in" passHref>
            <Button className="butn1" color="inherit">
              Sign In
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Sign-Up Section */}
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: "center", my: 4 }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Sign Up
          </Typography>
          <SignUp />
        </Box>
      </Container>
    </>
  );
};

export default SignUpPage;
