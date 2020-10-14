import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ScrollToTop from './Components/UI/ScrollToTop'
import Hamburger from './Components/UI/Hamburger'
import Index from './Components/Index/Index'
import Portfolio from './Components/Portfolio/Portfolio'
import PortfolioCompany from './Components/PortfolioCompany/PortfolioCompany'
import Contact from './Components/Contact/Contact'
import HeroMenu from './Components/UI/HeroMenu'

function App() {
   const [showMenu, setshowMenu] = useState(false)

   return (
      <Router>
         <ScrollToTop />
         <div className='App'>
            <HeroMenu showMenu={showMenu} setshowMenu={setshowMenu} />
            <Switch>
               <Route
                  exact
                  path='/'
                  render={() => <Index showMenu={showMenu} setshowMenu={setshowMenu} />}
               />
               <Route render={() => <Hamburger showMenu={showMenu} setshowMenu={setshowMenu} />} />
            </Switch>
            <Route exact path='/portfolio' component={Portfolio} />
            <Route path='/portfolio/:company' component={PortfolioCompany} />
            <Route path='/contact' component={Contact} />
         </div>
      </Router>
   )
}

export default App
