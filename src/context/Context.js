import React from "react";

const defaultState = {
    Context: []
}

export const Context = createContext(defaultState)

export const useBasketContext = () => useContext(Context)
