import "../components/FormStyle.css"

function Form (){
    return(
        <div className="form-container">
            <h1>Send a message to Us!</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"/>
                <button>Send Messsage</button>
            </form>
        </div>
    )
}

export default Form