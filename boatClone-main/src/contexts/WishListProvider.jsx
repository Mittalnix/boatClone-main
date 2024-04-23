import { createContext,useContext,useEffect,useState } from "react"
import { toast } from "react-toastify";

export const WishListContext = createContext();

export function WishListProvider({children}){
    const[wishListItems, setWishListItems] = useState([]);
    const [wishlistCount, setWishlistCount] = useState(0);

    useEffect(() => {
        setWishlistCount(wishListItems.length);
    },[wishListItems]);

    const handleAddToWishList = (product) => {
        let items = [...wishListItems];
        let index = items.findIndex(item => item._id===product._id); // 
        if(index===-1){
            items = [...wishListItems, product];
            toast.success("Item added to Wishlist!");
        }
        else{
            items = wishListItems.filter(item => item._id!==product._id);
            toast.warning("Item removed from Wishlist!");
        }

        setWishListItems([...items]);
         
    }
    
    return(
        <>
         <WishListContext.Provider value={{handleAddToWishList,wishListItems, setWishListItems,wishlistCount}}>{children}</WishListContext.Provider>
        </>
    )
}

export const useWishList = () => useContext(WishListContext);