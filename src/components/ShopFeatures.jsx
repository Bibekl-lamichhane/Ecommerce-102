import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShieldIcon from '@mui/icons-material/Shield';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const ShopFeatures = () => {
  return (
    <div className="flex justify-center items-center gap-20">
      <div className="flex justify-center items-center gap-6 p-2  ">
        <SupportAgentIcon />
        <div>
          <h1>Responsive</h1>
          <h2>Customer service available 24/7</h2>
        </div>
      </div>
       <div className="flex justify-center items-center gap-6 p-2 ">
        <ShieldIcon />
        <div>
          <h1>Secure</h1>
          <h2>Certified marketplace since 2007</h2>
        </div>
      </div>
       <div className="flex justify-center items-center gap-6 p-2 ">
        <ConnectWithoutContactIcon />
        <div>
          <h1>Transparent</h1>
          <h2> Hassle-free returns and exchanges</h2>
        </div>
      </div>
       <div className="flex justify-center items-center gap-6 p-2 ">
        <LocalShippingIcon />
        <div>
          <h1>Shipping</h1>
          <h2>Free, fast delivery</h2>
        </div>
      </div>
      
    </div>
  );
};

export default ShopFeatures;
