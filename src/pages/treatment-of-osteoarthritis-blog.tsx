import * as React from "react";
import Blog1 from "../components/Blog/Blog1";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";



const Treatment = () => {
  return (
    <div className="bg-[white] overflow-hidden">
      <Header backGround="bg-white" />
      < Blog1/>
      <BookAppointment/>
      <Footer />
    </div>
  );
};

export default Treatment;

