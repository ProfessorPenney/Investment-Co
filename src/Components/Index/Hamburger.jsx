import React from 'react'

const Hamburger = ({ showMenu, setshowMenu }) => {
   function burgerClick() {
      console.log('yup')
      if (showMenu) {
         setshowMenu(false)
      } else {
         setshowMenu(true)
      }
   }

   return (
      <div className='hamburger' onClick={burgerClick}>
         <div className='layers'></div>
         <div className='layers'></div>
         <div className='layers'></div>
      </div>
   )
}

export default Hamburger
