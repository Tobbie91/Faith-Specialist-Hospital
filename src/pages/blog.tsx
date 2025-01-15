import * as React from "react";

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
