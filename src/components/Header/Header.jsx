import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import Biriyani from '../../assets/biriyani1.jpg'
import './Header.css'

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id='Home' >
        <div className="app__wrapper_info">
            <SubHeading title="Discover New Culinary Delights"/>
            <h1 className="app__header-h1">Celebrate Life Moments with us</h1>
            {/* <p className='p__opensans'>Welcome to Cherry Restaurant, where we offer authentic Indian dishes crafted with the finest ingredients and spices. From aromatic curries to tandoori specialities and vegetarian options, our menu has something for everyone. Come experience our cozy atmosphere and friendly service as we take you on a journey through India's rich and diverse cuisine.</p> */}
            <p className='p__opensans'>Welcome to Cherry Restaurant! Enjoy authentic Indian dishes, from aromatic curries to tandoori specialties and vegetarian options. Experience our cozy atmosphere and friendly service as we take you on a journey through India's rich cuisine.</p>
            <button type='button' className='custom__button'>Explore Menu</button>
        </div>
        <div className="app__wrapper_img">
            <img src={Biriyani} alt="" />
        </div>
    </div>
  )
}

export default Header