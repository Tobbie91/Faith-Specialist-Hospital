import * as React from "react";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import ServiceHero from "../components/About/services/hero";
import Deformity from "../components/About/services/deformity";
import TestimonialCarousel from "../components/Home/testimonials";
import BackgroundSection from "../components/Home/BacgroundStories";
import ServiceLinks1 from "../components/About/services/deformity1";

const Services1 = () => {
  return (
    <div className="bg-[white]">
      <Header backGround="bg-white" />
      <ServiceHero/>
      <ServiceLinks1/>
      <BackgroundSection padding="lg:p-16 pt-3 px-3 pb-16">
          <TestimonialCarousel />
        </BackgroundSection>
<div className="mt-[-3em]">   <BookAppointment /></div>
      <Footer />
    </div>
  );
};

export default Services1;
