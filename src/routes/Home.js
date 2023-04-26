import Donation from "../components/Donation.js";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Team from "../components/Team.js";


function Home (){
    return(
        <>
        <Navbar/>
            <Hero
            cName="hero"
            heroImg="https://plus.unsplash.com/premium_photo-1663054899143-e44e57df1238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Donate Food"
            text="Don't be rude, donate some food."
            url="https://web.whatsapp.com/"
            buttonText="DONATE"
            btnClass="show"

            />
             <Donation/>
             <Team />
             <Footer/>
        </>
    );
}

export default Home; 