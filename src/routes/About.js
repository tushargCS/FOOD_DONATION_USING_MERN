import AboutUS from "../components/AboutUs.js";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
function About (){
    return(
        <>
             <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg="https://images.pexels.com/photos/6995244/pexels-photo-6995244.jpeg?cs=srgb&dl=pexels-julia-m-cameron-6995244.jpg&fm=jpg"
            title="About"
            btnClass="hide"
 
            /> 
            <AboutUS/>
            <Footer/>
        </>
    )
}

export default About; 