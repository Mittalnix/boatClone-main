import {HiOutlineShoppingBag} from 'react-icons/hi';
import {BsHeart} from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

import "./Header.css";
import {Cart} from "../Cart/Cart";
import { useCart } from '../../contexts/CartProvider';
import { useSearch } from '../../contexts/SearchProvider';
import { useWishList } from '../../contexts/WishListProvider';



export function Header() {
  const navigate = useNavigate();
  const {showCart, setShowCart, cartCount} = useCart();
  const {setSearchInput} = useSearch();
  const {wishlistCount}  = useWishList();

  const searchHandler = (event) => {
    setSearchInput(event.target.value);
    navigate("/products");
  }
  return (
    <>
      <div className="header-main">
        <div className="announcement-bar">
          <div className="announcement-text">
            <p>
              Groove to your favourite tunes with <b>Rockerz 235 V2</b> -- now
              at <b>₹899.</b> 💥 Shop now!
            </p>
          </div>
        </div>
        <nav className="nav-bar">
          <div className="nav-left">
          <Link to="/">
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small.svg?v=1682421543"
              alt="logo"
            />
            </Link>
          </div>
          <div className="nav-right">
            <div className="search">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/search_558f3ad8-0ef9-4a9b-8576-a396b44aacd8.png?v=1680091847" alt="search-icon"/>
              <input type="text" placeholder="Search" onChange={searchHandler}/>
            </div>
            <div className="login">
              <Link to="/login">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989" alt="login" />
              </Link>
            </div>
            <div className="cart" onClick={() => setShowCart(!showCart)}><HiOutlineShoppingBag/>{!!cartCount&&<span>{cartCount}</span>}</div>
            <div className="wishlist"><Link to="/wishlist"><BsHeart/></Link>{!!wishlistCount&&<span>{wishlistCount}</span>}</div> 
          </div>
        </nav>
      </div>
      {showCart && <Cart/>}
    </>
  );
}
