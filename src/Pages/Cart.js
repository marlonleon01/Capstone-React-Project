import { useContext, useState } from "react"
import {Context} from "../Context"
import CartItem from "../Components/CartItem"

export default function Cart() {
    const {cartItems, setCartItems} = useContext(Context)
    const [orderPlacedText, setOrderPlacedText] = useState("Place Order")
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setOrderPlacedText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed")
            setCartItems([])
            setOrderPlacedText("Place Order")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button onClick={() => placeOrder()}>
                    {cartItems.length > 0 ? orderPlacedText : "Add items"}
                </button>
            </div>
        </main>
    )
}