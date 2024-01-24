import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";

import { useCart } from "../../contexts/CartProvider";

import "./Cart.css";
import { CartItem } from "./CartItem/CartItem";
import { Link, useNavigate } from "react-router-dom";
export function Cart(){
    const { setShowCart, cartItems, cartSubtotal} = useCart();
    const navigate = useNavigate();
    return(
        <>
         <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose/>
                        <span className="text">Close</span>
                    </span>
                </div>
                {cartItems.length === 0 && <div className="empty-cart">
                    <BsCartX/>
                    <span>Your cart is feeling lonely</span>
                    <button onClick={() => {navigate("/products"); setShowCart(false) }}>RETURN TO SHOP</button>
                </div>}
                <>
                {cartItems.map(item => <CartItem product={item}/>)}
                {cartItems.length>0 && <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <div className="subtotalPrice"><span className="text total">&#8377;{cartSubtotal}</span><span className="taxWarning">Inclusive of all taxes</span></div>
                    </div>
                    <div className="button">
                        <button className="checkout-cta" onClick={() => setShowCart(false)}><Link to="/checkout">Checkout</Link></button>
                    </div>
                </div>}
                </>
            </div>

         </div>
        </>
    )
}