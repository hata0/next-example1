import { CheckError } from "@/features/error/components/CheckError";
import { getPostsPageData } from "@/features/posts/api/getPostsPageData";
import { Posts } from "@/features/posts/components/Posts";

export default async function PostsPage() {
  const res = await getPostsPageData();

  if (res?.ok) {
    return <CheckError status={res?.status} />;
  } else {
    return <Posts />;
  }
}
