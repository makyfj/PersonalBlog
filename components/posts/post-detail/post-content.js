import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

import classes from "./post-content.module.scss";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with python",
  image: "getting-started-nextjs.png",
  excerpt: "NextJS is a great framework ready for production",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
