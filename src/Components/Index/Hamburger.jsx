import React from 'react'

const Hamburger = ({ showMenu, setshowMenu }) => {
   function burgerClick() {
      console.log('yup')
      if (showMenu) {
         setshowMenu(false)
         document.querySelector('.burger').classList.remove('clicked-burger')
      } else {
         setshowMenu(true)
         document.querySelector('.burger').classList.add('clicked-burger')
      }
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
