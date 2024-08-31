"use client";

import { HttpError } from "@/utils/http-error";
import { Custom401 } from "../401";
import { Custom500 } from "../500";
import { UnexpectedError } from "../UnexpectedError";

type Props = {
  error: Error | HttpError;
  reset: () => void;
};

export const CheckError = ({ error, reset }: Props) => {
  if (error instanceof HttpError) {
    if (error.status === 401) {
      return <Custom401 />;
    } else {
      return <Custom500 />;
    }
  } else {
    return <UnexpectedError reset={reset} />;
  }
};
