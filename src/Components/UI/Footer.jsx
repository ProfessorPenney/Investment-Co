import React from 'react'
import WLogo from '../../img/westcap logos/westcap-w-logo.png'

const Footer = () => {
   return (
      <footer className='footer'>
         <img src={WLogo} alt='W' />
         <p className='font-caption'>
            © 2020 Westcap Investment Partners, LLC. All Rights Reserved
         </p>
      </footer>
   )
}

export default Footer
