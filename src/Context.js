import { createContext, useState, useEffect } from "react";

const Context = createContext()

function ContextProvider(props) {
    const photosUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch(photosUrl)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
        
    function addImageToCart(imgObj) {
        setCartItems(prevItems => [...prevItems, imgObj])
    }

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addImageToCart, cartItems}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}