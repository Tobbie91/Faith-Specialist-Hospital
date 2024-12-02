import * as React from "react";
import Header from "../components/common/Header";
import BookAppointment from "../components/Home/bookAppointment";
import Footer from "../components/Home/footer";
import StoriesHero from "../components/Stories/storiesHer";
import DanielsStruggle from "../components/Stories/DanielsStruggle";
import Carousel from "../components/Stories/storyCarousel";
import { StaticImage } from "gatsby-plugin-image";

const Stories = () => {
  return (
    <div className="bg-[white] overflow-hidden">
      <Header backGround="bg-white" />
      <StoriesHero />
      <DanielsStruggle />
      <Carousel
        items={[
          {
            title: "From Struggles to Strength: Daniel’s Journey to Recovery",
            description:
              "A promising athlete, Liam’s career was halted by a severe sports injury. With specialized sports medicine and rehabilitation at Faith Specialist Hospital, Liam made a full recovery and returned to his passion. Explore his recovery journey.",
            image: (
              <StaticImage
                src="../images/stories3.webp"
                alt="Liam’s Leap"
                className="rounded-md"
              />
            ),
            slug: "item-1",
          },
          {
            title: "11-Year-Old Grace Overcomes Blount’s Disease",
            description:
              "A promising athlete, Liam’s career was halted by a severe sports injury. With specialized sports medicine and rehabilitation at Faith Specialist Hospital, Liam made a full recovery and returned to his passion. Explore his recovery journey.",
            image: (
              <StaticImage
                src="../images/stories3.webp"
                alt="Liam’s Leap"
                className="rounded-md"
              />
            ),
            slug: "item-2",
          },
        ]}
      />
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Stories;
