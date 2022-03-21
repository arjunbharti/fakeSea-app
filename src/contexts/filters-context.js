import React, { useContext, createContext, useReducer } from 'react'
import { filtersReducer } from '../reducers/filters-reducers'

const FiltersContext = createContext(null);

const useFilters = () => useContext(FiltersContext);

const FiltersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filtersReducer, {
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
    });
    return (
        <FiltersContext.Provider value={{ state, dispatch }}>
            {children}
        </FiltersContext.Provider>
    )
}

export { useFilters, FiltersProvider }