import AboutSection3 from "@/components/About/AboutSection3";
import HolidayHero from "@/components/Holidays/HolidayHero";
import HolidaySection2 from "@/components/Holidays/HolidaySection2";
import HolidaySection3 from "@/components/Holidays/HolidaySection3";
import HolidaySection4 from "@/components/Holidays/HolidaySection4";

import Section4 from "@/components/Section/Section4";
import TickerStrip from "@/components/Ticker/TickerStrip";
import React from "react";

const page = () => {
  return (
    <div>
      <HolidayHero />
      <TickerStrip />
      <HolidaySection2 />
      <HolidaySection3 />
      <HolidaySection4 />
      <Section4 />
      <AboutSection3 />
    </div>
  );
};

export default page;
