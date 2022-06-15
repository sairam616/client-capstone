import React, { useState } from "react";

const initialState = {
    categories: [],
    products: [],
    categoryId: -1,
};

export const CatelogueContext = React.createContext(initialState);

export const CatelogueProvider = ({ children }) => {
    const [catelogue, setState] = useState(initialState);
    return (
        <CatelogueContext.Provider value={{ state: catelogue, setState }}>
            {children}
        </CatelogueContext.Provider>
    );
};