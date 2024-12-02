import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const StoriesHero = () => {
  return (
    <div className='relative'>
          <StaticImage
          src="../../images/stories3.webp"
          alt="LinkedIn"
          className="w-full h-[500px]"
        />
    </div>
  )
}

export default StoriesHero