import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SmallLogo from '../UI/SmallLogo'
import HeaderLinks from '../UI/HeaderLinks'
import Footer from '../UI/Footer'
import companyData from './companyData'
import FintechSVG from '../../SVGs/FintechSVG'
import RetechSVG from '../../SVGs/RetechSVG'
import ExtechSVG from '../../SVGs/ExtechSVG'
import LifetechSVG from '../../SVGs/LifetechSVG'

const PortfolioCompany = ({ match }) => {
   const [company, setcompany] = useState(companyData[0])
   const [otherInvestments, setotherInvestments] = useState(companyData)
   const [imageLoaded, setimageLoaded] = useState(false)
   const history = useHistory()

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   useEffect(() => {
      document.querySelector('.burger').classList.add('burger-appear', 'burger-blue')
      const newCompany = companyData.find(company => company.name === match.params.company)
      if (newCompany !== undefined) {
         setcompany(newCompany)
         setotherInvestments(companyData.filter(company => company.name !== match.params.company))
      }
   }, [match.params.company])

   function handleScroll() {
      if (
         document.querySelector('.other-investments').getBoundingClientRect().top <=
         window.innerHeight * 0.1
      ) {
         document.querySelector('.burger').classList.remove('burger-blue')
      } else {
         document.querySelector('.burger').classList.add('burger-blue')
      }
   }

   function companyRedirect() {
      window.open(`https://${company.website}`, '_blank')
   }

   function switchCompany(otherCompany) {
      setimageLoaded(false)
      history.push(`/portfolio/${otherCompany.name}`)
   }

   return (
      <div className='portfolio-co'>
         <SmallLogo />
         <HeaderLinks />
         <section className='company' style={{ backgroundColor: company.background }}>
            <header className='hero'>
               <div className='title'>
                  <header>
                     <img
                        src={company.logo}
                        alt={company.Capitalname}
                        style={{ height: company.logoHeight }}
                     />
                  </header>
                  <h1>{company.headline}</h1>
               </div>
               <img
                  className={`hero-img ${company.name}-img image-${
                     imageLoaded ? 'visible' : 'hidden'
                  }`}
                  src={company.heroImg}
                  alt=''
                  onLoad={() => setimageLoaded(true)}
               />
            </header>
            <div className='body'>
               <p className='font-body'>{company.description}</p>
               <div className='founder list-line'>
                  <h3>{company.founderTitle}</h3>
                  <div className='founder-list'>
                     {company.founders.map(founder => (
                        <h2>{founder}</h2>
                     ))}
                  </div>
               </div>
               <div className='founded list-line'>
                  <h3>FOUNDED</h3>
                  <h2>{company.founded}</h2>
               </div>
               <div className='category list-line'>
                  <h3>CATEGORY</h3>
                  <h2>{company.category}</h2>
               </div>
               <div className='website list-line'>
                  <h3>WEBSITE</h3>
                  <button className='button-oval' onClick={companyRedirect}>
                     visit {company.website}
                  </button>
               </div>
            </div>
         </section>
         <section className='other-investments portfolio'>
            <h1 className='our-investments'>Our investments</h1>
            <p className='investment-p font-body'>
               WestCap is fueling the success of the world’s most disruptive asset-light, tech
               enabled marketplace solutions.
            </p>
            <div className='investment-flex'>
               {otherInvestments.map(otherCompany => (
                  <div
                     key={otherCompany.name}
                     className={`grid-item hover-${otherCompany.color}`}
                     onClick={() => switchCompany(otherCompany)}>
                     <h2>{otherCompany.capitalName}</h2>
                     <p className='font-body'>{otherCompany.headline2}</p>
                     <div className='icon-flex'>
                        <img src={otherCompany.logo} alt={otherCompany.capitalName} />
                        {otherCompany.icon === 'fintech' && <FintechSVG />}
                        {otherCompany.icon === 'retech' && <RetechSVG />}
                        {otherCompany.icon === 'lifetech' && <LifetechSVG />}
                        {otherCompany.icon === 'extech' && <ExtechSVG />}
                     </div>
                  </div>
               ))}
            </div>
         </section>
         <Footer />
      </div>
   )
}

export default PortfolioCompany
