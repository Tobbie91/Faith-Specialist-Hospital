import * as React from "react";
import Header from "../components/common/Header";
import WhyChoose from "../components/Home/WhyChoose";
import TestimonialCarousel from "../components/Home/testimonials";
import BackgroundSection from "../components/Home/BacgroundStories";
import Informed from "../components/Home/stayInformed";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import AboutHero from "../components/About/history/hero";
import WhoSection from "../components/About/history/whowearae";
import StatsSection from "../components/About/history/stats";
import Vision from "../components/About/history/Vision";
import Values from "../components/About/history/Values";
import MapComponent from "../components/map";
import { Helmet } from "react-helmet";

const Hospital = () => {
  return (
    <div className="bg-[white] ">
      <Helmet>
        <title>History | Faith Specialist Hospital</title>
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
      <AboutHero/>
      <WhoSection/>
      <StatsSection />
      <Vision/>
      <Values/>
      <WhyChoose />
      <MapComponent/>
<BookAppointment />
      <Footer />
    </div>
  );
};

export default Hospital;
