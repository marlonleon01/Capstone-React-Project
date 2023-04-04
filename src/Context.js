import { createContext, useState } from "react";

const Context = createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([])
    
    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}