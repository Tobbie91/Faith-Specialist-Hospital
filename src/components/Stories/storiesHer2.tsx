import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const StoriesHero2 = () => {
  return (
    <div className='relative'>
          <StaticImage
          src="../../images/story.png"
          alt="LinkedIn"
          className="w-full h-[500px] mt-[8em]"
        />
    </div>
  )
}

export default StoriesHero2