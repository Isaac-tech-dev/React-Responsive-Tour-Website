import Navbar from "../components/Navbar"
import Hero from "../components/Hero";

import AboutImg from "../Assets/2.jpg"
import Footer from "../components/Footer";
import Form from "../components/Form";

function Contact(){
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-mid"
            heroImg = {AboutImg}
            title = "Contact"
            btnClass="hide"
            />

            <Form/>
         <Footer/>   
        </>
    )
}


export default Contact;