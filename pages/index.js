import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POST} />
    </>
  );
};

export default HomePage;
