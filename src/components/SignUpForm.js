import "./SignUpStyle.css";

function SignUpForm(){
    return (
        <div className="from-container2">
             <h1>Sign Up</h1>
             <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="tel" placeholder="Phone-No."/>
                <input  type="password" placeholder="Password"/>
                <input  type="password" placeholder="Password"/>
                <label for="cars">Select Role</label>
                <select >
                    <option>Donar</option>
                    <option>Agent</option>
                </select>
                <textarea placeholder="Address" rows="4"></textarea>
                <button>Sign Up</button>
             </form>
        </div>
    )
}

export default SignUpForm