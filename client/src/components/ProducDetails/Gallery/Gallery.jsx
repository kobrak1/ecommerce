import { useState } from "react";
import productsData from "../../../data.json";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

const NextBtn = ({ onClick }) => {
  return (
    <button
      className="glide__arrow glide__arrow--right"
      onClick={onClick}
      style={{ zIndex: "5" }}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );
};
NextBtn.propTypes = {
  onClick: PropTypes.func,
};

const PrevBtn = ({ onClick }) => {
  return (
    <button
      className="glide__arrow glide__arrow--left"
      onClick={onClick}
      style={{ zIndex: "5" }}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );
};
PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(
    productsData[0].img.singleImage
  );
  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`${activeImage}`} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <Slider {...settings}>
            {productsData[0].img.thumbs.map((item, index) => (
              <li
                className="glide__slide glide__slide--active"
                key={index}
                onClick={() => setActiveImage(item)}
              >
                <img src={`${item}`} alt="" className="img-fluid active" />
              </li>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
