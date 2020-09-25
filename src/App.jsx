import React from 'react'
import './App.css'
import Level2 from './Components/Index/Level2'
import Level3 from './Components/Index/Level3'
import Level4 from './Components/Index/Level4'
import MainHeader from './Components/Index/MainHeader'

function App() {
   return (
      <div className='App'>
         <div className='rotating-background'>
            <div className='background-color fade-out-white'></div>
         </div>
         <MainHeader />
         <Level2 />
         <Level3 />
         <Level4 />
      </div>
   )
}

export default App
