export function cartReducer(state, action){
    switch(action.type){
        case "add-to-cart":
            return {
                ...state,
                cartProducts: [...state.cartProducts, 
                    { ...action.payload, quantity: 1 }
                ]
            }
        case "remove-from-cart":
            const removeProducts = state.cartProducts.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                cartProducts: removeProducts
            }
        case "item-increment":
            return {
                ...state,
                cartProducts: state.cartProducts.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item )
            }
        case "item-decrement":
            return {
                ...state,
                cartProducts: state.cartProducts.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : item )
            }
        default:
            return { ...state };
    }
}