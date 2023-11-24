import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-wrapper white'>
                <Link to="/" className='brand-logo left'><b>SMU MCDA | PROD React Application</b></Link>

                <ul id="mav-mobile" className='right'>
                    <li ><Link className='waves-effect waves-light btn' to="/">About Me</Link></li>
                    <li ><Link className='waves-effect waves-light btn' to="/town">My Town</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
