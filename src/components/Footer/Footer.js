import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer__container'>
        Made with Hope By{" "}
        <a
         href='https://portfolio-abhi25.netlify.app/'
         style={{cursor:'pointer', color:'blue'}}
         target='_blank'
        >
       Abhishek Bharti
        </a>
    </div>
  )
}

export default Footer