import PageBanner from "../components/PageBanner";
import BlogList from "../components/BlogList";

export default function BlogPage() {
  return (
    <>
      <PageBanner light="Latest Post" crumbs={[{ label: "Blog" }]} />
      <BlogList />
    </>
  );
}