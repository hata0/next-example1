import { getPosts, Post } from "@/services/backend/posts";

export const getPostsPageData = async () => {
  const { error, res } = await getPosts();
  if (error) {
    throw new Error();
  }
  if (res?.ok) {
    const posts = (await res?.json()) as Post[];
  }
  return res;
};
