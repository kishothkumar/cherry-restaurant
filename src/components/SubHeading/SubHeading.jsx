import React from 'react'
import './SubHeading.css'
import Spoon from '../../assets/spoon.png'

const SubHeading = ({title}) => {
  return (
    <div className="app__SubHeading">
        <p className="p__cormorant">{title}</p>
        <img src={Spoon} alt="spoon" className='spoon-img' />
    </div>
  )
}

export default SubHeading