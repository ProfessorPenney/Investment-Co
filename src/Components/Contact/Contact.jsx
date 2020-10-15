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
         <div className='address-box'>
            <div className='address-flex'>
               <h1 className='desktop-version'>New York</h1>
               <h1 className='mobile-version'>NYC</h1>
               <div className='coords-flex desktop-version'>
                  <p>40° 43' 58.44" N,</p>
                  <p> 73° 59' 29.436" W</p>
               </div>
               <div className='coords mobile-version'>
                  <p>40° 43' 58.44" N</p>
                  <p>73° 59' 29.436" W</p>
               </div>
            </div>
            <address>
               <h4 className='desktop-version'>908 Broadway, New York, NY 10003</h4>
               <h4 className='mobile-version'>
                  908 Broadway
                  <br />
                  New York, NY 10003
               </h4>
            </address>
         </div>
         <div className='address-box'>
            <div className='address-flex'>
               <h1 className='desktop-version'>San Francisco</h1>
               <h1 className='mobile-version'>SFO</h1>
               <div className='coords-flex desktop-version'>
                  <p>37° 47' 50.0" N,</p>
                  <p> 122° 24' 18.2" W</p>
               </div>
               <div className='coords mobile-version'>
                  <p>37° 47' 50.0" N</p>
                  <p>122° 24' 18.2" W</p>
               </div>
            </div>
            <address>
               <h4 className='desktop-version'>950 Pacific Avenue, San Francisco, CA 94133</h4>
               <h4 className='mobile-version'>
                  950 Pacific Avenue
                  <br />
                  San Francisco, CA 94133
               </h4>
            </address>
         </div>
         <div className='contact-emails font-body'>
            <header>Contacts</header>
            <p>careers@gmail.com</p>
            <p>press@gmail.com</p>
            <p>deals@gmail.com</p>
         </div>
         <Footer />
      </section>
   )
}

export default Contact
