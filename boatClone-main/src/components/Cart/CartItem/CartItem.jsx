import { MdClose } from "react-icons/md";

import "./CartItem.css";
import { useCart } from "../../../contexts/CartProvider";

export function CartItem({product}) {
  const {handleRemoveFromCart, handleCartProductQuantity} = useCart();
  return (
    <>
      <div className="cart-products">
        <div className="cart-product">
          <div className="img-container">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="prod-details">
            <div className="prod-top">
              <span className="name">{product.title}</span>
              <MdClose className="close-btn" onClick={() => handleRemoveFromCart(product)} />
            </div>
            <div className="quantity-btns">
              <span onClick={() => handleCartProductQuantity('inc',product)}>+</span>
              <span>{product.quantity}</span>
              <span onClick={() => handleCartProductQuantity('dec',product)}>-</span>
            </div>
            <div className="text">
              <span>&#8377;{product.price * product.quantity}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
