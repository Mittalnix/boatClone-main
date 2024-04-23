import { useProduct } from "../../contexts/ProductProvider";
import { useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import "./IndividualProductPage.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartProvider";
import { ToastContainer, toast } from "react-toastify";
import { useWishList } from "../../contexts/WishListProvider";
import { useEffect, useState } from "react";

export function IndividualProductPage() {
  const { productData } = useProduct();
  const { productId } = useParams();
  const { handleAddToCart } = useCart();

  const { handleAddToWishList, wishListItems } = useWishList();
  const [wishListBtn, setWishListBtn] = useState(false);
  const wishlistIds = wishListItems.map((item) => item?._id);

  useEffect(() => {
    wishlistIds.includes(product[0]?._id)
      ? setWishListBtn(true)
      : setWishListBtn(false);
  }, [wishListItems]);

  const product = productData.filter(
    (product) => product?._id === Number(productId)
  );

  return (
    <>
      <Header />
      <div className="individaulProductMain">
        <div className="imageContainer">
          <img src={product[0]?.img} alt={product[0]?.title} />
        </div>
        <div className="productDetailContainer">
          <div className="descTop">
            <div className="rating">⭐️{product[0]?.rating}</div>
            <div className="wishlist">
              <button onClick={() => handleAddToWishList(product[0])}>
                {wishListBtn ? <AiFillHeart /> : <BsHeart />}
              </button>
            </div>
          </div>
          <div className="title">
            <h2>{product[0]?.title}</h2>
          </div>
          <div className="description">{product[0]?.desc}</div>
          <div className="price">
            ₹{product[0]?.price}
            <span className="oldPrice">₹{product[0]?.oldPrice}</span>
          </div>
          <div className="discount">
            {parseInt(
              ((product[0]?.oldPrice - product[0]?.price) * 100) /
                product[0]?.oldPrice
            )}
            % off
          </div>
          <div className="button-container individual">
            <button onClick={() => handleAddToCart(product[0], 1)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer autoClose={2000} />
    </>
  );
}
