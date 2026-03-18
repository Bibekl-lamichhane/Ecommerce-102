'use client';
import React from 'react'
import MenuBar from "@/components/UserAccount";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "@/components/SearchBar";
const SearchBarBar = () => {
  return (
    <div>
          <div className="flex  justify-between items-center mx-5 text-black ">
        <div className="text-3xl font-bold">e-Shop</div>
        <div className="flex">
          <div className="border-2 border-gray-400 rounded-lg m-2">
            <SearchBar />
          </div>
          <div className="flex items-center p-2 gap-6  text-black  text-sm font-light">
            <div className="flex  items-center gap-2 border-r-3 border-gray-400 pr-4 ">
              <div>
                <ShoppingCartIcon fontSize="small" />
              </div>
              <div className="">
                <div>Cart</div>
                <div>
                  <b>$0.00</b>
                </div>
              </div>
            </div>
            <div className="flex ">
             <MenuBar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBarBar