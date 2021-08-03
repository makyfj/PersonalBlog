import AllPosts from "../../components/posts/all-posts";

const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with python",
    image: "getting-started-nextjs.png",
    excerpt: "NextJS is a great framework ready for production",
    date: "2022-02-10",
  },
];

const PostsPage = () => {
  return <AllPosts posts={DUMMY_POST} />;
};

export default PostsPage;
