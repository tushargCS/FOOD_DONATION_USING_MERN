import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import ContactForm from "../components/ContactForm.js";
function Contact(){
    return(
        <>
             <Navbar/>
            <Hero
            cName="hero-mid"
            heroImg="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="Contact"
            btnClass="hide"
 
            /> 
            <ContactForm/>
             <Footer/>
        </>
    )
}

export default Contact; 