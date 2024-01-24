import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./CategoryPage.css"  
import { useProduct } from "../../contexts/ProductProvider";
import { Footer } from "../../components/Footer/Footer";
import { Filters } from "../../components/Filters/Filters";
import { useFilters } from "../../contexts/FilterProvider";
import { ToastContainer } from "react-toastify";

export function CategoryPage() {
    const {productData} = useProduct();
    const {categoryName} = useParams();
    const {selectedCategory, setSelectedCategory,priceRange, sortByPrice,sortByRating,setShowFilter,showFilter} = useFilters();
   

   useEffect(() => {setSelectedCategory( [categoryName])},[]);
   const displayData = productData.filter(product => product.categoryName === categoryName);

    const displayCategoryData = selectedCategory.length > 0 ?productData.filter(product => selectedCategory.includes(product.categoryName)):displayData;
    const priceData = displayCategoryData.filter(product => product.price < priceRange);
    const sortByPriceData = sortByPrice ? sortByPrice==="LtH"?priceData.sort((a,b) => a.price - b.price):priceData.sort((a,b) => b.price - a.price):priceData;
    const sortByRatingData = sortByRating ? sortByRating==="LtH"?sortByPriceData.sort((a,b) => a.rating - b.rating):sortByPriceData.sort((a,b) => b.rating - a.rating):sortByPriceData;
  return (
    <>
      <Header />
      <div className="categoryMain">
        <div className="categoryName">
          <h2>{categoryName}</h2>
        </div>
        <div className="productListingContainerCategory">
          {showFilter && <Filters/>}
            <div className="categoryBtns">
                <button onClick={() => setShowFilter(true)}>Filter By</button>
            </div>
            <div className="productListing">
                {sortByRatingData.map(product => <Link><ProductCard product={product} key={product._id}/></Link>)}
            </div>
        </div>
      </div>
      <Footer/>
      <ToastContainer autoClose={2000}/>
    </>
  );
}
