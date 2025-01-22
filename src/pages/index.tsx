import * as React from "react";
import Header from "../components/common/Header";
import HeroSection from "../components/Home/hero";
import StatsSection from "../components/Home/stats";
import PromiseSection from "../components/Home/promise";
import WhatWeDo from "../components/Home/whatWeDo";
import WhyChoose from "../components/Home/WhyChoose";
import TestimonialCarousel from "../components/Home/testimonials";
import BackgroundSection from "../components/Home/BacgroundStories";
import Informed from "../components/Home/stayInformed";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import { Helmet } from "react-helmet"; 

const Home = () => {
  return (
    <div className="bg-[#F4F5F7]">
       <Helmet>
        <title>Home | Faith Specialist Hospital</title>
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
      <HeroSection />
      <StatsSection />
      <PromiseSection />
      <WhatWeDo />
      <WhyChoose />
      <div>
        <BackgroundSection padding="p-5">
          <TestimonialCarousel />
        </BackgroundSection>
      </div>
      <Informed />

      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Home;
