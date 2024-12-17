import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const StoriesHero = () => {
  return (
    <div className='relative'>
          <StaticImage
          src="../../images/stories3.png"
          alt="LinkedIn"
          className="w-full lg:h-[500px] h-[700px] mt-[3em] lg:mt-[8em]"
        />
    </div>
  )
}

export default StoriesHero