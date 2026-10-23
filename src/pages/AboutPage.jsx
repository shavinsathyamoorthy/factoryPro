import PageBanner from "../components/PageBanner";
import About from "../components/About";
import Approach from "../components/Approach";
import History from "../components/History";
import WhatWeDo from "../components/WhatWeDo";
import KeyFeatures from "../components/KeyFeatures";
import OurProcess from "../components/OurProcess";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";



export default function AboutPage() {
  return (
    <>
      <PageBanner light="About" bold="Us" crumbs={[{ label: "About Us" }]} />
      <About />
      <Approach />
      <History />
      <WhatWeDo />
      <KeyFeatures />
      <OurProcess />
      <Team />
      <Testimonials />
      <Faq />
    </>
  );
}