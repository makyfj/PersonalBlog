import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with python",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a great framework ready for production",
    date: "2022-02-10",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POST} />
    </>
  );
};

export default HomePage;
