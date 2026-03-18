"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import Button from '@mui/material/Button';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
const page = () => {
  return (
    <div className="bg-[url('/orangebg.jpg')] bg-cover bg-center h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 p-10 text-white">
        <div className="flex flex-col justify-between items-center  gap-4 pr-6">
          <LoginIcon fontSize="large" />
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <h1 className="text-sm  text-white">Login to your account</h1>
        </div>
        <div className="bg-white rounded-4xl bg-opacity-50 shadow-2xl p-8 flex flex-col gap-2 justify-center items-center ">
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
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              sx={{ width: '300px' }}
            />
          </div>
          <div className="text-black text-xs">
            <div className="flex gap-2 ">
              <div className="flex items-center ">
                  <FormControlLabel 
                    control={<Checkbox defaultChecked color="warning"  />} label="Remember me"
                  sx={{ fontSize: 2}} labelPlacement="end"/>
              </div>
              <div className="flex items-center text-[15px] font-normal hover:text-orange-600 hover:underline hover:cursor-pointer">Forget password ?</div>
              
            </div>
            <Link href="/register"><div className="flex justify-center items-center gap-2 text-orange-600  hover:text-black hover:underline hover:cursor-pointer">Don't have an account? Sign up</div></Link>
            
          </div>
           <Button variant="contained" size="large" color="warning">
          LOGIN
        </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
