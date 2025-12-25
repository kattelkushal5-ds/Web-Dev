import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

 const Header = () => {
    const [loginOpen, setLoginOpen] = React.useState(true)
    const handleLogin =()=>{
        setLoginOpen(!loginOpen)
    }
    
    return (
            <nav>
                <div className="nav-wrapper" >
                    <Link  to="/" className="left brand-logo">
                        Emaily
                    </Link>
                    <ul className="right">
                        <li>
                            <a href="/auth/google" className="sass.html">Login with Google
                            </a>
                        </li>
                        <li>
                            <a href="/auth/facebook" className="sass.html">Login with Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Header
