import { Posts } from ".";

import { getPostsHandler } from "@/services/backend/posts/mock";
import { Meta } from "@/tests/storybook/types/Meta";
import { StoryObj } from "@/tests/storybook/types/StoryObj";

type T = typeof Posts;
type Story = StoryObj<T>;

export const Default: Story = {};

export default {
  component: Posts,
  parameters: {
    msw: {
      handlers: [getPostsHandler()],
    },
  },
  title: "Features/posts/Posts",
} satisfies Meta<T>;
