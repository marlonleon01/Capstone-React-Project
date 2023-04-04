export default function Image(props) {
    return (
        <div className={`${props.className} image-container`}>
            <img src={props.img}  className="image-grid"/>
        </div>
    )
}