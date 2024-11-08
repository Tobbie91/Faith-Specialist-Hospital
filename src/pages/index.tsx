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

const Home = () => {
  return (
    <div className="bg-[#F4F5F7]">
      <Header backGround="bg-white" />
      <HeroSection />
      <StatsSection />
      <PromiseSection />
      <WhatWeDo />
      <WhyChoose />
      <div>
        <BackgroundSection padding="p-16">
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
