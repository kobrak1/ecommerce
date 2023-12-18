import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">SUMMER 2024</p>
        <h2 className="slider-heading">Save up to 70%</h2>
        <a href="#" className="btn btn-lg btn-primary">
          <Link to={"/shop"}>Explore Now</Link>
        </a>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};

export default SliderItem;
