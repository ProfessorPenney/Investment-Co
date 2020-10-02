import React from 'react'

const ArrowSVG = () => {
   return (
      <svg
         className='arrowSVG'
         enableBackground='new 0 0 16 16'
         viewBox='0 0 16 16'
         xmlns='http://www.w3.org/2000/svg'>
         <g
            style={{
               fill: 'none',
               stroke: '#000',
               strokeWidth: 2,
               strokeLinecap: 'round',
               strokeLinejoin: 'round',
               strokeMiterlimit: 10
            }}>
            <path d='m1.1 8h13.5' />
            <path d='m9.3 13.3 5.3-5.3-5.3-5.3' />
         </g>
      </svg>
   )
}

export default ArrowSVG
