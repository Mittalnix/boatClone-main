import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductProvider } from "./contexts/ProductProvider";
import { AuthProvider } from "./contexts/AuthProvider";
import { CartProvider } from "./contexts/CartProvider";
import { SearchProvider } from "./contexts/SearchProvider";
import { FilterProvider } from "./contexts/FilterProvider";
import { WishListProvider } from "./contexts/WishListProvider";
import { AddressProvider } from "./contexts/AddressProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CartProvider>
          <SearchProvider>
            <ProductProvider>
              <FilterProvider>
                <WishListProvider>
                  <AddressProvider>
                <AuthProvider>
                  <App />
                </AuthProvider>
                </AddressProvider>
                </WishListProvider>
              </FilterProvider>
            </ProductProvider>
          </SearchProvider>
        </CartProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
