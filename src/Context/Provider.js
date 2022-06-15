import React, { createContext, useReducer } from 'react';
import mainInitState from './initialStates/mainInitState';
import mainReducer from './reducers/mainReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [mainState, mainDispatch] = useReducer(mainReducer, mainInitState);
    return (<GlobalContext.Provider value={{ mainState, mainDispatch }}>{children}</GlobalContext.Provider>);
}

export default GlobalProvider;