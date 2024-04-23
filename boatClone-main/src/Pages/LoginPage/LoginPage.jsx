import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";
import "./LoginPage.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { UserProfile } from "../../components/UserProfile/UserProfile";

export function LoginPage() {
  const { loginUser } = useAuth();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const { user } =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : { user: null };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    toast.warning("please click on login as guest to continue...");
  };

  const handleGuestLogin = (event) => {
    event.preventDefault();
    setUserDetails({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
  };
  useEffect(() => {
    loginUser(userDetails.email, userDetails.password);
  }, [userDetails]);
  return (
    <>
      <div className="loginMain">
        <Header />
        {!user ? (
          <div className="logInContainer">
            <form>
              <label htmlFor="email">Email Addess</label>
              <input
                id="email"
                type="email"
                value={userDetails.email}
                onChange={inputChangeHandler}
                name="email"
              ></input>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={userDetails.password}
                onChange={inputChangeHandler}
                name="password"
              ></input>
              <button
                onClick={handleLogin}
                type="submit"
                id="login"
                value="login"
              >
                Login
              </button>
              <button
                onClick={handleGuestLogin}
                type="submit"
                id="guest"
                value="guest"
              >
                Login as a Guest
              </button>
              <p>
                Don't have an account?{" "}
                <span>
                  <Link to="/signup">Signup</Link>
                </span>
              </p>
            </form>
          </div>
        ) : (
          <UserProfile />
        )}
      </div>
      <ToastContainer autoClose={2000} limit={1} />
    </>
  );
}
