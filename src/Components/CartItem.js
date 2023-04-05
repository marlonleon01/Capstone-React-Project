import { useContext, useState } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

export default function CartItem({item}) {
    const {removeImageFromCart} = useContext(Context)
    const [hovered, ref] = useHover()
    
    function trashIcon() {
        if (hovered) {
            return "ri-delete-bin-fill"
        } else {
            return "ri-delete-bin-line"
        }
    }

    return (
        <div className="cart-item">
            <i 
                className={trashIcon()} 
                onClick={() => removeImageFromCart(item.id)}
                ref={ref}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}