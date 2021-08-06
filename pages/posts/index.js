import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const PostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
export default PostsPage;
