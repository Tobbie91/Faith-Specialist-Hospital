import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/common/Header";
import Hero from "../components/Gallery";
import Pictures from "../components/Gallery/pictures";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";


const Gallery = () => {
  return (
    <div className="bg-[white] ">
      <Helmet>
        <title>Gallery | Faith Specialist Hospital</title>
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
      <Hero/>
      <Pictures/>
<BookAppointment />
      <Footer />
    </div>
  );
};

export default Gallery;
