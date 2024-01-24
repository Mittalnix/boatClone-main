import { Link } from "react-router-dom";

import { Header } from "../../components/Header/Header";

export function SignUpPage(){
    return(
        <>
         <div className="loginMain">
        <Header />
        <div className="logInContainer">
            <form>
              <label htmlFor="name">Name</label>
              <input id="name" type="text"></input>
              <label htmlFor="email">Email address</label>
              <input id="email" type="text"></input>
              <label htmlFor="password">Password</label>
              <input id="password" type="password"></input>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" type="password"></input>
              <button>Create new account</button>
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
      </div>
        </>
    )
}