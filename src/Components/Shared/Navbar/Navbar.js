import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg'>
            <div className="container-fluid">
                <Link className='fs-1 fw-bold text-white' to='/home'>POWER <span style={{ color: "#FCD842" }}>X</span></Link>
                <button style={{border:"2px solid #FCD842", outline:"none"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon style={{color:"#FCD842"}} icon={faBars}/>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/home'>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/classes'>Our Classes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to=''>About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/home'>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/princing'>Princing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/home'>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;