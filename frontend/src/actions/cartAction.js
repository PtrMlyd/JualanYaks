import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from "../reducer/constant/cart"
import Cookie from 'js-cookie'
const { default: Axios } = require("axios")

// menggunakan js-cookie dengan menambahkan parameter setelah dispatch
const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data }= await Axios.get(`/api/products/${productId}`)

        dispatch({ type: CART_ADD_ITEM, payload: {
            id: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            inStock: data.inStock,
            qty

        }})
        // get access to cart item
        const {cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems), { expires : 1});

    } catch (error) {
        
    }
}

const removeFromCart = (productId) => (dispatch, getState) => {
    try {
        dispatch({ type: CART_REMOVE_ITEM, payload: productId });

         // get access to cart item
         const {cart: { cartItems } } = getState();
         Cookie.set("cartItems", JSON.stringify(cartItems), { expires : 1});
    } catch (error) {
        
    }
}

const saveShipping = ( data ) => (dispatch) => {
    dispatch( { type : CART_SAVE_SHIPPING, payload : data } )
}

const savePayment= ( data ) => (dispatch) =>  {
    dispatch( { type : CART_SAVE_PAYMENT, payload : data } )
}

export { addToCart, removeFromCart, saveShipping, savePayment }