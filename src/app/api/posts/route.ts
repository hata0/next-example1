import { PostsData } from "@/services/backend/posts";
import { POSTS } from "@/tests/mocks/posts";
import { delay } from "@/utils/delay";

export const GET = async () => {
  await delay(1000);
  return Response.json({
    posts: POSTS,
  } satisfies PostsData);
};
