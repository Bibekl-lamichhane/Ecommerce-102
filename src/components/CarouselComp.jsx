'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const images = [
  { id: 1, src:"https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg", alt: "Slide 1" },
  { id: 2, src:"https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg", alt: "Slide 2" },
  { id: 3, src:"https://images.pexels.com/photos/34577/pexels-photo.jpg", alt: "Slide 3" },
];

  return (
   <div className=" my-4 carousel-container justify-center items-center ">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} style={{ width: "100%", height: "450px", objectFit: "contain" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselComp;
