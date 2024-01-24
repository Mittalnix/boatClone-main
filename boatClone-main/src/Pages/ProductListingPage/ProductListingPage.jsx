import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useProduct } from "../../contexts/ProductProvider";
import { useSearch } from "../../contexts/SearchProvider";

import "./ProductListingPage.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useFilters } from "../../contexts/FilterProvider";
import { Filters } from "../../components/Filters/Filters";

export function ProductListingPage(){
    const {productData} = useProduct();
    const {searchInput} = useSearch();
    const {selectedCategory, setSelectedCategory,priceRange, sortByPrice,sortByRating,showFilter, setShowFilter} = useFilters();
    useEffect(() => {setSelectedCategory([])},[]);
    const displayProducts = searchInput.length>0?productData.filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase())|| product.categoryName.toLowerCase().includes(searchInput.toLowerCase())||product.desc.toLowerCase().includes(searchInput.toLowerCase())):productData;
    const displayCategoryData = selectedCategory.length > 0 ?productData.filter(product => selectedCategory.includes(product.categoryName)):displayProducts;
    const priceData = displayCategoryData.filter(product => product.price < priceRange);
    const sortByPriceData = sortByPrice ? sortByPrice==="LtH"?priceData.sort((a,b) => a.price - b.price):priceData.sort((a,b) => b.price - a.price):priceData;
    const sortByRatingData = sortByRating ? sortByRating==="LtH"?sortByPriceData.sort((a,b) => a.rating - b.rating):sortByPriceData.sort((a,b) => b.rating - a.rating):sortByPriceData;
    return(
        <>
         <Header/>
         <div className="productListingMain">
         {showFilter && <Filters/>}
            <div className="categoryBtns">
                <button onClick={() => setShowFilter(true)}>Filter By</button>
            </div>
            <div className="productListingContainer">
            {sortByRatingData.map(product => <Link key={product._id}><ProductCard product={product}/></Link>)}
            </div>
         </div>
         <ToastContainer autoClose={2000}/>
        </>
    )
}