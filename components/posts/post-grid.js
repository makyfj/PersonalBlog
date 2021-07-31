import PostItem from "./post-item.js";
import classes from "./post-grid.module.scss";

const PostGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
};

export default PostGrid;
