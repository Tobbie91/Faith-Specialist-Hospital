import * as React from "react";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import ServiceHero from "../components/About/services/hero";
import TestimonialCarousel from "../components/Home/testimonials";
import BackgroundSection from "../components/Home/BacgroundStories";
import ServiceLinks4 from "../components/About/services/deformity4";

const Services4 = () => {
  return (
    <div className="bg-[white]">
      <Header backGround="bg-white" />
      <ServiceHero/>
      <ServiceLinks4/>
      <BackgroundSection padding="p-16">
          <TestimonialCarousel />
        </BackgroundSection>
<BookAppointment />
      <Footer />
    </div>
  );
};

export default Services4;