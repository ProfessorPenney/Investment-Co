import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Hamburger from './Components/UI/Hamburger'
import HeroMenu from './Components/UI/HeroMenu'
import Index from './Components/Index/Index'
import Portfolio from './Components/Portfolio/Portfolio'
import PortfolioCompany from './Components/PortfolioCompany/PortfolioCompany'
import Contact from './Components/Contact/Contact'

function App() {
   const [showMenu, setshowMenu] = useState(false)
   const [portfolioCompany, setportfolioCompany] = useState('')

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
            <Route exact path='/portfolio' component={Portfolio} />
            <Route
               exact
               path='/portfolio/co'
               render={portfolioCompany => <PortfolioCompany company={portfolioCompany} />}
            />
            <Route path='/contact' component={Contact} />
         </div>
      </Router>
   )
}

export default App
