"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getPostsQueryHandler } from "@/services/backend/posts/query";

export const Posts = () => {
  const {
    data: { posts },
  } = useSuspenseQuery(getPostsQueryHandler());

  return (
    <div>
      <div>投稿一覧</div>
      {posts.map((post, index) => (
        <div key={index}>
          <div className="relative bg-white px-6 pb-8 pt-10 m-2 shadow-sm ring-1 ring-gray-900/5 md:mx-auto md:max md:rounded-lg md:px-10">
            <div className="text-xl font-bold">{post.name}</div>
            <div className="text-lg">{post.title}</div>
            <div>{post.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
