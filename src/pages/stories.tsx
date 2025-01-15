import * as React from "react";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import DanielsStruggle from "../components/Stories/DanielsStruggle";
import StoriesHero2 from "../components/Stories/storiesHer2";


const Stories = () => {
  return (
    <div className="bg-[white]">
      <Header backGround="bg-white" />
      <StoriesHero2/>
      < DanielsStruggle/>
     
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Stories;

