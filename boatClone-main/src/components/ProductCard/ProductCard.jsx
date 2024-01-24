import {BsHeart} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai';

import "./ProductCard.css";
import { useCart } from '../../contexts/CartProvider';
import { ToastContainer, toast } from 'react-toastify';
import { useWishList } from "../../contexts/WishListProvider";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function ProductCard({product}){
    const {handleAddToCart} = useCart();
    const {handleAddToWishList,wishListItems} = useWishList();
    const[wishListBtn, setWishListBtn] = useState(false);

    const wishlistIds = wishListItems.map(item => item._id);

   useEffect(() => {
    wishlistIds.includes(product._id) ? setWishListBtn(true):setWishListBtn(false);
   },[wishListItems]); 
    
    return(
        <>
         <div className="productMain">
           <Link to ={`/product/${product._id}`}><img src={product.img} alt={product.title}/></Link> 
            <div className="productDetailsMain">
                <div className="desc-top">
                    <div className="rating">⭐️{product.rating}</div>
                    <div className="wishlist"><button onClick={() => {handleAddToWishList(product)}}>{wishListBtn?<AiFillHeart/>:<BsHeart/>}</button></div>
                </div>
                <div className="productDetails">
                   <Link to ={`/product/${product._id}`}> <div className="name">{product.title}</div></Link>
                    <div className="price">
                        <div className="new-price">₹{product.price}</div>
                        <div className="old-price">₹{product.oldPrice}</div>
                        <div className="discount">{parseInt((product.oldPrice - product.price)*100/product.oldPrice)}% off</div>
                    </div>
                </div>
                <hr/>
                <div className="features">
                    {product.features.map(feature => <div className="featureCell">{feature}</div>)}
                </div>
                <div className="button-container">
                <button onClick={() => {handleAddToCart(product, 1)}} >Add To Cart</button>
                </div>
            </div>
         </div>
        <ToastContainer autoClose={2000}/>
        </>
    )
}