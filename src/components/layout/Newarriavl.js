import React from "react";

import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import Slider from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Newarriavl = ({ title }) => {
  //Slider-function
  const SlickArrowLeft = ({
    currentSlide,
    slideCount,
    className,
    ...props
  }) => (
    <BsArrowLeftCircle
      className="absolute top-[160px] left-0 z-50 h-[30px] w-[30px] rounded-[50%] bg-[#979797]	 text-[white] opacity-50 sm:h-[64px] sm:w-[64px] "
      {...props}
    />
  );

  const SlickArrowRight = ({
    currentSlide,
    slideCount,
    className,
    ...props
  }) =>  (

    <BsArrowRightCircle
    
      className="absolute top-[160px] xl:right-[18px] right-0 z-50 h-[30px] w-[30px] rounded-[50%] bg-[#979797]	 text-[white] opacity-50 sm:h-[64px] sm:w-[64px]"
      {...props}
    />
  );
  //Slider-function

  //Slider-Start

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    className: "slider variable-width",

    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 2000,
          speed: 500,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          speed: 500,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          
        },
      },

      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          speed: 500,
          slidesToScroll: 3,
          initialSlide: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          
        },
      },
      
    ],
  };
  //Slider-end
  return (
    <div className="mt-[16px] xl:mt-32 lg:mt-6 ">
      <Container className="relative">
        <Heading title="New Arrivals" />

        <Slider {...settings} className="!r-0" >
          <div className=" ">
            <Product
              src="assets/p1.png"
              badge={true}
              title="New"
              Pname="Basic Crew Neck Tee"
              Price="$44.00"
              Color="blcak"
              className="text-[black]"
            />
          </div>
          <div className="  ">
            <Product
              src="assets/p2.png"
              badge={true}
              title="New"
              Pname="Basic Crew Neck Tee"
              Price="$45.00"
              Color="white"
              className="text-[white]"
            />
          </div>
          <div className="  ">
            <Product
              src="assets/p3.png"
              badge={true}
              title="New"
              Pname="Basic Crew Neck Tee"
              Price="$46.00"
              Color="red"
              className="text-[red]"
            />
          </div>
          <div className="  ">
            <Product
              src="assets/p4.png"
              badge={true}
              title="New"
              Pname="Basic Crew Neck Tee"
              Price="$47.00"
              Color="green"
              className="text-[green]"
            />
          </div>
          <div className="  ">
            <Product
              src="assets/p1.png"
              badge={true}
              title="New"
              Pname="Basic Crew Neck Tee"
              Price="$44.00"
              Color="blcak"
              className="text-[black]"
            />
          </div>
          <div className="  ">
            <Product
              src="assets/p2.png"
              badge={true}
              title="New"
              Pname="Basic Crew Neck Tee"
              Price="$45.00"
              Color="white"
              className="text-[white]"
            />
          </div>
          <div className="  ">
            <Product
              src="assets/p3.png"
              badge={true}
              title="New"
              Pname="Basic Crew Neck Tee"
              Price="$46.00"
              Color="red"
              className="text-[red]"
            />
          </div>
          <div className="  ">
            <Product
              src="assets/p4.png"
              badge={true}
              title="New"
              Pname="Basic Crew Neck Tee"
              Price="$47.00"
              Color="green"
              className="text-[green]"
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Newarriavl;
