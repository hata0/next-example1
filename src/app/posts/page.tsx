import { Posts } from "@/features/posts/components/Posts";
import { getQueryClient } from "@/lib/tanstack-query/getQueryClient";
import { getPostsQueryHandler } from "@/services/backend/posts/query";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function PostsPage() {
  const client = getQueryClient();
  void client.prefetchQuery(getPostsQueryHandler());

  return (
    <HydrationBoundary state={dehydrate(client)}>
      <Posts />
    </HydrationBoundary>
  );
}
