import React, { useState, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './Components/UI/ScrollToTop'
import Hamburger from './Components/UI/Hamburger'
import Index from './Components/Index/Index'
import Portfolio from './Components/Portfolio/Portfolio'
import PortfolioCompany from './Components/PortfolioCompany/PortfolioCompany'
import Contact from './Components/Contact/Contact'
// import HeroMenu from './Components/UI/HeroMenu'
const HeroMenu = lazy(() => import('./Components/UI/HeroMenu'))

function App() {
   const [showMenu, setshowMenu] = useState(false)

   return (
      <Router>
         <ScrollToTop />
         <div className='App'>
            <Hamburger showMenu={showMenu} setshowMenu={setshowMenu} />
            <Suspense fallback={<div>Loading Menu</div>}>
               <HeroMenu showMenu={showMenu} setshowMenu={setshowMenu} />
            </Suspense>
            <Route exact path='/' component={Index} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route path='/portfolio/:company' component={PortfolioCompany} />
            <Route path='/contact' component={Contact} />
         </div>
      </Router>
   )
}

export default App
