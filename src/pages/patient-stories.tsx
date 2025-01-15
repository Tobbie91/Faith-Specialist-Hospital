import * as React from "react";
import BlogCarousel from "../components/Blog/blogCarousel";
import Header from "../components/common/Header";
import { blogs, stories2,  } from "../components/constants";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import StoriesLink from "../components/Stories/StoriesLink";
import Carousel from "../components/Stories/storyCarousel";
import StoryHero from "../components/Stories/storyHero";





const Patient = () => {
  return (
    <div className="bg-[white] ">
      <Header backGround="bg-white" />
      <StoryHero/>
    <StoriesLink/> 
    <div className="mt-[6em] items-start lg:ml-[-14em] flex justify-start l">   
       <Carousel items={stories2} />
    </div>   

<BookAppointment />
      <Footer />
    </div>
  );
};

export default Patient;
