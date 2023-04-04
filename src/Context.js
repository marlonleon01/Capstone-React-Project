import { createContext, useState, useEffect } from "react";

const Context = createContext()

function ContextProvider(props) {
    const photosUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => {
        fetch(photosUrl)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
        
    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}