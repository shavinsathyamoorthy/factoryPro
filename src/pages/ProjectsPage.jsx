import PageBanner from "../components/PageBanner";
import ProjectsList from "../components/ProjectsList";

export default function ProjectsPage() {
  return (
    <>
      <PageBanner light="Our Project" crumbs={[{ label: "Projects" }]} />
      <ProjectsList />
    </>
  );
}