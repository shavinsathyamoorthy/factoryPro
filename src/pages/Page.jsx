import PageBanner from "../components/PageBanner";
import PricingPlan from "../components/PricingPlan";
import WhatWeDo from "../components/WhatWeDo";
import Testimonials from "../components/Testimonials";

export default function Page() {
  return (
    <>
      <PageBanner light="Pricing" bold="plan" crumbs={[{ label: "Pricing" }]} />
      <PricingPlan />
      <WhatWeDo />
      <Testimonials />
    </>
  );
}