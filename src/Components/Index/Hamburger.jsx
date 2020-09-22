import React, { useState } from 'react'

const Hamburger = ({ showMenu, setshowMenu }) => {
   const [clickedBurger, setclickedBurger] = useState(false)

   function burgerClick() {
      console.log('yup')
      if (showMenu) {
         setshowMenu(false)
         setclickedBurger(false)
      } else {
         setshowMenu(true)
         setclickedBurger(true)
      }
   }

   return (
      <div className={`burger ${clickedBurger && 'transform-burger'}`} onClick={burgerClick}>
         <div className='layers layer1'></div>
         <div className='layers layer2'></div>
         <div className='layers layer3'></div>
      </div>
   )
}

export default Hamburger
