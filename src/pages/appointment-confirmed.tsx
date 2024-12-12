import React from 'react'
import BlogCarousel from '../components/Blog/blogCarousel'
import Header from '../components/common/Header'
import { blogs } from '../components/constants'
import BackgroundSection from '../components/Home/BacgroundStories'
import Footer from '../components/Home/footer'
import TestimonialCarousel from '../components/Home/testimonials'

const Appointment = () => {
  return (
    <div className="bg-[white] overflow-hidden">
    <Header backGround="bg-white" />
    <BackgroundSection padding="p-16">
          <TestimonialCarousel />
        </BackgroundSection>
        <div className="mt-[2em]">
          <BlogCarousel items={blogs} />
        </div>
        <Footer />
    </div>
  )
}

export default Appointment