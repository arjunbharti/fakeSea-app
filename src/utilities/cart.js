import axios from "axios";

const addProductToCart = async(product, cartItemsDispatch, authToken) => {
    cartItemsDispatch({ type: "update-cart" })
    try {
        const cartData = await axios.post('/api/user/cart', {product}, {
            headers: { authorization: authToken }
        })
    } catch (error) {
        console.log(error.message);
    }
}

const deleteProductFromCart = async(product, cartItemsDispatch, authToken) => {
    try {
        const data = await axios.delete(`/api/user/cart/${product._id}`, {
            headers: { authorization: authToken }
        })
        cartItemsDispatch({ type: "remove-from-cart", payload: product })
        cartItemsDispatch({ type: "update-cart" })
    } catch (error) {
        console.log(error.message);
    }
}

const updateCartQty = async(type, product, cartItemsDispatch, authToken) => {
    try {
        const incrementProductData = await axios.post(`/api/user/cart/${product._id}`, {
            action: { type }
        },
        {
            headers: { authorization: authToken }
        })
        cartItemsDispatch({ type: "set-cart", payload: incrementProductData.data.cart})
    } catch (error) {
        console.log(error.message);
    }
}

export { addProductToCart, deleteProductFromCart, updateCartQty };