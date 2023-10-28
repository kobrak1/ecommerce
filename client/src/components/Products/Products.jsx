import { useState } from "react";
import ProductItem from "./ProductItem";
import ProductsData from "../../data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

const Products = () => {
  const [products] = useState(ProductsData);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track">
            <Slider {...settings}>
              {products.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </Slider>
          </div>
          <div className="glide__arrows">
            <button className="glide__arrow glide__arrow--left">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="glide__arrow glide__arrow--right">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
