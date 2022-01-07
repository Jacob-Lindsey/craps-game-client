import React from "react";
import { Context } from "./Context";
import { useGlobalState } from "./useGlobalState";

export const StateProvider = ({ children }) => {
    const store = useGlobalState();

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
};