import { Post } from "@/services/backend/posts";

type Props = {
  posts: Post[];
};

export const Posts = ({ posts }: Props) => {
  return (
    <div>
      <div>投稿一覧</div>
      {posts.map((post, index) => (
        <div key={index}>
          <div>{post.name}</div>
          <div>{post.text}</div>
        </div>
      ))}
    </div>
  );
};
