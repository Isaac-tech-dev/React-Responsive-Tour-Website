import "../components/RecentTripsStyle.css"

function RecentTripsData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="simple img"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default RecentTripsData