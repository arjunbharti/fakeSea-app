export function wishlistReducer(state, action) {
    switch(action.type){
        case "set-product-id":
            return { 
                ...state,
                productCount: state.productCount + 1
            }
        case "add-to-wishlist":
            return {
                ...state,
                wishlist: action.payload
            }
        case "remove-from-wishlist":
            return {
                ...state,
                wishlist: [...state.wishlist.filter((item) => item._id !== action.payload._id)]
            }
        default: 
            return {...state}
    }
}