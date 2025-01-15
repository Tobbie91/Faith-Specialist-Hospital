import * as React from "react";
import Header from "../components/common/Header";
import Hero from "../components/Gallery";
import Pictures from "../components/Gallery/pictures";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";


const Gallery = () => {
  return (
    <div className="bg-[white] ">
      <Header backGround="bg-white" />
      <Hero/>
      <Pictures/>
<BookAppointment />
      <Footer />
    </div>
  );
};

export default Gallery;
