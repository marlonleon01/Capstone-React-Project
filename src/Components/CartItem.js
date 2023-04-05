import { useContext } from "react"
import { Context } from "../Context"

export default function CartItem({item}) {
    const {removeImageFromCart} = useContext(Context)
    
    const number = 5.99
    const pricePerItem = number.toLocaleString("en-US", {style: "currency", currency: "USD"})

    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeImageFromCart(item.id)}></i>
            <img src={item.url} width="130px" />
            <p>{pricePerItem}</p>
        </div>
    )
}