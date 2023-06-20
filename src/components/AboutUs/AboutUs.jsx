import React from 'react'
import './AboutUs.css'
import spoon from '../../assets/spoon.png'
import knife from '../../assets/knife.png'

const AboutUs = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content-about">
                <h1 className='headtext__cormorant'>About Us</h1>
                <img src={spoon} alt="spoon" className='spoon-img'/>
                <p className='p__opensans'>Cherry Indian Restaurant offers authentic Indian cuisine using fresh ingredients and skilled chefs. We provide a warm and inviting atmosphere for our guests to enjoy a range of classic and unique dishes. Catering services are also available.</p>
                <button type='button' className='custom__button'>Know More</button>
            </div>
            <div className="app__aboutus-content-knife">
                <img src={knife} alt="knife" />
            </div>
            <div className="app__aboutus-content-history">
            <h1 className='headtext__cormorant'>History</h1>
                <img src={spoon} alt="spoon" />
                <p className='p__opensans'>Cherry Indian Restaurant was founded with the aim of sharing authentic Indian cuisine. It quickly gained popularity for its delicious dishes and moved to a larger location to accommodate more customers. Today, it is a staple in the community, known for its friendly hospitality and diverse menu.</p>
                <button type='button' className='custom__button'>Know More</button>            
            </div>

        </div>
    </div>
  )
}

export default AboutUs