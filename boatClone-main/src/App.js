import {Routes, Route} from "react-router-dom";

import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import "@fontsource/metropolis";
import { CategoryPage } from "./Pages/CategoryPage/CategoryPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage";
import { IndividualProductPage } from "./Pages/IndividualProductPage/IndividualProductPage";
import { RequiresAuth } from "./components/RequiresAuth";
import { ProductListingPage } from "./Pages/ProductListingPage/ProductListingPage";
import { CheckOutPage } from "./Pages/CheckoutPage/CheckOutPage";
import { WishListPage } from "./Pages/WishListPage/WishListPage";
import { UserProfile } from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/categories/:categoryName" element={<CategoryPage/>}/>
        <Route path="/product/:productId" element={<IndividualProductPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/products" element ={<ProductListingPage/>}/>
        <Route path="/wishlist" element ={<WishListPage/>}/>
        <Route path="/checkout" element={<RequiresAuth><CheckOutPage/></RequiresAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
