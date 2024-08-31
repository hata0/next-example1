import { ReactRenderer } from "@storybook/react";
import { Args, PartialStoryFn } from "storybook/internal/types";

import { QueryProvider } from "@/providers/QueryProvider";

export const DefaultDecorator = (Story: PartialStoryFn<ReactRenderer, Args>) => {
  return (
    <QueryProvider>
      <Story />
    </QueryProvider>
  );
};
