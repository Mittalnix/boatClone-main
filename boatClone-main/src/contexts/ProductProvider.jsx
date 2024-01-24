import { createContext, useEffect, useContext, useState } from "react"

export const ProductContext = createContext()

export function ProductProvider({children}){
    const [productData, setProductData] = useState([]);

    const getProductData = async () => {
        try{
           const response = await fetch("/api/products");
           const result = await response.json();
           setProductData(result.products);
           
        }catch(err){
            console.error(err);
        }
    }

    useEffect(() => {getProductData()},[]);
    
    return(
      <ProductContext.Provider value={{productData, setProductData}}>{children}</ProductContext.Provider>
    )
    
}

export const useProduct = () => useContext(ProductContext);