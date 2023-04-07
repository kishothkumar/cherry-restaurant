import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {

    const[toogleMenu, setToogleMenu] = useState(false);

  return (
    <nav className='app__Navbar'>
        <div className="app__Navbar-logo">
            <div>Cherry</div>
        </div>
        <ul className='app__Navbar-links'> 
            <li className='p__opensans'><a href="#Home" alt="">Home</a></li>
            <li className='p__opensans'><a href="#About" alt="">About</a></li>
            <li className='p__opensans'><a href="#Menu" alt="">Menu</a></li>
            <li className='p__opensans'><a href="#Awards" alt="">Awards</a></li>
            <li className='p__opensans'><a href="#Contact" alt="">Contact</a></li>
        </ul>
        <div className="app__Navbar-login">
            <a href="#login" className='p__opensans'>Login / Register</a>
            <div/>
            <a href="#BookTable" className='p__opensans'>Book Table</a>
        </div>
        <div className="app__Navbar-smallscreen">
            <GiHamburgerMenu color="#fff" fontSize = {27} onClick={()=>setToogleMenu(true)}/>
              {toogleMenu &&
                  (<div className="app__Navbar-smallscreen-overlay flex__center slide-bottom">
                      <MdOutlineRestaurantMenu color='#fff' fontSize={27} className="overlay-close" onClick={() => setToogleMenu(false)} />
                      <ul className='app__Navbar-smallscreen-links'>
                          <li className='p__opensans'><a href="#Home" alt="">Home</a></li>
                          <li className='p__opensans'><a href="#About" alt="">About</a></li>
                          <li className='p__opensans'><a href="#Menu" alt="">Menu</a></li>
                          <li className='p__opensans'><a href="#Awards" alt="">Awards</a></li>
                          <li className='p__opensans'><a href="#Contact" alt="">Contact</a></li>
                      </ul>
                  </div>)
              }
        </div>
    </nav>
  )
}

export default Navbar