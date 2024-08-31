import { postsOptions } from "@/features/posts/api/posts-options";
import { Posts } from "@/features/posts/components/Posts";
import { getQueryClient } from "@/lib/tanstack-query/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function PostsPage() {
  const client = getQueryClient();
  void client.prefetchQuery(postsOptions);

  return (
    <HydrationBoundary state={dehydrate(client)}>
      <Posts />
    </HydrationBoundary>
  );
}
