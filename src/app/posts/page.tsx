import { getPostsPageData } from "@/features/posts/api/getPostsPageData";
import { Posts } from "@/features/posts/components/Posts";

export default async function PostsPage() {
  const posts = await getPostsPageData();

  return <Posts posts={posts} />;
}
