import PageBanner from "../components/PageBanner";
import ServiceDetail from "../components/ServiceDetail";

export default function CustomManufacturing() {
  return (
    <>
      <PageBanner
        light="Custom Manufacturing"
        bold="Solution"
        crumbs={[
          { label: "Services", to: "/services" },
          { label: "Custom Manufacturing Solution" },
        ]}
      />
      <ServiceDetail />
    </>
  );
}