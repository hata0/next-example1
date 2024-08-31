import { getPosts, PostsData } from ".";
import { queryHandlerFactory } from "@/lib/tanstack-query/queryHandlerFactory";

export const getPostsQueryHandler = queryHandlerFactory<PostsData>({
  queryKey: ["posts"],
  queryFn: getPosts,
});
