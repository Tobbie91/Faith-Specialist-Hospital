import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const AppointmentHero2 = () => {
  return (
    <>
    {/* desktop */}
    <div className='relative hidden lg:block md:block'>
          <div className="min-w-full h-full relative font-sans ">
            <StaticImage
            src="../../images/appointmentcard.png"
              alt="Hero Image 1"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
              <h1 className="text-white text-[48px] font-medium text-center">
              Your Appointment Request Has Been Received!
              </h1>
              <p className='text-[20px] text-white'>We are honored to receive your information, and to potentially have the chance to work together. </p>
              <p className='text-[20px] text-white'>One of our trusted patient coordinators will be in touch with you soon!</p>
            </div>
          </div>
    </div>

    {/* mobile */}
    <div className='relative lg:hidden md:hidden'>
          <StaticImage
          src="../../images/mobileappoinmentcard.png"
          alt="LinkedIn"
          className="w-full lg:h-[500px] h-[700px] mt-[3em] lg:mt-[2em]"
        />
    </div>
    </>
  )
}

export default AppointmentHero2