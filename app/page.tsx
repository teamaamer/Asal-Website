import Hero from "@/components/sections/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import Stats from "@/components/sections/Stats";
import CoreServices from "@/components/sections/CoreServices";
import WhyASAL from "@/components/sections/WhyASAL";
import IndustriesSnapshot from "@/components/sections/IndustriesSnapshot";
import SecurityHighlight from "@/components/sections/SecurityHighlight";
import CareersPreview from "@/components/sections/CareersPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <Stats />
      <CoreServices />
      <WhyASAL />
      <IndustriesSnapshot />
      <SecurityHighlight />
      <CareersPreview />
      <FinalCTA />
    </>
  );
}
