export function cartReducer(state, action){
    switch(action.type){
        case "add-to-cart":
            return {
                ...state,
                cartProducts: action.payload
            }
        case "remove-from-cart":
            return {
                ...state,
                cartProducts: [...state.cartProducts.filter((item) => item._id !== action.payload._id)]
            }
        case "set-cart":
            return {
                ...state,
                cartProducts:  action.payload
            }
        case "update-cart":
            return {
                ...state,
                updateCart: state.updateCart + 1
            }
        default:
            return { ...state };
    }
}