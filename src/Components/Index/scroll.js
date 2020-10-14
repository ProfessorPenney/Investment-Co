const scroll = () => {
   // BOTTOM OF PAGE
   if (
      document.querySelector('.level6-begin').getBoundingClientRect().top <=
      window.innerHeight * (1 / 2)
   ) {
      document.querySelector('.level6').classList.add('level6-appear')
      document.querySelector('.level5').classList.remove('level5-appear')
      document.querySelector('.background-color').classList.remove('background-color-appear')
      document.querySelector('.burger').classList.add('burger-blue')
   } else if (
      document.querySelector('.level5').getBoundingClientRect().top <=
      window.innerHeight * (2 / 3)
   ) {
      document.querySelector('.background-color').classList.add('background-color-appear')
      document.querySelector('.level6').classList.remove('level6-appear')
      document.querySelector('.level5').classList.add('level5-appear')
      document.querySelector('.background-color').classList.add('background-blue')
      document.querySelector('.level4').classList.remove('level4-appear')
      document.querySelector('.burger').classList.remove('burger-blue')
   } else if (
      document.querySelector('.level4').getBoundingClientRect().top <=
      window.innerHeight * (2 / 3)
   ) {
      document.querySelector('.level4').classList.add('level4-appear')
      document.querySelector('.background1').classList.remove('background-appear')
      document.querySelector('.level5').classList.remove('level5-appear')
      document.querySelector('.background-color').classList.remove('background-blue')
      document.querySelector('.background-color').classList.add('background-color-appear')
      document.querySelector('.menu4').classList.remove('menu-item-shaded')
      document.querySelector('.sticky-menu').classList.remove('menu-appear')
      document.querySelector('.burger').classList.add('burger-blue')
   } else if (
      document.querySelector('.section5').getBoundingClientRect().top <=
      window.innerHeight * (2 / 3)
   ) {
      document.querySelector('.background1').classList.add('background5')
      document.querySelector('.background1').classList.add('background-appear')
      document.querySelector('.background-color').classList.remove('background-color-appear')
      document.querySelector('.menu4').classList.add('menu-item-shaded')
      document.querySelector('.menu3').classList.remove('menu-item-shaded')
      document.querySelector('.sticky-menu').classList.add('menu-appear')
      document.querySelector('.level4').classList.remove('level4-appear')
      document.querySelector('.burger').classList.remove('burger-blue')
   } else if (
      document.querySelector('.section4').getBoundingClientRect().top <=
      window.innerHeight * (2 / 3)
   ) {
      document.querySelector('.background1').classList.add('background4')
      document.querySelector('.background1').classList.remove('background5')
      document.querySelector('.menu3').classList.add('menu-item-shaded')
      document.querySelector('.menu4').classList.remove('menu-item-shaded')
      document.querySelector('.menu2').classList.remove('menu-item-shaded')
   } else if (
      document.querySelector('.section3').getBoundingClientRect().top <=
      window.innerHeight * (2 / 3)
   ) {
      document.querySelector('.background1').classList.add('background3')
      document.querySelector('.background1').classList.remove('background4')
      document.querySelector('.menu2').classList.add('menu-item-shaded')
      document.querySelector('.menu3').classList.remove('menu-item-shaded')
      document.querySelector('.menu1').classList.remove('menu-item-shaded')
   } else if (
      document.querySelector('.section2').getBoundingClientRect().top <=
      window.innerHeight * (2 / 3)
   ) {
      document.querySelector('.background1').classList.add('background2')
      document.querySelector('.background1').classList.remove('background3')
      document.querySelector('.menu1').classList.add('menu-item-shaded')
      document.querySelector('.menu2').classList.remove('menu-item-shaded')
      document.querySelectorAll('.tech').forEach(node => node.classList.remove('font-green'))
   } else if (
      document.querySelector('.section1').getBoundingClientRect().top <=
      window.innerHeight * (2 / 3)
   ) {
      document.querySelector('.background1').classList.add('background-appear')
      document.querySelector('.background1').classList.remove('background2')
      document.querySelector('.background-color').classList.remove('background-color-appear')
      document.querySelector('.sticky-menu').classList.add('menu-appear')
      document.querySelector('.menu1').classList.remove('menu-item-shaded')
      document.querySelectorAll('.tech').forEach(node => node.classList.add('font-green'))
      document
         .querySelector('.investment-container')
         .classList.remove('investment-container-appear')
      document.querySelector('.burger').classList.remove('burger-blue')
   } else if (
      document.querySelector('.investment-container').getBoundingClientRect().top <=
      window.innerHeight * (2 / 3)
   ) {
      document.querySelector('.background1').classList.remove('background-appear')
      document.querySelector('.background-color').classList.add('background-color-appear')
      document.querySelector('.sticky-menu').classList.remove('menu-appear')
      document.querySelector('.investment-container').classList.add('investment-container-appear')
      document.querySelector('.svg-container').classList.remove('svg-container-appear')
      document.querySelector('.burger').classList.add('burger-blue')
      document.querySelector('.caption-20years').classList.remove('caption-20years-appear')
   } else if (
      document.querySelector('.caption-20years').getBoundingClientRect().top <=
      window.innerHeight * (9 / 10)
   ) {
      document.querySelector('.caption-20years').classList.add('caption-20years-appear')
      document
         .querySelector('.investment-container')
         .classList.remove('investment-container-appear')
      document.querySelector('.svg-container').classList.add('svg-container-appear')
   } else if (
      document.querySelector('.level2').getBoundingClientRect().top <=
      window.innerHeight * (1 / 3)
   ) {
      document.querySelector('.burger').classList.add('burger-blue')
      document.querySelector('.background-color').classList.add('background-color-appear')
      document.querySelector('.main-header').classList.add('main-header-disappear')
      document.querySelector('.svg-container').classList.add('svg-container-appear')
   } else {
      document.querySelector('.caption-20years').classList.remove('caption-20years-appear')
      document.querySelector('.burger').classList.remove('burger-blue')
      document.querySelector('.svg-container').classList.remove('svg-container-appear')
      document.querySelector('.background-color').classList.remove('background-color-appear')
      document.querySelector('.main-header').classList.remove('main-header-disappear')
   }
} // TOP OF PAGE

export default scroll
