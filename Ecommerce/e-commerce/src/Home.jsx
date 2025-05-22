import Navbar from "./Navbar"
import { Link } from "react-router-dom"
function Home(){
    return(
        <>
        {/* <Navbar/> */}
        <div className="welcome-container">
            <h1>Welcome to <span className="highlight">JR Shopper</span></h1>
            <p>Your one-stop destination for high-quality and trendy products.</p>
            <p>Enjoy a seamless shopping experience with unbeatable deals and fast delivery.</p>
            <p><strong>Limited Time Offer :</strong> Get up to <span className="highlight">90% OFF</span> on all items!</p>
            <p>Start your journey with us today. Shop smart, live better.</p>
            <button className="bounce-in">Get Started</button>
            <Link to='/login'><button className="logbtn">Login</button></Link>
        </div>
        </>
    )
}
export default Home