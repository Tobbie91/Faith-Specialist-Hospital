import * as React from "react";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import StoriesHero from "../components/Stories/storiesHer";
import BlountDisease from "../components/Stories/BlountDisease";
import { Helmet } from "react-helmet";

const PatientStory = () => {
  return (
    <div className="bg-[white]">
      <Helmet>
        <title>Patient-Story | Faith Specialist Hospital</title>
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
      <StoriesHero/>
      < BlountDisease/>     
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default PatientStory;
