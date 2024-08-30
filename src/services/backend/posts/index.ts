import { BACKEND_URL } from "@/constants/backend-url";
import { fetcher } from "@/utils/fetcher";

export * from "./type";

export const createPath = () => `${BACKEND_URL}/posts`;

export const getPosts = () =>
  fetcher(undefined, createPath(), {
    cache: "no-store",
  });
