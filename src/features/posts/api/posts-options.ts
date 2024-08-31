import { getPosts, PostsData } from "@/services/backend/posts";
import { queryOptions } from "@tanstack/react-query";

export const postsOptions = queryOptions<PostsData>({
  queryKey: ["posts"],
  queryFn: async () => {
    const { error, res } = await getPosts();
    throw new Error();
    return res?.json();
  },
});
