import { useState } from "react"

export default function Image(props) {
    const [hovered, setHovered] = useState(false)

    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div className={`${props.className} image-container`}>
            <img 
                src={props.img} 
                className="image-grid"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            {heartIcon}
            {cartIcon}
        </div>
    )
}