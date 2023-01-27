import Navbar from "../components/Navbar"
import Hero from "../components/Hero";

import AboutImg from "../Assets/1.jpg"
import Footer from "../components/Footer";

function About(){
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-mid"
            heroImg = {AboutImg}
            title = "About"
            btnClass="hide"
            />

        <Footer/>    
        </>
    )
}


export default About;