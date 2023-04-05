import { useState, useContext } from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"

export default function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    console.log(img)

    const heartIcon = hovered && 
        <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
    
    const filledHeartIcon = <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>

    return (
        <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)} 
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid"/>
            {img.isFavorite ? filledHeartIcon : heartIcon}
            {cartIcon}
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