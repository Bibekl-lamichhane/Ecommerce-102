import "flag-icons/css/flag-icons.min.css";
import React from "react";
import AboutusBar from "@/components/AboutusBar";
import SearchBarBar from "@/components/SearchBarBar";
import MenuBar from "@/components/MenuBar";
import CarouselComp from "@/components/CarouselComp";
import { Shop } from "@mui/icons-material";
import ShopFeatures from "@/components/ShopFeatures";
const page = () => {
  return (
    <div className="mx-20">
      <div className="border-b-2 border-gray-200 -mx-20"><AboutusBar/></div>
      <SearchBarBar/>
      <div className="-mx-20  bg-orange-600"><MenuBar/></div>
      <CarouselComp/>
      <ShopFeatures/>
    </div>
  );
};

export default page;
