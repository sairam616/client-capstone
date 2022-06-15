import React, { useState } from "react";

const initialState = {
    sales: [],
};

export const SalesContext = React.createContext(initialState);

export const SalesProvider = ({ children }) => {
    const [mainsales, setState] = useState(initialState);
    return (
        <SalesContext.Provider value={{ state: mainsales, setState }}>
            {children}
        </SalesContext.Provider>
    );
};