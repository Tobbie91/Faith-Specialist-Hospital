import React from 'react'
import AppointmentHero2 from '../components/Appointment/appointmentHero'
import Steps from '../components/Appointment/whatNext'
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
    <AppointmentHero2/>
    <Steps/>
    <BackgroundSection padding="p-16">
          <TestimonialCarousel />
        </BackgroundSection>
        <div className="mt-[4em]">
          <p className='font-semibold lg:text-[33px] px-[4em] mb-4'>Read More From Our Experts!</p>
          <BlogCarousel items={blogs} />
        </div>
        <Footer />
    </div>
  )
}

export default Appointment