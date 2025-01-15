import * as React from "react";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import TeamComponent from "../components/Team/index";

const Team = () => {
  return (
    <div className="bg-[white] ">
      <Header backGround="bg-white" />
<TeamComponent/>
<BookAppointment />
      <Footer />
    </div>
  );
};

export default Team;
