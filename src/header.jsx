import Footer from "./components/Footer";
import "./Header.css"

const header = () =>{
    return(
        <div>
            <h1 class = "header">This is Header</h1>
            <p style={{backgroundColor:"green", fontSize:"35px"}}>This is a paragraph</p>
            <Footer/>
        </div>
    )
}

export default header;