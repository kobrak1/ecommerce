import PropTypes from "prop-types";

const CartItem = ({ cartItem }) => {
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img.singleImage} alt="" />
        <i className="bi bi-x delete-cart" data-id="1"></i>
      </td>
      <td>{cartItem.name}</td>
      <td>${cartItem.price.newPrice.toFixed(2)}</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$95.70</td>
    </tr>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

export default CartItem;
