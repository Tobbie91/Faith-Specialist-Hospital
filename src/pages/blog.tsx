import * as React from "react";
import { Helmet } from "react-helmet";

import Blog1 from "../components/Blog/Blog1";
import BlogCarousel from "../components/Blog/blogCarousel";
import Hero from "../components/Blog/hero";
import Header from "../components/common/Header";
import { blogs } from "../components/constants";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";





const Blog = () => {
  return (
    <div className="bg-[white]">
      <Helmet>
        <title>Blog | Faith Specialist Hospital</title>
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
      <div className="mt-[2em]">
          <BlogCarousel items={blogs} />
        </div>
     {/* <Blog1/> */}
<BookAppointment />
      <Footer />
    </div>
  );
};

export default Blog;
