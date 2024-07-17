import { Post } from "@/.velite";

const PostCard = ({ post }: { post: Post }) => {
  return <div>{post.title}</div>;
};

export default PostCard;
