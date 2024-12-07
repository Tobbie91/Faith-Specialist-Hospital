import * as React from "react";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import StoriesHero from "../components/Stories/storiesHer";
import DanielsStruggle from "../components/Stories/DanielsStruggle";


const Stories = () => {
  return (
    <div className="bg-[white] overflow-hidden">
      <Header backGround="bg-white" />
      <StoriesHero/>
      < DanielsStruggle/>
     
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Stories;

