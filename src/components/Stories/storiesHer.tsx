import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const StoriesHero = () => {
  return (
    <div className='relative mt-[-2em] lg:ml-0'>
          <StaticImage
          src="../../images/Grace1.jpg"
          alt="LinkedIn"
          className="w-full lg:h-[500px] h-[700px] mt-[3em] lg:mt-[8em]"
        />
    </div>
  )
}

export default StoriesHero