import { useState, useContext } from "react"
import { Context } from "../Context"

export default function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

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