import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const StoriesHero2 = () => {
  return (
    <div className='relative mt-[-2em]'>
          <StaticImage
          src="../../images/Daniel1.png"
          alt="LinkedIn"
          className="w-full lg:h-[500px] h-[700px] mt-[3em] lg:mt-[4em]"
        />
    </div>
  )
}

export default StoriesHero2