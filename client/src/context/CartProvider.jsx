import { createContext } from "react";
import PropTypes from "prop-types"

export const CartContext = createContext();

const CartProvider = ({children}) => {
    return (
        <CartContext.Provider
            value={{
                name: 'burak'
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

CartProvider.propTypes = {
    children: PropTypes.node
}