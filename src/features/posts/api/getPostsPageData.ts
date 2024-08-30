import { getPosts, Post } from "@/services/backend/posts";

export const getPostsPageData = async () => {
  const { error, res } = await getPosts();
  const posts = (await res?.json()) as Post[];
  return posts;
};
