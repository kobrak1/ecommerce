import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';
import PropTypes from "prop-types"
import './Reviews.css'

const Reviews = ({active}) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem  />
          <ReviewItem  />
          <ReviewItem  />
          <ReviewItem  />
        </ol>
      </div>
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  active: PropTypes.string
}

export default Reviews;
