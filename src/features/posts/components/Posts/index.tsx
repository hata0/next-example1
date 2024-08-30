import { POSTS } from "@/tests/mocks/posts";

export const Posts = () => {
  return (
    <div>
      <div>投稿一覧</div>
      {POSTS.map((post, index) => (
        <div key={index}>
          <div>{post.name}</div>
          <div>{post.text}</div>
        </div>
      ))}
    </div>
  );
};
