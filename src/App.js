import "./style.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import {Route, Routes} from "react-router-dom";


export default function App(){
    return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
          </Routes>
           
          
        </div>
    );
}