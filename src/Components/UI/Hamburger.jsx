import React from 'react'
import { useEffect } from 'react'

const Hamburger = ({ showMenu, setshowMenu }) => {
   useEffect(() => {
      if (showMenu) {
         document.querySelector('.burger').classList.add('clicked-burger')
      } else document.querySelector('.burger').classList.remove('clicked-burger')
   }, [showMenu])

   return (
      <div className='burger' onClick={() => setshowMenu(!showMenu)}>
         <div className='layers layer1'></div>
         <div className='layers layer2'></div>
         <div className='layers layer3'></div>
      </div>
   )
}

export default Hamburger
