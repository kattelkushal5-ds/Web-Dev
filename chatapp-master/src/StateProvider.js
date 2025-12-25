import React from "react"

const StateContext = React.createContext()

const StateProvider = ({ reducer, initialState, children }) => {

    return ( <
        StateContext.Provider value = { React.useReducer(reducer, initialState) } > { children } </StateContext.Provider>
    )
};

export { StateProvider }
export const useStateValue = () => React.useContext(StateContext)