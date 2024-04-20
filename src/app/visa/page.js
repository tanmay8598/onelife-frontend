import AboutSection3 from "@/components/About/AboutSection3";
import Section4 from "@/components/Section/Section4";
import TickerStrip from "@/components/Ticker/TickerStrip";
import VisaHero from "@/components/Visa/VisaHero";
import VisaSection1 from "@/components/Visa/VisaSection1";
import React from "react";

const page = () => {
  return (
    <div>
      <VisaHero />
      <TickerStrip />
      <VisaSection1 />
      <Section4 />
      <AboutSection3 />
    </div>
  );
};

export default page;
