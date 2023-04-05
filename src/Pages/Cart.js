import { useContext, useState } from "react"
import {Context} from "../Context"
import CartItem from "../Components/CartItem"

export default function Cart() {
    const {cartItems, setCartItems} = useContext(Context)
    const [orderPlaced, setOrderPlaced] = useState(false)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setOrderPlaced(true)
        setTimeout(() => {
            console.log("Order Placed")
            setCartItems([])
            setOrderPlaced(false)
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                <button onClick={() => placeOrder()}>
                    {orderPlaced? "Ordering..." : "Place Order"}
                </button>
            </div>
        </main>
    )
}