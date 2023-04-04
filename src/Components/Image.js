import { useState } from "react"

export default function Image(props) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className={`${props.className} image-container`}>
            <img 
                src={props.img} 
                className="image-grid"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
        </div>
    )
}