import "./LoginStyle.css";
import { Link } from "react-router-dom";

function LoginInForm(){
    return (
        <div className="from-container1">
             <h1>Login In</h1>
             <form>
                <input type="email" placeholder="Email"/>
                <input  type="password" placeholder="Password"/>
                <button>Login</button>
             </form>
             <div>Dont't have an Account Yet?   <Link  to="/SignUp">  Sign Up </Link></div>
        </div>
    )
}

export default LoginInForm