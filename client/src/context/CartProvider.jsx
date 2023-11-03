import { createContext } from "react";
import PropTypes from "prop-types"

const CartContext = createContext;

const CartProvider = ({children}) => {
    return (
        <CartContext.Provider
            value={{
                value: 'burak'
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