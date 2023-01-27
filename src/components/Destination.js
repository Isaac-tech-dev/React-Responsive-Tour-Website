import "../components/DestinationStyle.css"
import DestinationData from "./DestinationData"
import Image1 from "../Assets/3.jpg"
import Image2 from "../Assets/4.jpg"

const Destination = ()=>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot , within a time frame.</p>

            <DestinationData
            className="first-des"
                heading="Taal Volcano, Batangas"
                text="Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer
                   took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                img1={Image1}
                img2={Image2}
            />

            <DestinationData
            className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer
                   took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                     remaining essentially unchanged.
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                img1={Image2}
                img2={Image1}
            />
            
        </div>
    )
}

export default Destination