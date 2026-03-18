'use client';
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuBar() {
  return (
    <React.Fragment>
      <div className=" text-white mx-20">
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex justify-between w-full">
            <div className="flex gap-12 hover:cursor-pointer">
              <Typography sx={{ minWidth: 100 }}>All Category</Typography>
              <Typography sx={{ minWidth: 100 }}>Products</Typography>
              <Typography sx={{ minWidth: 100 }}>Blog</Typography>
              <Typography sx={{ minWidth: 100 }}>Contact</Typography>
            </div>
            <div className="flex gap-12 hover:cursor-pointer ">
              <Typography sx={{ minWidth: 100 }}>LIMITED SALE</Typography>
              <Typography sx={{ minWidth: 100 }}>Best Seller</Typography>
              <Typography sx={{ minWidth: 100 }}>New Arrival</Typography>
            </div>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
}
