import * as React from "react"
import Header from "../components/common/Header"
import HeroSection from "../components/Home/hero"
import StatsSection from "../components/Home/stats"
import PromiseSection from "../components/Home/promise"
import WhatWeDo from "../components/Home/whatWeDo"
import WhyChoose from "../components/Home/WhyChoose"


const Home = () => {
  return (

    <div className="bg-[#F4F5F7]">
              {/* <Header backGround="lg:bg-[#FF6702] lg:bg-opacity-[2%]" /> */}
              <Header backGround="bg-white" /> 
              <HeroSection/>
              <StatsSection/>
              <PromiseSection/>
              <WhatWeDo/>
<WhyChoose/>
      </div>
  )
}

export default Home