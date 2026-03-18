import MenuBar from '@/components/MenuBar'
import "flag-icons/css/flag-icons.min.css";
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const page = () => {
  return (
   <div className='flex  justify-around bg-gray-300 shadow-2xl'>
    <div className='flex p-2 gap-6  text-black  text-sm font-light'>
      <div className='border-r-3 border-gray-400 pr-4'><LocationOnIcon fontSize='small'/> 123 Main Street ,Anytown, USA</div>
      <div className='flex '><LocalPhoneIcon fontSize='small'/>+1 (555)123-4567</div>
    </div>

    <div className='flex p-2 gap-6  text-black  text-sm font-light'>
      <div className='border-r-3 border-gray-400 pr-4'> USD </div>
      <div className='border-r-3 border-gray-400 pr-4'>English <span className="fi fi-us"></span></div>
      <div className=' '><FacebookIcon fontSize='small' /></div>
      <div className=' '><TwitterIcon fontSize='small' /></div>
      <div className=' '>< InstagramIcon fontSize='small'/></div>
    </div>
   </div>
  )
}

export default page