import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"
import { useState } from "react";
function Login(){
  const navigate=useNavigate();
  const [showSignup, setShowSignup] = useState(false);
  function run(){
    let values=document.getElementById("text").value
    let password=document.getElementById("pass").value
    let cpassword=document.getElementById("cp").value
    if(values==='' && password==='' && cpassword===''){
      alert("Please fill out the below Fields")
    }
    else if(password==cpassword){
      localStorage.setItem("email",values)
      localStorage.setItem("password",password)
      localStorage.setItem("cpassword",cpassword)
      navigate("/Mainhome")
    }
    else{
      alert("Your Password is Incorrect")
    }
  }
  function get(){
    let getes=document.getElementById("gete").value
    let getep=document.getElementById("getp").value
    let savedName=localStorage.getItem("email")
    let savedPass=localStorage.getItem("password")
    if(getes==='' && getep===''){
      alert("Please fill out the below Fields")
    }
    else if(savedName==getes && savedPass==getep){
      alert("You Succesfully Loggined")
      navigate("/Mainhome")
      // document.getElementById("out").innerHTML="You Succesfully Loggined"
    }
    else{
      alert("Incorrect Credentials")
      // document.getElementById("out").innerHTML="Incorrect Credentials"
    }
  }
    return(
      <>
      {/* <Navbar /> */}
      <div className="body">
        <div className="logincontainer">
          {!showSignup ? (
            <div className="signup-form" id="signupform">
              <h1>Sign Up</h1>
              <div className="form-message-container">
                <span>Or Use your email for Registration</span>
              </div>
              <form action="" className="form">
                <input type="email" id="text" placeholder="Email" required/>
                <input type="password" id="pass" placeholder="Password" required/>
                <input type="password" id="cp" placeholder="Confirm Password" required/>
                <button type="submit" onClick={run}>Sign Up</button>
              </form>
              <p>Already have an account?<a href="#" className="a" onClick={() => setShowSignup(true)} id="showlogin">Login</a></p>
            </div> 
            ) : (
              <div className="login-form" id="loginform">
                <h1>LogIn</h1>
                <div className="form-message-container">
                  <span>Use your email and password</span>
                </div>
                <form action="" className="form">
                  <input type="email" id="gete" placeholder="Email" required/>
                  <input type="password" id="getp" placeholder="Password" required/>
                  <button type="submit" onClick={get}>Login</button>
                  <a href="#">Forgot Your Password?</a>
                </form>
                <p>Don't have an account? <a href="#"onClick={() => setShowSignup(false)} id="showSignup">Sign Up</a></p>
              </div>
           )}
          </div>
        </div>
       </> 
    )
}
export default Login
