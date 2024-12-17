import * as React from "react";
import Blog2 from "../components/Blog/Blog2";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";



const JointSurgery = () => {
  return (
    <div className="bg-[white] overflow-hidden">
      <Header backGround="bg-white" />
      < Blog2/>
      <BookAppointment/>
      <Footer />
    </div>
  );
};

export default JointSurgery;

