import { createContext } from "react";

const Context = createContext()

function ContextProvider(props) {
    return (
        <Context.Provider value={""}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}