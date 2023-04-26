import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import ServiceImg from "../assets/Home.jpg";
import Footer from "../components/Footer.js";
import Team from "../components/Team.js";
import OS from "../components/ourservice.js";
function Service (){
    return(
        <>
             <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Service"
            btnClass="hide"
            /> 
            <OS/>
            <Footer/>
        </>
    )
}

export default Service; 