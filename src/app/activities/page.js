import AboutSection3 from "@/components/About/AboutSection3";
import AcitivitySection1 from "@/components/Activity/AcitivitySection1";
import ActivityHero from "@/components/Activity/ActivityHero";
import Section4 from "@/components/Section/Section4";
import TickerStrip from "@/components/Ticker/TickerStrip";
import React from "react";

const page = () => {
  return (
    <div>
      <ActivityHero />
      <TickerStrip />
      <AcitivitySection1 />
      <Section4 />
      <AboutSection3 />
    </div>
  );
};

export default page;
