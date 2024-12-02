import * as React from "react";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import ServiceHero from "../components/About/services/hero";
import TestimonialCarousel from "../components/Home/testimonials";
import BackgroundSection from "../components/Home/BacgroundStories";
import ServiceLinks2 from "../components/About/services/deformity2";

const Services2 = () => {
  return (
    <div className="bg-[white] overflow-hidden">
      <Header backGround="bg-white" />
      <ServiceHero/>
      <ServiceLinks2/>
      <BackgroundSection padding="p-16">
          <TestimonialCarousel />
        </BackgroundSection>
<BookAppointment />
      <Footer />
    </div>
  );
};

export default Services2;
