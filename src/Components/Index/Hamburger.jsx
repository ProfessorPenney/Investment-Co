import React from 'react'

const Hamburger = ({ showMenu, setshowMenu }) => {
   function burgerClick() {
      setshowMenu(!showMenu)
   }

   return (
      <div className='burger' onClick={burgerClick}>
         <div className='layers layer1'></div>
         <div className='layers layer2'></div>
         <div className='layers layer3'></div>
      </div>
   )
}

export default Hamburger
