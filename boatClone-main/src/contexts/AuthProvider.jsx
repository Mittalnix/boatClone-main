import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useCart } from "./CartProvider";
import { useFilters } from "./FilterProvider";
import { useWishList } from "./WishListProvider";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const localToken = JSON.parse(localStorage.getItem("login"));
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(localToken?.token);
  const [user, setUser] = useState(localUser?.user);
  const { setCartItems } = useCart();
  const { setSelectedCategory, setSortByPrice, setPriceRange } = useFilters();
  const { setWishListItems } = useWishList();

  const navigate = useNavigate();
  const location = useLocation();
  //console.log("location", location);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    setCartItems([]);
    setSelectedCategory([]);
    setSortByPrice("");
    setPriceRange(10000);
    setWishListItems([]);
  };

  const loginUser = async (userEmail, userPassword) => {
    if (userEmail !== "" && userPassword !== "") {
      const data = {
        email: userEmail,
        password: userPassword,
      };
      setUser(data);
      const tokenObj = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxZGE5ZDI3OC1lN2U2LTQzZTEtYjE2My0yMzU4ODZkMDNhOGYiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.Az-_yAZw3tw1v8eNzxW9mHknN1XtqkDlTsDDYKW0xJ0",
      };
      const guestUserObj = {
        user: {
          _id: "1da9d278-e7e6-43e1-b163-235886d03a8f",
          firstName: "Adarsh",
          lastName: "Balika",
          email: "adarshbalika@gmail.com",
          createdAt: "2024-04-23T21:27:06+05:30",
          updatedAt: "2024-04-23T21:27:06+05:30",
          cart: [],
          wishlist: [],
          id: "1",
        },
      };
      localStorage.setItem("login", JSON.stringify(tokenObj));
      localStorage.setItem("user", JSON.stringify(guestUserObj));

      return;
      try {
        const response = await fetch("api/auth/login", {
          method: "POST",
          body: JSON.stringify(data),
        });
        const { foundUser, encodedToken } = await response.json();
        console.log(response);

        if (response.status === 200 || response.status === 201) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setToken(encodedToken);
          setUser(foundUser);
          navigate(location?.state.from.pathname);
          console.log(location.state);
          //navigate("/");
        } else {
          toast.error(response.statusText);
        }
      } catch (err) {
        toast.error(err);
      }
    }
  };
  return (
    <AuthContext.Provider
      value={{ token, user, loginUser, handleLogout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
