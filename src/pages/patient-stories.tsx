import * as React from "react";
import BlogCarousel from "../components/Blog/blogCarousel";
import Header from "../components/common/Header";
import { blogs } from "../components/constants";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import StoryHero from "../components/Stories/storyHero";





const PatientsPage = () => {
  return (
    <div className="bg-[white] overflow-hidden">
      <Header backGround="bg-white" />
      <StoryHero/>
      <div className="mt-[2em]">
          <BlogCarousel items={blogs} />
        </div>
     {/* <Blog1/> */}
<BookAppointment />
      <Footer />
    </div>
  );
};

export default PatientsPage;
