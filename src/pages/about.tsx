import * as React from "react";
import Header from "../components/common/Header";
import WhyChoose from "../components/Home/WhyChoose";
import TestimonialCarousel from "../components/Home/testimonials";
import BackgroundSection from "../components/Home/BacgroundStories";
import Informed from "../components/Home/stayInformed";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import AboutHero from "../components/About/hero";
import WhoSection from "../components/About/whowearae";
import StatsSection from "../components/About/stats";
import Vision from "../components/About/Vision";
import Values from "../components/About/Values";

const Hospital = () => {
  return (
    <div className="bg-[white]">
      <Header backGround="bg-white" />
      <AboutHero/>
      <WhoSection/>
      <StatsSection />
      <Vision/>
      <Values/>
      <WhyChoose />
  {/* <Map/> */}
<BookAppointment />
      <Footer />
    </div>
  );
};

export default Hospital;
