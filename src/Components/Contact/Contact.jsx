import React, { useEffect } from 'react'
import SmallLogo from '../UI/SmallLogo'
import HeaderLinks from '../UI/HeaderLinks'
import Footer from '../UI/Footer'

const Contact = () => {
   useEffect(() => {
      document.querySelector('.burger').classList.remove('burger-blue')
      document.querySelector('.burger').style.opacity = 1
   }, [])

   return (
      <section className='contact'>
         <SmallLogo />
         <HeaderLinks />
         <div>
            <div className='address-box'>
               <div className='address-flex'>
                  <h1>New York</h1>
                  <p>40° 43' 58.44'' N, 73° 59' 29.436'' W</p>
               </div>
               <address>
                  <h4>908 Broadway, New York, NY 10003</h4>
               </address>
            </div>
            <div className='address-box'>
               <div className='address-flex'>
                  <h1>San Francisco</h1>
                  <p>37° 47' 50.0" N, 122° 24' 18.2" W</p>
               </div>
               <address>
                  <h4>950 Pacific Avenue, San Francisco, CA 94133</h4>
               </address>
            </div>
            <div className='contact-emails font-body'>
               <header>Contacts</header>
               <p>careers@gmail.com</p>
               <p>press@gmail.com</p>
               <p>deals@gmail.com</p>
            </div>
         </div>

         <Footer />
      </section>
   )
}

export default Contact
