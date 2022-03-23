export function wishlistReducer(state, action) {
    switch(action.type){
        case "get-wishlisted-products":
            return { 
                ...state,
                wishlist: action.payload
            }
        case "add-to-wishlist":
            return {
                ...state,
                wishlist: [...state.wishlist, 
                    {...action.payload, inWishlist: true}
                ]
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