export function filtersReducer(state, action){
    const defaultState = {
        sortBy: null,
        rating: null,
        trending: false,
        chain: {
            ethereum: false,
            polygon: false,
            solana: false
        },
        category: {
            art: false,
            bollywood: false,
            celebrity: false,
            ticket: false,
            sports: false
        }
    }

    const { trending } = state;
    const { art, bollywood, celebrity, ticket, sports } = state.category;
    const { ethereum, polygon, solana } =  state.chain;

    switch(action.type){
        case "sortBy":
            return { ...state, sortBy: action.payload };
        case "rating":
            return { ...state, rating: parseInt(action.payload, 5) };
        case "trending":
            return { ...state, trending: !trending };
        case "art":
            return { ...state, category: {...state.category, art: !art } };
        case "bollywood":
            return { ...state, category: {...state.category, bollywood: !bollywood } };
        case "celebrity":
            return { ...state, category: {...state.category, celebrity: !celebrity } };
        case "ticket":
            return { ...state, category: {...state.category, ticket: !ticket } };  
        case "sports":
            return { ...state, category: {...state.category, sports: !sports } };  
        case "ethereum":
            return { ...state, chain: { ...state.chain, ethereum: !ethereum } };
        case "polygon":
            return { ...state, chain: { ...state.chain, polygon: !polygon } };
        case "solana":
            return { ...state, chain: { ...state.chain, solana: !solana } };
        case "clear":
            return defaultState;
        default: 
            return defaultState;
    }
};
