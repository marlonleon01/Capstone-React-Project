import { useContext } from "react"
import { Context } from "../Context"

export default function CartItem({item}) {
    const {removeImageFromCart} = useContext(Context)
    
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeImageFromCart(item.id)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}