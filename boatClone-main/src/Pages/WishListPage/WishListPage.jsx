import { ToastContainer } from "react-toastify";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useWishList } from "../../contexts/WishListProvider";
import {BsBagX} from "react-icons/bs";
import "./WishListPage.css";
import { useNavigate } from "react-router-dom";

export function WishListPage() {
    const {wishListItems} = useWishList();
    const navigate = useNavigate();
    return(
        <>
         <Header/>
        <div className="wishlistHeading"> <h1>Wishlist</h1></div>
         <div className="wishlistContainer">
         {wishListItems.length === 0 && <div className="empty-wishlist">
                    <BsBagX/>
                    <span>Your wishlist is feeling lonely</span>
                    <button onClick={() => {navigate("/products");}}>RETURN TO SHOP</button>
                </div>}
         {wishListItems?.map(item => <ProductCard product={item} key={item._id}/>)}
         </div>
         <Footer/>
         <ToastContainer autoClose={2000}/>
        </>
    )
}