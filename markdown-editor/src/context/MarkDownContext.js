import React, { createContext, useReducer } from "react";
import markDownReducer from "../reducers/markDownReducer";

const inititalState = {
    rawInput: "# Hi, *Pluto*!",
    markDownSanitized: "Hey There, I'm sanitized",
}


export const MarkDownContext = createContext(
    inititalState
);

const MarkDownContextProvider = ({children}) => {
    const [initState, disptach] = useReducer(markDownReducer, inititalState);
    return (
        
        <MarkDownContext.Provider value= {{initState, disptach} }>
            {children}
        </MarkDownContext.Provider>
    )
}

export default MarkDownContextProvider;