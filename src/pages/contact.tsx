import * as React from "react";
import Header from "../components/common/Header";
import Hero from "../components/Contact/hero";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import ContactUs from "../components/Contact/contact";
import MapComponent from "../components/map";


const Contact = () => {
  return (
    <div className="bg-[white] ">
      <Header backGround="bg-white" />
      <Hero/>
      <ContactUs/>
      <MapComponent/>
<BookAppointment />
      <Footer />
    </div>
  );
};

export default Contact;
