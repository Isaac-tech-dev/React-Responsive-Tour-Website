import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import RecentTrips from "../components/RecentTrips";

import MainImg from "../Assets/2.jpg"
import Footer from "../components/Footer";

function Home(){
    return (

        <div>
            <Navbar/>
            <Hero
            cName = "hero"
            heroImg = {MainImg}
            title = "Your Journey Your Story"
            text = "Choose Your Favourite Destination."
            url = "/"
            btnClass = "show"
            btntext = "Travel Plan"
            />
            <Destination/>
            <RecentTrips/>
            <Footer/>
        </div>
        
        
        )
}


export default Home;