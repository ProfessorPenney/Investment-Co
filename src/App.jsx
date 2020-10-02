import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Hamburger from './Components/UI/Hamburger'
import HeroMenu from './Components/UI/HeroMenu'

import Index from './Components/Index/Index'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

function App() {
   const [showMenu, setshowMenu] = useState(false)

   useEffect(() => {
      window.onunload = () => {
         window.scrollTo(0, 0)
      }
   }, [])

   return (
      <Router>
         <div className='App'>
            <Hamburger showMenu={showMenu} setshowMenu={setshowMenu} />
            <HeroMenu showMenu={showMenu} setshowMenu={setshowMenu} />
            <Route exact path='/' component={Index} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
         </div>
      </Router>
   )
}

export default App
