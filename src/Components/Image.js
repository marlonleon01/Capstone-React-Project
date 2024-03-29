import { useState, useContext } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

export default function Image({className, img}) {
    const {toggleFavorite, addImageToCart, cartItems, removeImageFromCart} = useContext(Context)
    const [hovered, ref] = useHover()

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeImageFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addImageToCart(img)}></i>
        }
    }

    return (
        <div 
            ref={ref}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
        url: PropTypes.string.isRequired
    })
}