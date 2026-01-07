"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images, setActiveIndex }) => {
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: Math.min(images.length, 1),
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={image.key || index} className="">
            <Image
              src={image.src}
              alt={image.alt || `Slide ${index}`}
              className="w-full object-cover "
              width={400}
              height={200}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
