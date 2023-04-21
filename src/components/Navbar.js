import  './NavbarStyles.css'
import React, { useState } from 'react'
import  { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'

export default function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = ()=>setClick(!click);
  return (
    <div className='header'>
        <div>
            <Link to='/'>
                <h1>Wafula.</h1>
            </Link>
        </div>
    
     <ul className={click ? "nav-menu.active":"nav-menu"}>
        <li>
            <Link to='/'>
                Home
            </Link>
        </li>
        <li>
            <Link to='/About'>
                About
            </Link>
        </li>
        <li>
            <Link to='/Projects'>
                Projects
            </Link>
        </li>
        <li>
            <Link to='/Contact'>
                Contact
            </Link>
        </li>
     </ul>

     <div className='harmburger' onClick={handleClick}>
        {click ?(<FaTimes size= {20} style={{color:"#fff"}}/>):
         (<FaBars size= {20} style={{color:"#fff"}}/>)
        }
     </div>
    </div>
  )
}
