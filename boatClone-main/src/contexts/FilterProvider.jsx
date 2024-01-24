import { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({children}){
    const [priceRange, setPriceRange] = useState(10000);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [sortByPrice, setSortByPrice] = useState("");
    const [sortByRating, setSortByRating] = useState("");
    const [showFilter, setShowFilter] = useState(false);
  
    const priceRangeHandler = (event) => {
      setPriceRange(event.target.value);
    };

    const ratingHandler = (event) => {
        setSortByRating(event.target.value);
    }

    const handleSortByPrice = (e) => {
        setSortByPrice(e.target.value)
    }
  
    const categoryChangeHandler = (event) => {
       let value = event.target.value;
       let isChecked = event.target.checked;
       isChecked ? setSelectedCategory([...selectedCategory, value]):setSelectedCategory(selectedCategory.filter(category => category!==value));
    }

    const clearFilters = () => {
         setSelectedCategory([]);
         setPriceRange(10000)
         setSortByPrice("");
         setSortByRating("");
    }
    return(
        <FilterContext.Provider value={{showFilter,priceRange, setPriceRange, priceRangeHandler, categoryChangeHandler, selectedCategory, setSelectedCategory,clearFilters, handleSortByPrice, sortByPrice,setSortByPrice, sortByRating, setSortByRating, ratingHandler, setShowFilter}}>{children}</FilterContext.Provider>
    )
}

export const useFilters = () => useContext(FilterContext);