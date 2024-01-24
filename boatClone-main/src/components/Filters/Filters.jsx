import { categories } from "../../backend/db/categories";
import { useFilters } from "../../contexts/FilterProvider";

import {MdClose} from "react-icons/md";

import "./Filters.css";

export function Filters() {
const {priceRange, selectedCategory, priceRangeHandler, categoryChangeHandler,clearFilters,sortByPrice, handleSortByPrice, ratingHandler,sortByRating,setShowFilter} = useFilters();


  return (
    <>
      <div className="filterMain">
      <div className="opac-layer"></div>
      <div className="filterContent">
        <div className="filterHeader">
          <h3>Filters</h3>
          <button onClick={clearFilters}>Clear</button>
          <span className="close-btn" onClick={() => setShowFilter(false)}>
                        <MdClose/>
                        <span className="text">Close</span>
                    </span>
        </div>
        <div className="filters">
        <div className="priceFilter">
          <h4>Price</h4>

          <div className="filter-slider-range">
            <div className="filter-range">
              <p>500</p>
              <p>2000</p>
              <p>4500</p>
            </div>
            <input
              type="range"
              name="rangeInput"
              className="slider"
              min="500"
              max="4500"
              value={priceRange}
              onChange={priceRangeHandler}
            />
          </div>
        </div>
        <div className="categoryFilter">
            <h4>Category</h4>
            {categories.map(({ categoryName, _id }) => (
              <div className="checkbox-filters" key={_id}>
                <input
                  type="checkbox"
                  value={categoryName}
                  onChange={categoryChangeHandler}
                  checked={
                    selectedCategory.includes(categoryName) ? true : false
                  }
                ></input>
                <span>{categoryName}</span>
              </div>
            ))}

        </div>
        <div className="sortByPrice">
            <h4>Sort By Price</h4>
            <label><input type="radio" name="LtH" id="LtH" value="LtH" onChange={handleSortByPrice} checked={sortByPrice==="LtH"}/>Low to High</label>
            <label><input type="radio" name="HtL" id="HtL" value="HtL" onChange={handleSortByPrice} checked={sortByPrice==="HtL"} />High to Low</label>
        </div>
        <div className="sortByRating">
            <h4>Sort By Rating</h4>
            <label><input type="radio" name="LtH" id="LtH" value="LtH" onChange={ratingHandler} checked={sortByRating==="LtH"}/>Low to High</label>
            <label><input type="radio" name="HtL" id="HtL" value="HtL" onChange={ratingHandler} checked={sortByRating==="HtL"} />High to Low</label>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
