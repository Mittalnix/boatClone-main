import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({children}){
    const [showCart, setShowCart] = useState(false);
    const[cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubtotal, setCartSubTotal] = useState(0);

    useEffect(() => {
        setCartCount(cartItems.reduce((acc, curr) => acc+=curr.quantity,0))
        setCartSubTotal(cartItems.reduce((acc, curr) => acc+= curr.price*curr.quantity,0))
    },[cartItems])

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p._id===product._id);
        if(index!==-1){
            items[index].quantity+=quantity;
        }else{
            product.quantity=quantity;
            items = [...items,product];
            toast.success("Item added to Cart!");
        }

        setCartItems(items);
    }
    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter(item => item._id!==product._id);

        setCartItems(items);
        toast.warning("Item removed from Cart!")
    }
    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p._id===product._id);
        if(type==='inc'){
         items[index].quantity+=1;
        }else{
            if(product.quantity<2){
                items = items.filter(item => item._id!==product._id);    
            }else{
                items[index].quantity-=1;
            }
            
        }

        setCartItems(items);
    }
    return(
        <>
         <CartContext.Provider value={{showCart,setShowCart, cartItems, setCartItems, cartCount, setCartCount, cartSubtotal, setCartSubTotal, handleAddToCart,handleRemoveFromCart,handleCartProductQuantity }}>{children}</CartContext.Provider>
        </>
    )
}

export const useCart = () => useContext(CartContext);