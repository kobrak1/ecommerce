const CartItem = () => {
  return (
    <tr className="cart-item">
        <td></td>
        <td className="cart-image">
            <img src="../../../public/img/products/product4/1.png" alt="" />
            <i className="bi bi-x delete-cart" data-id="1"></i>
        </td>
        <td>Bustier Resin Strap</td>
        <td>$95.70</td>
        <td className="product-quantity">1</td>
        <td className="product-subtotal">$95.70</td>
    </tr>
  )
}

export default CartItem
