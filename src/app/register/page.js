"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Button from '@mui/material/Button';
import Link from "next/link";
const page = () => {
  return (
    <div className="bg-[url('/orangebg.jpg')] bg-cover bg-center h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 p-10 text-white">
        <div className="flex flex-col justify-between items-center  gap-4 pr-6">
          <AppRegistrationIcon fontSize="large" />
          <h1 className="text-4xl font-bold text-white">Registration</h1>
          <h1 className="text-sm  text-white">Create a new account</h1>
        </div>
        <div className="bg-white rounded-4xl bg-opacity-50 shadow-2xl p-8 flex flex-col gap-2 ">
          <div>
            <TextField
              id="username-input"
              label="Username"
              type="text"
              autoComplete="current-username"
              sx={{ width: '300px' }}
            />
          </div>
          <div>
            <TextField
              id="phonenumber-input"
              label="Phone Number"
              type="text"
              autoComplete="current-phonenumber"
              sx={{ width: '300px' }}
            />
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{ width: '300px' }}
            />
          </div>
          <Link href="/login"><div className="flex justify-center items-center gap-2 text-orange-600 text-xs  hover:text-black hover:underline hover:cursor-pointer">Already have  an account? Sign in</div></Link>
           <Button variant="contained" size="large" color="warning">
          REGISTER
        </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
