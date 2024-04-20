import B2BHero from "@/components/B2B/B2BHero";
import B2BSection from "@/components/B2B/B2BSection";
import Section4 from "@/components/Section/Section4";
import TickerStrip from "@/components/Ticker/TickerStrip";
import React from "react";

const page = () => {
  return (
    <div>
      <B2BHero />
      <TickerStrip />
      <B2BSection />
      <Section4 />
    </div>
  );
};

export default page;
