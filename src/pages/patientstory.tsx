import * as React from "react";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import StoriesHero from "../components/Stories/storiesHer";
import BlountDisease from "../components/Stories/BlountDisease";

const PatientStory = () => {
  return (
    <div className="bg-[white]">
      <Header backGround="bg-white" />
      <StoriesHero/>
      < BlountDisease/>     
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default PatientStory;
