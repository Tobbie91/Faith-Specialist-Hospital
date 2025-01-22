import React from 'react'
import { Helmet } from 'react-helmet'
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
    <div className="bg-[white] ">
      <Helmet>
        <title>Appointment-Making | Faith Specialist Hospital</title>
        <meta name="description" content="Welcome to Faith Specialist Hospital - your trusted healthcare provider. Book appointments, read testimonials, and stay informed about our services." />
        <meta property="og:title" content="Home | Faith Specialist Hospital" />
        {/* <meta property="og:description" content="Welcome to Faith Specialist Hospital - your trusted healthcare provider. Book appointments, read testimonials, and stay informed about our services." />
        <meta property="og:image" content="https://yourwebsite.com/home-og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Faith Specialist Hospital" />
        <meta name="twitter:description" content="Welcome to Faith Specialist Hospital - your trusted healthcare provider." />
        <meta name="twitter:image" content="https://yourwebsite.com/home-twitter-image.jpg" /> */}
      </Helmet>
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