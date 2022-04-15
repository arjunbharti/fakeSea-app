import axios from 'axios';

const addProductToWishlist = async(product, wishlistDispatch, authToken) => {
    wishlistDispatch({type : "set-product-id"})
    try{
        const wishlistData = await axios.post('/api/user/wishlist', {product},
        {
            headers : { authorization : authToken }
        })
    } catch(error){
        console.log(error.message)
    }
}
  
const deleteProductFromWishlist = async(product, wishlistDispatch, authToken) => {
    try{
        const data = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers : { authorization : authToken }
        })
        wishlistDispatch({ type: "remove-from-wishlist", payload: product._id })
        wishlistDispatch({ type : "set-product-id" })
    } catch(err){
        console.log(err)
    }
}
  
export {addProductToWishlist, deleteProductFromWishlist}