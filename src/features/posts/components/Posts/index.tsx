"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { postsOptions } from "../../api/posts-options";

export const Posts = () => {
  const { data: posts } = useSuspenseQuery(postsOptions);

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
