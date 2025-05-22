import { Link } from 'react-router-dom'
import { useState } from "react"

function Navbar(){
    const [login, setLogin]=useState(true)
    function change(){
        setLogin(false)
    }
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <ul className="navbar-nav">
                <li className="nav-item">JR Shopper</li>
                <li className="nav-item"><Link to='/'>Home</Link></li>
                <li className="nav-item"><Link to='/About'>About Us</Link></li>
                {/* <li className="nav-item">{login==true?<div type='button'id='logout' onClick={change}><Link to='/login' className='btn'>logout</Link></div>:<div type='button'id='login' onClick={login}><Link to='/' className='btn'>login</Link></div>}</li> */}
                <li className="nav-item"><Link to='/login' className='btn'>Login</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar